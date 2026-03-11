export const runtime = "nodejs";

import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt;

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 3000,
    });

    // SHOWS EXACTLY HOW GROQ OUTPUTS THE RESPONSE, ADJUST RETURN ACCORDINGLY
    console.log(
      "Groq response:",
      JSON.stringify(chatCompletion.choices?.[0]?.message, null, 2),
    );

    return NextResponse.json({
      response: chatCompletion.choices?.[0]?.message?.content ?? "",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Groq failed" }, { status: 500 });
  }
}
