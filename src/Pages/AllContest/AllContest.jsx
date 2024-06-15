import { useState } from "react";
import Container from "../../Container";
import ToggleBtnContest from "./ToggleBtnContest";
import ImageDesignContest from "./GetImageDesignContest/ImageDesignContest";
import ArticleWritingContest from "./GetArticleWritingContest/ArticleWritingContest";
import MarketingContest from "./GetMarketingContest/MarketingContest";
import DigittalAdvertisContest from "./GetDigitalAdvertisContest/DigittalAdvertisContest";
import GamingContest from "./GetGamingContest/GamingContest";
import BookReviewContest from "./GetBookContest/BookReviewContest";

const AllContest = () => {
  const [selectContestType, setSelectContestType] = useState("Gaming Review");

  const handleContestTypeSelect = (type) => {
    setSelectContestType(type);
  };

  return (
    <Container>
      <div className="mt-6">
        <ToggleBtnContest
          handleContestTypeSelect={handleContestTypeSelect}
          selectContestType={selectContestType}
        />
      </div>

      {selectContestType === "Image Design" && (
        <>
          <ImageDesignContest />
        </>
      )}
      {selectContestType === "Marketing Strategy" && (
        <>
          <MarketingContest />
        </>
      )}
      {selectContestType === "Article Writing" && (
        <>
          <ArticleWritingContest />
        </>
      )}
      {selectContestType === "Digital advertisement" && (
        <>
          <DigittalAdvertisContest />
        </>
      )}
      {selectContestType === "Gaming Review" && (
        <>
          <GamingContest />
        </>
      )}
      {selectContestType === "Book Review" && (
        <>
          <BookReviewContest />
        </>
      )}
    </Container>
  );
};

export default AllContest;
