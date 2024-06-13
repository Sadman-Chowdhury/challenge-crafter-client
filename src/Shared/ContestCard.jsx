import { FaUser } from "react-icons/fa6";

const ContestCard = ({ contest }) => {
  //   console.log(contest);
  return (
    <div className="card shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <figure>
        <img
          src={contest?.image}
          className="w-[500px] lg:h-[250px] rounded-tl-full"
          alt="image1"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold font-Rancho text-cyan-400 uppercase border-b-2 border-b-cyan-100">
          {contest?.contestName}
        </h2>

        <div className="flex items-center justify-between">
          <div>
            <p className="px-2 bg-slate-300 rounded-full">
              <span className="flex items-center gap-1 text-sm">
                Participants <FaUser />
                {contest?.participantsCount}
              </span>
            </p>
          </div>
          <div>
            <button className="bg-slate-300 px-3 rounded-full">Details</button>
          </div>
        </div>
        <p className="text-slate-500 leading-tight">{contest?.description}</p>
      </div>
    </div>
  );
};

export default ContestCard;
