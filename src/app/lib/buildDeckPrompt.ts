interface BuildDeckPromptParams {
  commander: string;
}

export function buildDeckPrompt({ commander }: BuildDeckPromptParams): string {
  if (!commander) {
    throw new Error("Commander is required");
  }

  return `You are an expert Magic: The Gathering Commander deckbuilding strategist.

Commander: ${commander}

Allowed Colors: The commander's color identity colors (e.g. if the commander is "Atraxa, Praetors' Voice", the allowed colors are White, Blue, Black, Green).

Your task is to propose 1-3 deck archetypes and strategies for this commander.

Commander format rules:
- Multiplayer format (4 players)
- 40 life per player
- Deck size: 99 cards + 1 commander
- Singleton rule except for basic lands
- All cards must follow the commander's color identity
- All cards must be legal in Commander
- Do NOT include banned cards

Before producing the final JSON output you MUST perform this verification step:

1. Examine every card mentioned.
2. Check its color identity.
3. If any card contains a forbidden color, remove it.
4. Replace it with a legal card within the allowed colors.
5. If unsure about a card's colors, do NOT include it.

Generate between 1 and 3 deck ideas.

Return ONLY valid JSON in this format:

{
  "commander": "Commander Name",
  "deckIdeas": [
    {
      "title": "Strategy Name",
      "description": "Paragraph explaining the strategy and mentioning relevant supporting cards."
    }
  ]
}`;
}
