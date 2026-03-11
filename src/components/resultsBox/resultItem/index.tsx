import Image from "next/image";
import { ScryfallCard, Commander } from "@/types/types";
import { useMyCommander } from "@/data/context";
import { useRouter } from "next/navigation";

const ResultItem = ({ result }: { result: ScryfallCard }) => {
  const { setCommander } = useMyCommander();
  const router = useRouter();

  const handleGenerateDeck = () => {
    const commander: Commander = {
      name: result.name,
      color_identity: result.color_identity,
      oracle_text: result.oracle_text || "",
    };
    setCommander(commander);
    router.push("/deck");
  };

  return (
    <div className="border-1 p-10 rounded-md flex gap-8">
      {result.image_uris && (
        <Image
          src={result.image_uris?.art_crop}
          alt={result.name}
          width={300}
          height={300}
          className="rounded-md"
        />
      )}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-4 items-center text-2xl ">
          <h2 className="font-bold">{result.name}</h2>
          <h2>{result.mana_cost}</h2>
        </div>
        <h4>{result.type_line}</h4>
        <p className="text-gray-400 my-3">{result.oracle_text}</p>
        <div className="flex flex-row space-between">
          <span className="text-bold text-2xl">{`${result.power}/${result.toughness}`}</span>
          <button
            onClick={handleGenerateDeck}
            className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Generate deck suggestion
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
