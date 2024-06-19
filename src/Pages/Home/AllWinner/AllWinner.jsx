import UseToGetAllWinner from "../../../Hooks/UseToGetAllWinner";
import WinnerCard from "./WinnerCard";

const AllWinner = () => {
  const [winners] = UseToGetAllWinner();

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gradient bg-gradient-to-br from-red-700 to-cyan-600 text-transparent bg-clip-text mb-4">
          Join Our Exciting Contests!
        </h1>
        <p className="text-xl text-gray-700">
          Participate in thrilling competitions and showcase your skills to win
          amazing prizes!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {winners.map((winner) => (
          <WinnerCard key={winner._id} winner={winner} />
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-xl text-gray-700">
          Total Contests: {winners.length}
        </p>
        <p className="text-xl text-gray-700">Total Winners: {winners.length}</p>
      </div>
    </div>
  );
};

export default AllWinner;
