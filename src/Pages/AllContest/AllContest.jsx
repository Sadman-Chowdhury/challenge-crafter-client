import { useState } from "react";
import Container from "../../Container";
import ToggleBtnContest from "./ToggleBtnContest";
import CodingContest from "./GetCodingContest/CodingContest";
import DesignContest from "./GetDesignContest/DesignContest";
import WritingContest from "./GetWritingContest/WritingContest";
import AIContest from "./GetAIContest/AIContest";

const AllContest = () => {
  const [selectContestType, setSelectContestType] = useState("coding");

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

      {selectContestType === "coding" && (
        <>
          <CodingContest />
        </>
      )}
      {selectContestType === "design" && (
        <>
          <DesignContest />
        </>
      )}
      {selectContestType === "writing" && (
        <>
          <WritingContest />
        </>
      )}
      {selectContestType === "AI" && (
        <>
          <AIContest />
        </>
      )}
    </Container>
  );
};

export default AllContest;
