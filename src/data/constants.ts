export const strategyDetector = [
  // TOKEN STRATEGIES
  {
    tag: "tokens",
    patterns: ["create", "token"],
  },
  {
    tag: "token-doubling",
    patterns: ["twice that many tokens", "double the number of tokens"],
  },

  // SACRIFICE / ARISTOCRATS
  {
    tag: "sacrifice",
    patterns: ["sacrifice a", "sacrifice another"],
  },
  {
    tag: "aristocrats",
    patterns: ["dies", "whenever a creature dies"],
  },

  // GRAVEYARD
  {
    tag: "graveyard",
    patterns: ["graveyard"],
  },
  {
    tag: "reanimator",
    patterns: ["return target creature card from your graveyard"],
  },
  {
    tag: "self-mill",
    patterns: ["mill", "put the top"],
  },

  // CARD DRAW
  {
    tag: "card-draw",
    patterns: ["draw a card", "draw two cards"],
  },

  // COMBAT
  {
    tag: "combat-damage",
    patterns: ["combat damage"],
  },
  {
    tag: "attack-triggers",
    patterns: ["whenever this creature attacks"],
  },
  {
    tag: "go-wide",
    patterns: ["attacking creatures", "creatures you control get"],
  },

  // EQUIPMENT / VOLTRON
  {
    tag: "equipment",
    patterns: ["equipment"],
  },
  {
    tag: "auras",
    patterns: ["aura"],
  },
  {
    tag: "voltron",
    patterns: ["equipped creature"],
  },

  // SPELLSLINGER
  {
    tag: "spellslinger",
    patterns: [
      "instant or sorcery",
      "whenever you cast an instant",
      "whenever you cast a sorcery",
    ],
  },
  {
    tag: "copy-spells",
    patterns: ["copy target spell"],
  },

  // ARTIFACTS
  {
    tag: "artifacts",
    patterns: ["artifact"],
  },
  {
    tag: "artifact-sacrifice",
    patterns: ["sacrifice an artifact"],
  },

  // ENCHANTMENTS
  {
    tag: "enchantments",
    patterns: ["enchantment"],
  },

  // COUNTERS
  {
    tag: "+1+1-counters",
    patterns: ["+1/+1 counter"],
  },
  {
    tag: "proliferate",
    patterns: ["proliferate"],
  },

  // LIFE
  {
    tag: "lifegain",
    patterns: ["gain life"],
  },
  {
    tag: "lifedrain",
    patterns: ["each opponent loses"],
  },

  // TOPDECK
  {
    tag: "topdeck",
    patterns: ["top of your library"],
  },
  {
    tag: "scry",
    patterns: ["scry"],
  },

  // TREASURE / RAMP
  {
    tag: "treasure",
    patterns: ["treasure token"],
  },
  {
    tag: "mana-ramp",
    patterns: ["add one mana", "add two mana"],
  },

  // LANDS
  {
    tag: "lands",
    patterns: ["land enters", "landfall"],
  },
  {
    tag: "extra-lands",
    patterns: ["play an additional land"],
  },

  // STAX / CONTROL
  {
    tag: "stax",
    patterns: ["can't cast more than", "skip their"],
  },
  {
    tag: "tax",
    patterns: ["costs {", "spells cost"],
  },

  // BLINK
  {
    tag: "blink",
    patterns: [
      "exile another target creature",
      "return that card to the battlefield",
    ],
  },

  // ETB
  {
    tag: "etb",
    patterns: ["enters the battlefield"],
  },

  // DEATH TRIGGERS
  {
    tag: "death-triggers",
    patterns: ["dies"],
  },

  // DISCARD
  {
    tag: "discard",
    patterns: ["discard a card"],
  },

  // WHEEL
  {
    tag: "wheel",
    patterns: ["each player discards their hand"],
  },

  // MILL
  {
    tag: "mill",
    patterns: ["mill"],
  },

  // EXILE
  {
    tag: "exile-matters",
    patterns: ["exile the top"],
  },

  // CREATURE TYPE MATTERS
  {
    tag: "tribal",
    patterns: ["creatures you control of the chosen type"],
  },

  // DAMAGE
  {
    tag: "direct-damage",
    patterns: ["deals damage to any target"],
  },

  // EXTRA TURNS
  {
    tag: "extra-turns",
    patterns: ["take an extra turn"],
  },

  // UNTAP
  {
    tag: "untap-synergy",
    patterns: ["untap target"],
  },

  // TUTOR
  {
    tag: "tutor",
    patterns: ["search your library"],
  },

  // REVEAL
  {
    tag: "reveal-topdeck",
    patterns: ["reveal the top"],
  },

  // CLONES
  {
    tag: "clone",
    patterns: ["enters the battlefield as a copy"],
  },

  // COST REDUCTION
  {
    tag: "cost-reduction",
    patterns: ["spells you cast cost"],
  },

  // BIG SPELLS
  {
    tag: "big-spells",
    patterns: ["mana value 7", "mana value 8"],
  },

  // CREATURE SWARM
  {
    tag: "creature-swarm",
    patterns: ["creatures you control get +"],
  },

  // COUNTERSPELL
  {
    tag: "countermagic",
    patterns: ["counter target spell"],
  },

  // BURN
  {
    tag: "burn",
    patterns: ["deals x damage"],
  },

  // CARD ADVANTAGE
  {
    tag: "card-advantage",
    patterns: ["draw cards equal"],
  },

  // SAC OUTLET
  {
    tag: "sac-outlet",
    patterns: ["sacrifice a creature:"],
  },
];

