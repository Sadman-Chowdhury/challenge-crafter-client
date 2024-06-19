import React from "react";
import { Link } from "react-router-dom";

const WinnerCard = ({ winner }) => {
  const {
    contestName,
    image,
    description,
    contestPrize,
    participantsCount,
    winnerInfo,
  } = winner;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={contestName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{contestName}</h2>
        <p className="text-gray-600 mb-4">{description.substring(0, 100)}...</p>
        <p className="text-gray-700 font-semibold">Prize: ${contestPrize}</p>
        <p className="text-gray-700 font-semibold">
          Participants: {participantsCount}
        </p>
        {winnerInfo && (
          <div className="mt-4">
            <h3 className="text-lg font-bold">Winner:</h3>
            <div className="flex items-center mt-2">
              <img
                src={winnerInfo.photo}
                alt={winnerInfo.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <p className="text-gray-800 font-semibold">{winnerInfo.name}</p>
                <a
                  href={winnerInfo.userTask}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:underline"
                >
                  View Submission
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="mt-4">
          <Link
            to={`/contestDetails/${winner._id}`}
            className="text-cyan-600 hover:underline"
          >
            Learn More & Participate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
