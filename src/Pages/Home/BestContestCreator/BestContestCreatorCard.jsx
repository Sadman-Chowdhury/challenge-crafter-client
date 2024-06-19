const sliceDescription = (description, wordLimit) => {
  const words = description.split(" ");
  if (words.length <= wordLimit) return description;
  return words.slice(0, wordLimit).join(" ") + "...";
};
const BestContestCreatorCard = ({ creator }) => {
  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex">
        <div className="shrink-0">
          <img
            className="h-32 w-32 object-cover"
            src={creator.image}
            alt={creator.name}
          />
        </div>
        <div className="p-4">
          <h2 className="block text-lg font-medium text-black">
            {creator.name}
          </h2>
          <p className="text-gray-500">{creator.contestName}</p>
          <p className="text-gray-500">
            {sliceDescription(creator?.description, 20)}
          </p>
          <p className="text-gray-500">
            Participants: {creator.participantsCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestContestCreatorCard;
