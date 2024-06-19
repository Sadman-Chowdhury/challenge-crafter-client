import UseAllContest from "../../../Hooks/UseAllContest";
import ContestCard from "../../../Shared/ContestCard";

const PopularContest = () => {
  const [allContests] = UseAllContest();

  // Filter and sort contests based on participants count
  const filteredContests = allContests
    .filter((item) => item.participantsCount > 0)
    .sort((a, b) => b.participantsCount - a.participantsCount);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-4xl font-bold text-cyan-800 mb-8">
        Our Popular Contest
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContests.map((item) => (
          <ContestCard key={item._id} contest={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularContest;
