import Container from "../../../../Container";
import UseAllContest from "../../../../Hooks/UseAllContest";
import { useNavigate } from "react-router-dom";

const ContestSubmitted = () => {
  const [allContests] = UseAllContest();
  const navigate = useNavigate();
  console.log(allContests);

  // Filter contests that have submissions
  const contestsWithSubmissions = allContests.filter(
    (item) => item.submissions && item.submissions.length > 0
  );
  const handleViewSubmissions = (id) => {
    navigate(`/dashboard/individual-contest-submitted-page/${id}`, {
      state: { allContests },
    });
  };
  return (
    <div>
      <h1 className="mb-24 text-white">My Contests</h1>
      <Container>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Contest Title</th>
                <th>Prize Money</th>
                <th>Image</th>
                <th>Submissions</th>
              </tr>
            </thead>
            <tbody>
              {contestsWithSubmissions.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td className="font-bold">{item?.contestName}</td>
                  <td className="font-bold">${item?.contestPrize}</td>
                  <td>
                    <img
                      src={item?.image}
                      className="w-[60px] h-[60px] lg:rounded-full"
                      alt=""
                    />
                  </td>

                  <td>
                    <button
                      onClick={() => handleViewSubmissions(item?._id)}
                      className="bg-cyan-600 px-2 py-1 rounded-2xl text-white font-bold"
                    >
                      View Submissions ({item.submissions.length})
                    </button>
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

export default ContestSubmitted;
