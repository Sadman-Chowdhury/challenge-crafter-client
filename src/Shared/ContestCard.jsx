import { FaUser } from "react-icons/fa6";

const sliceDescription = (description, wordLimit) => {
  const words = description.split(" ");
  if (words.length <= wordLimit) return description;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const ContestCard = ({ contest }) => {
  return (
    <div className="card shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 m-4">
      <figure>
        <img
          src={contest?.image}
          className="w-full h-48 lg:h-64 object-cover rounded-t-lg"
          alt="contest"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="text-xl lg:text-2xl font-bold font-Rancho text-cyan-400 uppercase border-b-2 border-b-cyan-100 mb-2">
          {contest?.contestName}
        </h2>

        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="px-2 bg-slate-300 rounded-full">
              <span className="flex items-center gap-1 text-sm">
                Participants <FaUser />
                {contest?.participantsCount}
              </span>
            </p>
          </div>
          <div>
            <button className="bg-slate-300 px-3 py-1 rounded-full text-sm">
              Details
            </button>
          </div>
        </div>
        <p className="text-slate-500 leading-tight">
          {sliceDescription(contest?.description, 20)}
        </p>
      </div>
    </div>
  );
};

export default ContestCard;
