import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../../../Container";
import { postContestWinner } from "../../../../Api/contestApi";
import toast from "react-hot-toast";

const IndivisualContestSubmissions = () => {
  const contest = useLoaderData();
  console.log(contest);

  const [winnerDeclared, setWinnerDeclared] = useState(false);
  const [winner, setWinner] = useState(null);

  const declareWinner = (submission) => {
    setWinnerDeclared(true);
    setWinner(submission);
    updateContestWithWinner(submission);
  };

  const updateContestWithWinner = async (submission) => {
    const updatedContest = {
      ...contest,
      winnerInfo: {
        name: submission.name,
        email: submission.email,
        photo: submission.photo,
        userTask: submission.userTask,
      },
    };

    // Replace this with an API call to update the contest on the server
    // console.log("Updated Contest Data:", updatedContest);

    const data = await postContestWinner(updatedContest);
    toast.success("Winner Declared Successfully");
  };

  return (
    <div>
      <h1 className="mb-24 text-white">Contests</h1>
      <Container>
        <div>
          <h1 className="text-3xl mb-6 text-center font-bold text-cyan-600">
            {contest?.contestName}
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Participant Name</th>
                <th>Email</th>
                <th>Image</th>
                <th>Submitted Task Link</th>
                <th>Declare Winner</th>
              </tr>
            </thead>
            <tbody>
              {contest.submissions.map((submission, index) => (
                <tr key={submission.email}>
                  <td>{index + 1}</td>
                  <td className="font-bold">{submission.name}</td>
                  <td>{submission.email}</td>
                  <td>
                    <img
                      src={submission.photo}
                      className="w-[60px] h-[60px] lg:rounded-full"
                      alt=""
                    />
                  </td>
                  <td>
                    <a
                      href={submission.userTask}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Task
                    </a>
                  </td>
                  <td>
                    {!winnerDeclared ? (
                      <button
                        className="bg-green-600 px-2 py-1 rounded-2xl text-white font-bold"
                        onClick={() => declareWinner(submission)}
                      >
                        Declare Winner
                      </button>
                    ) : winner?.email === submission.email ? (
                      <span className="text-green-600 font-bold">Winner</span>
                    ) : (
                      <span className="text-red-600 font-bold">Not Winner</span>
                    )}
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

export default IndivisualContestSubmissions;
