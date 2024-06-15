import ContestCard from "../../../Shared/ContestCard";
import UseToGetGamingContest from "../../../Hooks/UseToGetGamingContest";

const GamingContest = () => {
  const [gamingReviewContest] = UseToGetGamingContest();
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {gamingReviewContest.map((item) => (
          <ContestCard key={item._id} contest={item} />
        ))}
      </div>
    </div>
  );
};

export default GamingContest;
