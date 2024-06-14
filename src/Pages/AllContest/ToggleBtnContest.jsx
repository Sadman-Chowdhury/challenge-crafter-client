import Container from "../../Container";

const ToggleBtnContest = ({ handleContestTypeSelect, selectContestType }) => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-20 lg:mt-10 mb-12">
        <div className="flex flex-col lg:flex-row">
          <button
            onClick={() => handleContestTypeSelect("Image Design")}
            className={
              selectContestType === "Image Design"
                ? "border-2    border-cyan-400 px-2 w-[120px] bg-cyan-500 text-white font-semibold"
                : "border-2   border-cyan-400 px-2 w-[120px] hover:bg-cyan-500 hover:text-white font-semibold"
            }
          >
            Image Design
          </button>
          <button
            onClick={() => handleContestTypeSelect("Article Writing")}
            className={
              selectContestType === "Article Writing"
                ? "border-2  border-cyan-400 px-2 w-[120px] bg-cyan-500 text-white font-semibold"
                : "border-2  border-cyan-400 px-2 w-[120px] hover:bg-cyan-500 hover:text-white font-semibold"
            }
          >
            Article Writing
          </button>
          <button
            onClick={() => handleContestTypeSelect("Marketing Strategy")}
            className={
              selectContestType === "Marketing Strategy"
                ? "border-2 border-l-0 border-cyan-400 px-2 w-[120px] bg-cyan-500 text-white font-semibold"
                : "border-2 border-l-0 border-cyan-400 px-2 w-[120px] hover:bg-cyan-500 hover:text-white font-semibold"
            }
          >
            Marketing Strategy
          </button>
          <button
            onClick={() => handleContestTypeSelect("Digital advertisement")}
            className={
              selectContestType === "Digital advertisement"
                ? "border-2   border-cyan-400 px-2 w-[120px] bg-cyan-500 text-white font-semibold"
                : "border-2   border-cyan-400 px-2 w-[120px] hover:bg-cyan-500 hover:text-white font-semibold"
            }
          >
            Digital advertisement
          </button>
          <button
            onClick={() => handleContestTypeSelect("Gaming Review")}
            className={
              selectContestType === "Gaming Review"
                ? "border-2   border-cyan-400 px-2 w-[120px] bg-cyan-500 text-white font-semibold"
                : "border-2   border-cyan-400 px-2 w-[120px] hover:bg-cyan-500 hover:text-white font-semibold"
            }
          >
            Gaming Review
          </button>
          <button
            onClick={() => handleContestTypeSelect("Book Review")}
            className={
              selectContestType === "Book Review"
                ? "border-2   border-cyan-400 px-2 w-[120px] bg-cyan-500 text-white font-semibold"
                : "border-2   border-cyan-400 px-2 w-[120px] hover:bg-cyan-500 hover:text-white font-semibold"
            }
          >
            Book Review
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ToggleBtnContest;