export const tribeDetector = [
  "advisor",
  "aetherborn",
  "ally",
  "angel",
  "antelope",
  "ape",
  "archer",
  "archon",
  "artificer",
  "assassin",
  "azra",
  "badger",
  "barbarian",
  "basilisk",
  "bat",
  "bear",
  "beast",
  "beeble",
  "berserker",
  "bird",
  "blinkmoth",
  "boar",
  "bringer",
  "brushwagg",
  "camel",
  "caribou",
  "cat",
  "centaur",
  "cephalid",
  "chimera",
  "citizen",
  "cleric",
  "construct",
  "coward",
  "crab",
  "crocodile",
  "cyclops",
  "dauthi",
  "demon",
  "deserter",
  "devil",
  "dinosaur",
  "djinn",
  "dog",
  "dragon",
  "drake",
  "dreadnought",
  "drone",
  "druid",
  "dryad",
  "dwarf",
  "efreet",
  "egg",
  "elder",
  "eldrazi",
  "elemental",
  "elephant",
  "elf",
  "elk",
  "eye",
  "faerie",
  "ferret",
  "fish",
  "flagbearer",
  "fox",
  "fractal",
  "frog",
  "fungus",
  "gargoyle",
  "germ",
  "giant",
  "gith",
  "gnoll",
  "gnome",
  "goat",
  "goblin",
  "god",
  "golem",
  "gorgon",
  "graveborn",
  "gremlin",
  "griffin",
  "hag",
  "halfling",
  "hamster",
  "harpy",
  "hellion",
  "hippo",
  "hippogriff",
  "homarid",
  "homunculus",
  "horror",
  "horse",
  "human",
  "hydra",
  "hyena",
  "illusion",
  "imp",
  "incarnation",
  "inkling",
  "insect",
  "jackal",
  "jellyfish",
  "juggernaut",
  "kavu",
  "kirin",
  "kithkin",
  "knight",
  "kobold",
  "kor",
  "kraken",
  "lamia",
  "lammasu",
  "leech",
  "leviathan",
  "lhurgoyf",
  "licid",
  "lizard",
  "manticore",
  "masticore",
  "mercenary",
  "merfolk",
  "metathran",
  "minion",
  "minotaur",
  "mite",
  "mole",
  "mongoose",
  "monk",
  "monkey",
  "moonfolk",
  "mouse",
  "mutant",
  "myr",
  "mystic",
  "naga",
  "nautilus",
  "nephilim",
  "nightmare",
  "nightstalker",
  "ninja",
  "noble",
  "nomad",
  "nymph",
  "octopus",
  "ogre",
  "ooze",
  "orc",
  "orgg",
  "otter",
  "ouphe",
  "ox",
  "oyster",
  "pangolin",
  "peasant",
  "pegasus",
  "pentavite",
  "pest",
  "phelddagrif",
  "phoenix",
  "pilot",
  "pincher",
  "pirate",
  "plant",
  "praetor",
  "prism",
  "processor",
  "rabbit",
  "raccoon",
  "rat",
  "rebel",
  "reflection",
  "rhino",
  "rigger",
  "rogue",
  "sable",
  "salamander",
  "samurai",
  "sand",
  "saproling",
  "satyr",
  "scarecrow",
  "scientist",
  "scion",
  "scorpion",
  "scout",
  "serf",
  "serpent",
  "servo",
  "shade",
  "shaman",
  "shapeshifter",
  "shark",
  "sheep",
  "siren",
  "skeleton",
  "slith",
  "sliver",
  "slug",
  "snake",
  "soldier",
  "soltari",
  "spawn",
  "specter",
  "spellshaper",
  "sphinx",
  "spider",
  "spirit",
  "sponge",
  "squid",
  "squirrel",
  "starfish",
  "surrakar",
  "survivor",
  "tentacle",
  "tetravite",
  "thalakos",
  "thopter",
  "thrull",
  "tiefling",
  "treefolk",
  "trilobite",
  "troll",
  "turtle",
  "unicorn",
  "vampire",
  "vedalken",
  "viashino",
  "volver",
  "wall",
  "walrus",
  "warlock",
  "warrior",
  "weird",
  "werewolf",
  "whale",
  "wizard",
  "wolf",
  "wolverine",
  "wombat",
  "worm",
  "wraith",
  "wurm",
  "yeti",
  "zombie",
  "zubera",
];
