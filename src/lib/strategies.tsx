import { strategyDetector, tribeDetector } from "@/data/constants";
import { Commander } from "@/types/types";

function detectStrategy(oracleText: string) {
  const text = oracleText.toLowerCase();

  return strategyDetector
    .filter((strategy) =>
      strategy.patterns.some((pattern) => text.includes(pattern)),
    )
    .map((strategy) => strategy.tag);
}

function detectTribal(typeLine: string) {
  const text = typeLine.toLowerCase();

  return tribeDetector.filter((t) => text.includes(t));
}

export function inferCommanderStrategies(commander: Commander) {
  const oracleTags = detectStrategy(commander.oracle_text);
  const tribalTags = detectTribal(commander.type_line);

  return [...new Set([...oracleTags, ...tribalTags])];
}
