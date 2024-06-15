import UseToGetDigitalAdvertismentContest from "../../../Hooks/UseToGetDigitalAdvertismentContest";
import ContestCard from "../../../Shared/ContestCard";

const DigittalAdvertisContest = () => {
  const [digitalAdvertismentContest] = UseToGetDigitalAdvertismentContest();
  return (
    <div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
        {digitalAdvertismentContest.map((item) => (
          <ContestCard key={item._id} contest={item} />
        ))}
      </div>
    </div>
  );
};

export default DigittalAdvertisContest;
