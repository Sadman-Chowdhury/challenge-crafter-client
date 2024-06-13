import UseToGetCodingContest from "../../../Hooks/UseToGetCodingContest";
import ContestCard from "../../../Shared/ContestCard";

const CodingContest = () => {
  const [coding] = UseToGetCodingContest();

  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {coding.map((item) => (
          <ContestCard key={item._id} contest={item} />
        ))}
      </div>
    </div>
  );
};

export default CodingContest;
