import Container from "../../Container";
import AllWinner from "./AllWinner/AllWinner";
import Banner from "./Banner/Banner";
import BestContestCreator from "./BestContestCreator/BestContestCreator";
import PopularContest from "./PopularContest/PopularContest";

const Home = () => {
  return (
    <Container>
      <div>
        <Banner />
        <PopularContest />
        <AllWinner />
        <BestContestCreator />
      </div>
    </Container>
  );
};

export default Home;
