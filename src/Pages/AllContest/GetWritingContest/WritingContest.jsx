import UseToGetWritingContest from "../../../Hooks/UseToGetWritingContest";
import ContestCard from "../../../Shared/ContestCard";

const WritingContest = () => {
  const [writing] = UseToGetWritingContest();
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {writing.map((item) => (
          <ContestCard key={item._id} contest={item} />
        ))}
      </div>
    </div>
  );
};

export default WritingContest;
