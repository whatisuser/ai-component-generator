import { NextResponse } from "next/server";

import {
  generationRequestSchema,
  generationResponseSchema,
} from "@/lib/generation/schema";
import { generateComponent } from "@/lib/generation/service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = generationRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Enter a prompt to generate a component." },
        { status: 400 },
      );
    }

    const result = await generateComponent(parsed.data.prompt);
    const response = generationResponseSchema.parse(result);

    return NextResponse.json(response);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "The component could not be generated.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
