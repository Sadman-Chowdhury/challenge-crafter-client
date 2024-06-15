import UseToGetArticleWritingContest from "../../../Hooks/UseToGetArticleWritingContest";
import ContestCard from "../../../Shared/ContestCard";

const ArticleWritingContest = () => {
  const [articleWritingContest] = UseToGetArticleWritingContest();
  return (
    <div>
      <div className="grid  grid-cols-1  lg:grid-cols-3 gap-6">
        {articleWritingContest.map((item) => (
          <ContestCard key={item._id} contest={item} />
        ))}
      </div>
    </div>
  );
};

export default ArticleWritingContest;
