import { useEffect, useState } from "react";
import UseAllContest from "../../../Hooks/UseAllContest";
import BestContestCreatorCard from "./BestContestCreatorCard";

const BestContestCreator = () => {
  const [allContests] = UseAllContest();
  const [bestCreator, setBestCreator] = useState(null);

  useEffect(() => {
    if (allContests.length > 0) {
      const creatorMap = allContests.reduce((acc, contest) => {
        const creator = contest.contestCreator;
        if (!acc[creator.email]) {
          acc[creator.email] = {
            ...creator,
            participantsCount: 0,
            contestName: contest.contestName,
            description: contest.description,
          };
        }
        acc[creator.email].participantsCount += contest.participantsCount;
        return acc;
      }, {});

      const best = Object.values(creatorMap).reduce((best, current) => {
        return current.participantsCount > best.participantsCount
          ? current
          : best;
      });

      setBestCreator(best);
    }
  }, [allContests]);

  if (!bestCreator) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-center text-3xl font-extrabold mb-6">
            Best Contest Creator
          </h1>
          <BestContestCreatorCard creator={bestCreator} />
        </div>
      </div>
    </div>
  );
};

export default BestContestCreator;
