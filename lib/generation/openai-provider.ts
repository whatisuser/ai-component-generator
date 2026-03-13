import OpenAI from "openai";
import type { ComponentGeneration, GenerationProvider } from "@/lib/generation/types";

export class OpenAIGenerationProvider implements GenerationProvider {
  private openai: OpenAI;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is not set in environment variables");
    }
    this.openai = new OpenAI({ apiKey });
  }

  async generateComponent(prompt: string): Promise<ComponentGeneration> {
    const response = await this.openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are an expert React and Tailwind CSS developer. 
Generate a single self-contained React component based 
on the user's prompt. Follow these rules strictly:

- Output ONLY the component code, no explanations, 
  no markdown, no code fences
- Use export default function ComponentName() syntax
- Use only Tailwind CSS for styling
- Use container query classes (@sm: @md: @lg:) instead 
  of viewport breakpoints (sm: md: lg:) for responsive 
  layouts so the component responds to its container 
  width not the browser viewport
- Use @container on the root element
- Make the component self-contained with no imports 
  except React hooks if needed
- Use realistic placeholder content, not lorem ipsum
- Component name should be PascalCase and descriptive
- Return only valid TSX that can be evaluated directly`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const code = response.choices[0]?.message?.content || "";

    // Parse the component name from the response using the same regex pattern as mock-provider.ts
    // (Note: mock-provider.ts actually doesn't have it, but lib/preview.ts does, using that)
    const EXPORT_DEFAULT_FUNCTION_PATTERN = /export\s+default\s+function\s+([A-Z]\w*)\s*\(/;
    const matchedName = code.match(EXPORT_DEFAULT_FUNCTION_PATTERN)?.[1];
    const componentName = matchedName ?? "GeneratedComponent";

    return {
      prompt,
      componentName,
      code,
    };
  }
}
