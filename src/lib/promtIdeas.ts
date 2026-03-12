const commander = "";
const deckType = "";

const prompt1 = `You are an expert Magic: The Gathering Commander deckbuilder.

Your task is to generate a legal Commander decklist.

Commander: ${commander}
Power Level: ${deckType}

Follow these strict rules:

1. Use ONLY real Magic: The Gathering cards.
2. Do NOT invent card names.
3. Respect the commander's color identity.
4. The deck must contain exactly 99 cards (not including the commander).
5. No duplicate cards except basic lands.
6. Each card must appear in the correct category.
7. If you are unsure about a card name, DO NOT include it.

Deckbuilding guidelines:

- Lands: 36–38
- Ramp: 8–12
- Card draw: 8–12
- Interaction (removal/counters): 8–12
- Synergy cards: 25–35
- Win conditions: 5–10

Deck should reflect the strategy of the commander.

Return ONLY valid JSON in the following format:

{
  "commander": "",
  "power_level": "",
  "decklist": {
    "creatures": [],
    "artifacts": [],
    "enchantments": [],
    "instants": [],
    "sorceries": [],
    "planeswalkers": [],
    "lands": []
  },
  "strategy": "",
  "key_synergies": [],
  "play_tips": {
    "early_game": "",
    "mid_game": "",
    "late_game": ""
  }
}

Before returning the deck, verify:

- all cards exist in Magic: The Gathering
- no duplicates except basic lands
- color identity is respected
- total cards = 99

If any rule fails, correct the deck before responding.
Do not include explanations outside the JSON.`;

const prompt2 = `Generate a list of 5 creative and unique deck ideas for the commander ${commander}. Each deck idea should include a brief description of the strategy and key cards that would be included in the deck. The ideas should be diverse and cover different playstyles, such as control, aggro, combo, etc. Please provide the deck ideas in a clear and concise format. Also bear in mind the color restriction rule for commander format and the list of banned cards. Do not provide names of cards that are proven to be existent in Magic: The Gathering. The deck ideas should be tailored for a ${deckType} playstyle.`;

const prompt3 = `You are an expert Magic: The Gathering Commander (EDH) deckbuilding strategist.

The user will provide:
- a commander name
- a deck power level: casual or competitive

Your task is to propose deck archetypes and strategies for this commander.

You must strictly follow Commander format rules:

Commander rules:
- Multiplayer format (typically 4 players)
- Each player starts with 40 life
- Deck contains exactly 99 cards + 1 commander
- All cards must be singleton (no duplicates) except basic lands
- The deck must follow the commander's color identity
- All cards must be legal in the Commander format
- Do NOT include banned cards
- Do NOT suggest cards outside the commander's color identity

Your task is NOT to generate a full decklist.

Instead, generate strategic deck archetypes that could be built around the commander.

Return between **1 and 3 deck ideas**.

Each deck idea must include:
- a short strategy title
- a paragraph explaining the deck strategy
- examples of key cards that support the strategy

Important constraints:
- Only mention real Magic: The Gathering cards.
- Do not invent card names.
- Do not include cards outside the commander's color identity.

Return ONLY valid JSON using the following format:

{
  "commander": "Commander Name",
  "deckIdeas": [
    {
      "title": "Deck Strategy Name",
      "description": "Paragraph explaining how the deck works, its win condition, and key synergies. Mention relevant cards that support the strategy."
    }
  ]
}

User input:

Commander: ${commander}
Deck Type: ${deckType}`;
