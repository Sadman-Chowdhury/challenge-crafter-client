import { useState } from "react";
import { bannerContests } from "../../../Api/contestApi";
import Marquee from "react-fast-marquee";
import UseAllContest from "./../../../Hooks/UseAllContest";
import { Link } from "react-router-dom";

const Banner = () => {
  const [contests, setContests] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [allContests] = UseAllContest();

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const data = await bannerContests(searchInput);
      const filteredContests = data.filter(
        (contest) =>
          contest.status === "accepted" &&
          contest.contestType
            .split(" ")[0]
            .toLowerCase()
            .includes(searchInput.toLowerCase())
      );
      setContests(filteredContests);
    } catch (error) {
      console.error("Error fetching contests", error);
    }
  };

  const filteredInitialContest = allContests.filter(
    (contest) => contest.status === "accepted"
  );

  return (
    <div
      className="h-80 md:h-96 lg:h-screen mt-2 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/X5q3Pn0/jason-leung-Xaanw0s0p-Mk-unsplash.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div>
        <Marquee direction="right" speed={100} pauseOnHover={true}>
          {contests.length > 0
            ? contests.map((contest) => (
                <div key={contest._id}>
                  <Link to={`/contestDetails/${contest?._id}`}>
                    <div className="bg-white p-4 m-2 rounded-md shadow-lg">
                      <img
                        src={contest.image}
                        alt={contest.contestName}
                        className="w-full h-16 object-cover rounded-md"
                      />
                      <h3 className="text-lg font-bold">
                        {contest.contestName}
                      </h3>
                      <p className="text-sm">
                        {contest.description.substring(0, 60)}...
                      </p>
                    </div>
                  </Link>
                </div>
              ))
            : filteredInitialContest.map((contest) => (
                <div key={contest._id}>
                  <Link to={`/contestDetails/${contest?._id}`}>
                    <div className="bg-white p-4 m-2 rounded-md shadow-lg">
                      <img
                        src={contest.image}
                        alt={contest.contestName}
                        className="w-full h-16 object-cover rounded-md"
                      />
                      <h3 className="text-lg font-bold">
                        {contest.contestName}
                      </h3>
                      <p className="text-sm">
                        {contest.description.substring(0, 60)}...
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
        </Marquee>
      </div>
      <div className="flex items-center justify-center lg:py-32 relative z-10">
        <div className="text-center">
          <h2 className="text-2xl lg:text-5xl font-bold bg-gradient-to-br from-white to-cyan-600 text-transparent bg-clip-text mb-4">
            Welcome to Challenge Crafter
          </h2>
          <p className="text-base text-slate-100 sm:text-lg px-2 md:text-xl lg:text-xl">
            The ultimate platform where innovation meets recognition!
          </p>
          <div className="mt-6 flex items-center justify-center">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="searchInput"
                id="searchInput"
                value={searchInput}
                onChange={handleInputChange}
                placeholder="gaming || image || article || marketing || Book"
                className="lg:w-[320px] h-8 rounded-sm px-1 focus:outline-cyan-500 lg:px-2 border-2 border-sky-300 border-dashed"
              />
              <button
                type="submit"
                className="border-2 animate-pulse rounded-sm px-4 py-1 bg-cyan-800 text-white font-bold hover:bg-cyan-400 hover:text-white cursor-pointer"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
