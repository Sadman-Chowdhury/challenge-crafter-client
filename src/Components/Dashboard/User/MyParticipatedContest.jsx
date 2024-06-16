import React, { useState, useEffect } from "react";
import Container from "../../../Container";
import UseToGetMyParticipatedContest from "./../../../Hooks/UseToGetMyParticipatedContest";
import { MdOutlineComment } from "react-icons/md";
import UseAllContest from "../../../Hooks/UseAllContest";

const MyParticipatedContest = () => {
  const [originalMyContests] = UseToGetMyParticipatedContest();
  const [allContests] = UseAllContest();
  const [myContests, setMyContests] = useState([]);
  const [sortByStartDateAsc, setSortByStartDateAsc] = useState(true);

  useEffect(() => {
    setMyContests(originalMyContests);
  }, [originalMyContests]);

  const getParticipantsCount = (contestId) => {
    const contest = allContests.find((c) => c._id === contestId);
    return contest ? contest.participantsCount : 0;
  };

  const handleSortByStartDate = () => {
    const sortedContests = [...myContests].sort((a, b) => {
      const dateA = new Date(a.contest.startDate);
      const dateB = new Date(b.contest.startDate);
      return sortByStartDateAsc ? dateA - dateB : dateB - dateA;
    });
    setSortByStartDateAsc(!sortByStartDateAsc);
    setMyContests(sortedContests);
  };

  return (
    <div>
      <h1 className="mb-24 text-white">My Contest</h1>
      <Container>
        <div className="text-center mb-6 text-2xl font-semibold">
          <h1>My Participated Contest</h1>
        </div>
        <button
          onClick={handleSortByStartDate}
          className="bg-cyan-500 text-white font-bold py-2 px-4 mb-4 rounded-lg hover:bg-cyan-900"
        >
          Sort by Start Date {sortByStartDateAsc ? "▲" : "▼"}
        </button>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Contest Name</th>
                <th>Image</th>
                <th>Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Price</th>
                <th>Prize Money</th>
                <th>Payment</th>
                <th>Participants Count</th>
                <th>Submission</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {myContests.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td className="font-bold">{item.contest.contestName}</td>
                  <td>
                    <img
                      src={item.contest.image}
                      className="w-[60px] h-[60px] lg:rounded-full"
                      alt=""
                    />
                  </td>
                  <td>{item.contest.contestType}</td>
                  <td>
                    {new Date(item.contest.startDate).toLocaleDateString()}
                  </td>
                  <td>{new Date(item.contest.endDate).toLocaleDateString()}</td>
                  <td>$ {item.contest.contestPrice}</td>
                  <td>$ {item.contest.contestPrize}</td>
                  <td>
                    <span className="bg-green-500 font-bold px-2 py-1 text-white rounded-2xl">
                      {item.status}
                    </span>
                  </td>
                  <td className="text-center">
                    {getParticipantsCount(item.contest._id)}
                  </td>
                  <td>
                    <button className="text-4xl text-green-500">
                      <MdOutlineComment />
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

export default MyParticipatedContest;
