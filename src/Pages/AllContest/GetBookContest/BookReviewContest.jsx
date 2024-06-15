import UseToGetBookReviewContest from "../../../Hooks/UseToGetBookReviewContest";
import ContestCard from "../../../Shared/ContestCard";

const BookReviewContest = () => {
  const [bookReviewContest] = UseToGetBookReviewContest();

  return (
    <div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
        {bookReviewContest.map((item) => (
          <ContestCard key={item._id} contest={item} />
        ))}
      </div>
    </div>
  );
};

export default BookReviewContest;
