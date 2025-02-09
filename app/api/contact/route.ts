import { NextResponse } from "next/server";
import { createClient } from "microcms-js-sdk";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const serviceDomain = process.env.SERVICE_DOMAIN;
    const apiKey = process.env.API_KEY;

    if (!serviceDomain || !apiKey) {
      return NextResponse.json(
        { error: "Server config error" },
        { status: 500 }
      );
    }

    const client = createClient({ serviceDomain, apiKey });

    await client.create({
      endpoint: "contact",
      content: { name, email, message },
    });

    return NextResponse.json({
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
