import { MockGenerationProvider } from "@/lib/generation/mock-provider";
import { OpenAIGenerationProvider } from "@/lib/generation/openai-provider";
import type { ComponentGeneration, GenerationProvider } from "@/lib/generation/types";

function createGenerationProvider(): GenerationProvider {
  if (process.env.OPENAI_API_KEY) {
    return new OpenAIGenerationProvider();
  }
  return new MockGenerationProvider();
}

export async function generateComponent(
  prompt: string,
): Promise<ComponentGeneration> {
  const provider = createGenerationProvider();
  return provider.generateComponent(prompt);
}
