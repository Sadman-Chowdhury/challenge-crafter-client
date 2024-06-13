import UseToGetAIContest from "../../../Hooks/UseToGetAIContest";
import ContestCard from "../../../Shared/ContestCard";

const AIContest = () => {
  const [AI] = UseToGetAIContest();
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {AI.map((item) => (
          <ContestCard key={item._id} contest={item} />
        ))}
      </div>
    </div>
  );
};

export default AIContest;
