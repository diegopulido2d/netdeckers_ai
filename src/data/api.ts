export async function generateAIResponse(prompt: string): Promise<string> {
  const res = await fetch("/api/groq", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: prompt,
    }),
  });

  const data = await res.json();
  return data.response;
}

export async function getScryfallCardData(cardName: string) {
  const res = await fetch(
    `https://api.scryfall.com/cards/search?q=${cardName}+is:commander`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await res.json();
  return data;
}
