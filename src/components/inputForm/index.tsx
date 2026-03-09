"use client";
import React, { useState, useEffect } from "react";

const InputForm = () => {
  const [commanderName, setCommanderName] = useState("");
  const [deckType, setDeckType] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!commanderName || !deckType);
  }, [commanderName, deckType]);

  const handleDeckType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeckType(e.target.value);
  };

  const submitDeck = (commanderName: string, deckType: string) => {
    console.log(`Commander Name: ${commanderName}, Deck Type: ${deckType}`);
  };

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <input
        type="text"
        value={commanderName}
        onChange={(e) => setCommanderName(e.target.value)}
        placeholder="Enter your commander's name"
        className="border p-2 rounded w-[300px]"
      />
      <div className="flex gap-8">
        <label>
          <input
            type="radio"
            name="type"
            value="Casual"
            onChange={handleDeckType}
          />
          {" Casual"}
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="Competitive"
            onChange={handleDeckType}
          />
          {" Competitive"}
        </label>
      </div>
      <button
        disabled={!commanderName || !deckType}
        onClick={() => submitDeck(commanderName, deckType)}
        className={`text-white px-4 py-2 rounded ${
          isDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        Get NetDeck!!!
      </button>
    </div>
  );
};

export default InputForm;
