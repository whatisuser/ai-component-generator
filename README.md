# AI Component Generator

AI Component Generator is a Next.js 15 App Router application that turns a plain-language UI prompt into a generated React + Tailwind component, displays the raw source code, and renders a live browser preview.

## Project Overview

- Next.js 15 App Router with TypeScript
- Tailwind CSS v4 styling
- Mock generation API that works without external credentials
- Provider abstraction so a real LLM backend can replace the mock layer later
- Side-by-side source and preview workflow with loading, empty, and error states

## Architecture

The app is split into three layers:

1. UI layer: client components for the prompt form, code panel, preview panel, and shared states.
2. API layer: `app/api/generate/route.ts` validates input and returns a normalized generation payload.
3. Generation layer: `lib/generation` contains the provider contract, the mock implementation, and the service entry point used by the route.

The preview uses `react-live` in the browser. Raw component code is preserved exactly as generated, then transformed into a preview-safe execution string for rendering.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Deployment Notes for Vercel

- The project is ready for standard Vercel deployment as a Next.js app.
- No environment variables are required while using the mock generation provider.
- If you replace the mock provider with a real LLM service, add the provider secrets in the Vercel project settings and update `lib/generation/service.ts` to instantiate the real provider.

## Swapping in a Real LLM Provider

1. Add a new provider that satisfies `GenerationProvider` in `lib/generation/types.ts`.
2. Move prompt-to-component generation logic into that provider.
3. Update `createGenerationProvider()` in `lib/generation/service.ts`.
4. Keep the API response shape unchanged so the UI does not need to change.
