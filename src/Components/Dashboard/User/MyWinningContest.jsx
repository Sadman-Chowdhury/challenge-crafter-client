import Container from "../../../Container";
import UseToGetWinnerByEmail from "../../../Hooks/UseToGetWinnerByEmail";

const MyWinningContest = () => {
  const [winnerContest] = UseToGetWinnerByEmail();
  console.log(winnerContest);
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-white font-bold text-center py-12">
        My Winning Contest
      </h1>
      <Container>
        <div className="text-center mb-6 text-3xl font-semibold">
          <h1>My Winning Contest</h1>
        </div>

        <div className="overflow-x-auto shadow-lg rounded-lg bg-gray-800 text-white p-4">
          <table className="table-auto w-full text-left border-collapse">
            {/* head */}
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                <th className="px-4 py-2">No.</th>
                <th className="px-4 py-2">Contest Name</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Winned Prize</th>
                <th className="px-4 py-2">Participants Count</th>
                <th className="px-4 py-2">Submitted Task</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {winnerContest.map((item, index) => (
                <tr
                  key={item._id}
                  className="bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <td className="border-t border-gray-700 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border-t border-gray-700 px-4 py-2 font-bold">
                    {item?.contestName}
                  </td>
                  <td className="border-t border-gray-700 px-4 py-2">
                    <img
                      src={item?.image}
                      className="w-16 h-16 lg:rounded-full object-cover"
                      alt={item?.contestName}
                    />
                  </td>
                  <td className="border-t border-gray-700 px-4 py-2">
                    {item?.contestType}
                  </td>
                  <td className="border-t border-gray-700 px-4 py-2">
                    ${item?.contestPrize}
                  </td>
                  <td className="border-t border-gray-700 px-4 py-2">
                    {item?.participantsCount}
                  </td>
                  <td className="border-t border-gray-700 px-4 py-2">
                    <a
                      href={item?.winnerInfo?.userTask}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Task
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default MyWinningContest;
