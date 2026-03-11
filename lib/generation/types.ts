export type ComponentGeneration = {
  prompt: string;
  componentName: string;
  code: string;
};

export type GenerationResponse = ComponentGeneration;

export type GenerationProvider = {
  generateComponent: (prompt: string) => Promise<ComponentGeneration>;
};
