import GptSearch from "./GptSearch";
import { BG_URL } from "../constants";
import GptSuggestions from "./GptSuggestions";

const GptPage = () => {
  return (
    <div>
      <img className="h-screen w-screen fixed" src={BG_URL} alt="bg-img" />
      <GptSearch />
      <GptSuggestions />
    </div>
  );
};

export default GptPage;
