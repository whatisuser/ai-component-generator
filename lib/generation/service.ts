import { MockGenerationProvider } from "@/lib/generation/mock-provider";
import type { ComponentGeneration, GenerationProvider } from "@/lib/generation/types";

function createGenerationProvider(): GenerationProvider {
  return new MockGenerationProvider();
}

export async function generateComponent(
  prompt: string,
): Promise<ComponentGeneration> {
  const provider = createGenerationProvider();
  return provider.generateComponent(prompt);
}
