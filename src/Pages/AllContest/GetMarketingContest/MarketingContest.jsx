import UseToGetMarketingContest from "../../../Hooks/UseToGetMarketingContest";
import ContestCard from "../../../Shared/ContestCard";

const MarketingContest = () => {
  const [marketingContest] = UseToGetMarketingContest();
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {marketingContest.map((item) => (
          <ContestCard key={item._id} contest={item} />
        ))}
      </div>
    </div>
  );
};

export default MarketingContest;
