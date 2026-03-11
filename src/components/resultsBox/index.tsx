import { ScryfallCard } from "@/types/types";
import ResultItem from "./resultItem";

const ResultsBox = ({ results }: { results: ScryfallCard[] | null }) => {
  return (
    <div className="w-full">
      {results ? (
        <ul className="flex flex-col gap-6">
          {results?.map((result, index) => (
            <li key={index}>
              <ResultItem result={result} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center">
          {
            "There are no results for the commander you entered. Please, check spelling and banlists."
          }
        </div>
      )}
    </div>
  );
};

export default ResultsBox;
