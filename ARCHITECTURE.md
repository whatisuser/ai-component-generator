# Architecture

## Component Generation Flow

1. The user enters a prompt in the client-side workspace.
2. `components/generator-workspace.tsx` submits the prompt to `POST /api/generate`.
3. `app/api/generate/route.ts` validates the request body and calls `generateComponent(prompt)`.
4. `lib/generation/service.ts` resolves the active provider. The current implementation uses `MockGenerationProvider`.
5. The provider returns a normalized payload:
   - `prompt`
   - `componentName`
   - `code`
6. The UI stores the raw generated code and displays it in the code panel without modification.
7. `lib/preview.ts` derives a preview-safe source string from the raw code by removing `export default` and appending `render(<Component />)`.
8. `components/preview-panel.tsx` uses `react-live` to evaluate that preview source in the browser and mount the result.

## Design Choices

- Raw output is preserved for debugging, downstream programmatic use, and future persistence.
- Preview transformation is isolated so rendering concerns do not contaminate the stored component source.
- Provider selection is centralized in the generation service so a real LLM integration can be introduced without changing the route or client state model.
- The mock provider returns deterministic templates to keep development stable and testable before external model integration.

## Security Considerations

- Generated code is never executed on the server. Preview execution happens client-side only.
- The preview runtime is intentionally constrained to a narrow scope. It currently exposes React and relies on self-contained generated components with no imports.
- Request validation rejects empty prompts before they reach the generation layer.
- A real LLM provider should add output validation before rendering. At minimum, enforce:
  - a single exported component
  - no imports or dynamic network calls in generated code
  - no access to browser globals beyond what the preview runtime explicitly provides
- If persistence is added later, store prompt and code as untrusted user content and escape it appropriately wherever it is displayed outside the code panel.

## Extension Path

- Add a real provider implementation in `lib/generation`.
- Add schema-level output validation for generated TSX.
- Add persistence for generation history.
- Add tests around prompt handling, provider selection, and preview transformation.
