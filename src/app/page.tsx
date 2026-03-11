"use client";

import { useState } from "react";
import ResultsBox from "@/components/resultsBox";
import InputForm from "@/components/inputForm";
import { ScryfallCard } from "@/types/types";

export default function Home() {
  const [results, setResults] = useState<ScryfallCard[] | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center gap-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <InputForm setResults={setResults} />
        <ResultsBox results={results} />
      </main>
    </div>
  );
}
