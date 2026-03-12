"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMyCommander } from "@/data/context";
import { inferCommanderStrategies } from "../../lib/strategies";

const Deck = () => {
  const { commander } = useMyCommander();
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  useEffect(() => {
    if (!commander) {
      router.push("/");
    } else {
      const tags = inferCommanderStrategies(commander);
      console.log("Inferred tags:", tags);
    }
  }, [commander, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center gap-8 py-32 px-16 bg-white dark:bg-black sm:items-start">
        {"Deck:"}
        {commander ? (
          <div>
            <h2>{commander.name}</h2>
            <h4>{commander.color_identity.join(", ")}</h4>
            <p>{commander.oracle_text}</p>
          </div>
        ) : (
          <p>No commander selected.</p>
        )}
        <button
          onClick={handleBack}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to search
        </button>
      </main>
    </div>
  );
};

export default Deck;
