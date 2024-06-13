import UseToGetDesignContest from "../../../Hooks/UseToGetDesignContest";
import ContestCard from "../../../Shared/ContestCard";

const DesignContest = () => {
  const [design] = UseToGetDesignContest();
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {design.map((item) => (
          <ContestCard key={item._id} contest={item} />
        ))}
      </div>
    </div>
  );
};

export default DesignContest;
