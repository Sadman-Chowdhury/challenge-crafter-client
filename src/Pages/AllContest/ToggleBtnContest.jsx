import Container from "../../Container";

const ToggleBtnContest = ({ handleContestTypeSelect, selectContestType }) => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-20 lg:mt-10 mb-12">
        <div className="flex flex-col lg:flex-row">
          <button
            onClick={() => handleContestTypeSelect("coding")}
            className={
              selectContestType === "coding"
                ? "border-2    border-cyan-400 px-2 w-[120px] bg-cyan-500 text-white font-semibold"
                : "border-2   border-cyan-400 px-2 w-[120px] hover:bg-cyan-500 hover:text-white font-semibold"
            }
          >
            Coding
          </button>
          <button
            onClick={() => handleContestTypeSelect("design")}
            className={
              selectContestType === "design"
                ? "border-2  border-cyan-400 px-2 w-[120px] bg-cyan-500 text-white font-semibold"
                : "border-2  border-cyan-400 px-2 w-[120px] hover:bg-cyan-500 hover:text-white font-semibold"
            }
          >
            Design
          </button>
          <button
            onClick={() => handleContestTypeSelect("writing")}
            className={
              selectContestType === "writing"
                ? "border-2 border-l-0 border-cyan-400 px-2 w-[120px] bg-cyan-500 text-white font-semibold"
                : "border-2 border-l-0 border-cyan-400 px-2 w-[120px] hover:bg-cyan-500 hover:text-white font-semibold"
            }
          >
            Writing
          </button>
          <button
            onClick={() => handleContestTypeSelect("AI")}
            className={
              selectContestType === "AI"
                ? "border-2   border-cyan-400 px-2 w-[120px] bg-cyan-500 text-white font-semibold"
                : "border-2   border-cyan-400 px-2 w-[120px] hover:bg-cyan-500 hover:text-white font-semibold"
            }
          >
            AI
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ToggleBtnContest;
