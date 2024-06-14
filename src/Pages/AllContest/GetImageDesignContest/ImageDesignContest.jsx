import UseToGetImageDesignContest from "../../../Hooks/UseToGetImageDesignContest";
import ContestCard from "../../../Shared/ContestCard";

const ImageDesignContest = () => {
  const [imageDesignContest] = UseToGetImageDesignContest();
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {imageDesignContest.map((item) => (
          <ContestCard key={item._id} contest={item} />
        ))}
      </div>
    </div>
  );
};

export default ImageDesignContest;
