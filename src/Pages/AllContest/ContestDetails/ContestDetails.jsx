import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "../../../Container";
import { useState, useEffect } from "react";

const ContestDetails = () => {
  const contest = useLoaderData();
  const navigate = useNavigate();
  const [timeUntilStart, setTimeUntilStart] = useState({});
  const [timeUntilEnd, setTimeUntilEnd] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const startDate = new Date(contest?.startDate);
      const endDate = new Date(contest?.endDate);

      const timeToStart = calculateTimeDifference(startDate, now);
      const timeToEnd = calculateTimeDifference(endDate, now);

      setTimeUntilStart(timeToStart);
      setTimeUntilEnd(timeToEnd);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [contest]);

  const calculateTimeDifference = (date1, date2) => {
    const totalSeconds = Math.floor((date1 - date2) / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  };

  const renderCountdown = (time) => {
    if (time.days < 0) return <p>Contest has started.</p>;

    return (
      <div className="flex justify-center space-x-4 text-lg font-bold">
        <div>
          <span>{time.days}</span> days
        </div>
        <div>
          <span>{time.hours}</span> hours
        </div>
        <div>
          <span>{time.minutes}</span> minutes
        </div>
        <div>
          <span>{time.seconds}</span> seconds
        </div>
      </div>
    );
  };

  const handleRegisterClick = () => {
    navigate("/payment", { state: { contest } });
  };
  return (
    <Container>
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-cyan-100 to-white shadow-2xl rounded-lg">
        <div className="relative mb-6">
          <img
            src={contest?.image}
            alt={contest?.contestName}
            className="w-full h-64 object-cover rounded-t-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-t-lg"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-3xl font-bold">{contest?.contestName}</h2>
            <p className="text-lg">{contest?.contestType}</p>
          </div>
        </div>
        <div className="mb-6 p-4 bg-white rounded-md shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Description </h3>
          <div className="flex items-end justify-end">
            <button
              onClick={handleRegisterClick}
              className="border-2 px-3 py-1 bg-cyan-700 text-white hover:bg-cyan-500 font-bold rounded-2xl mb-2"
            >
              Register
            </button>
          </div>
          <p className="text-gray-700">{contest?.description}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="mb-6 p-4 bg-white rounded-md shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Days left To Start</h3>
            {renderCountdown(timeUntilStart)}
          </div>
          <div className="mb-6 p-4 bg-white rounded-md shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Days left To End</h3>
            {renderCountdown(timeUntilEnd)}
          </div>
        </div>
        <div className="mb-6 p-4 bg-white rounded-md shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Contest Details</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Start Date:</strong>{" "}
              {new Date(contest?.startDate).toLocaleDateString()}
            </li>
            <li>
              <strong>End Date:</strong>{" "}
              {new Date(contest?.endDate).toLocaleDateString()}
            </li>
            <li>
              <strong>Price:</strong> ${contest?.contestPrice}
            </li>
            <li>
              <strong>Prize Money:</strong> ${contest?.contestPrize}
            </li>
            <li>
              <strong>Task Submission:</strong> {contest?.taskSubmissionText}
            </li>
            <li>
              <strong>Participants Count:</strong> {contest?.participantsCount}
            </li>
          </ul>
        </div>
        <div className="mb-6 p-4 bg-white rounded-md shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Contest Creator</h3>
          <div className="flex items-center">
            <img
              src={contest?.contestCreator.image}
              alt={contest?.contestCreator.name}
              className="w-12 h-12 rounded-full mr-4 shadow-md"
            />
            <div>
              <p className="text-gray-700 font-bold">
                {contest?.contestCreator.name}
              </p>
              <p className="text-gray-500">{contest?.contestCreator.email}</p>
            </div>
          </div>
        </div>
        <div className="mb-6 p-4 bg-white rounded-md shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Comments From Admin</h3>
          {contest?.comments?.length > 0 ? (
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {contest?.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>
      </div>

      {/* ------- */}
    </Container>
  );
};

export default ContestDetails;
