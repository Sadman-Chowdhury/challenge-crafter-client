import { useState } from "react";
import Container from "../../Container";
import ToggleBtnContest from "./ToggleBtnContest";
import CodingContest from "./GetCodingContest/CodingContest";

const AllContest = () => {
  const [selectContestType, setSelectContestType] = useState("coding");

  const handleContestTypeSelect = (type) => {
    setSelectContestType(type);
  };

  // console.log(contest);

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
          <CodingContest />
        </>
      )}
      {selectContestType === "writing" && (
        <>
          <CodingContest />
        </>
      )}
      {selectContestType === "AI" && (
        <>
          <CodingContest />
        </>
      )}
    </Container>
  );
};

export default AllContest;
