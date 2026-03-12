"use client";

import React, { useState, Dispatch, SetStateAction } from "react";
import { generateAIResponse, getScryfallCardData } from "@/data/api";
import { buildDeckPrompt } from "@/lib/buildDeckPrompt";
import { ScryfallCard } from "@/types/types";

const InputForm = ({
  setResults,
}: {
  setResults: Dispatch<SetStateAction<ScryfallCard[] | null>>;
}) => {
  const [commanderName, setCommanderName] = useState("");

  const isDisabled = commanderName === "";
  const submitDeck = async () => {
    if (!commanderName) return;

    /*
    const prompt = buildDeckPrompt({
      commander: commanderName,
    });
    const deck = await generateResponse(prompt);
    setResult(deck);
    */
    const result = await getScryfallCardData(commanderName);
    setResults(result.data);
    console.log(result.data);
  };

  return (
    <div className="flex flex-row gap-4 items-center justify-center w-full">
      <input
        type="text"
        value={commanderName}
        onChange={(e) => setCommanderName(e.target.value)}
        placeholder="Enter your commander's name"
        className="border p-2 rounded w-[300px]"
      />
      <button
        disabled={!commanderName}
        onClick={submitDeck}
        className={`text-white px-4 py-2 rounded ${
          isDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        Get Commander
      </button>
    </div>
  );
};

export default InputForm;
