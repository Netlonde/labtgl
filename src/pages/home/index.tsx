import { FaArrowRight } from 'react-icons/fa';

import Header from "@components/header/Header";
import HomeMyGames from "@components/homeMyGames/HomeMyGames";
import HomeContainer from "./styled";

function Home(){

  return(
    <HomeContainer>
      <Header />
      <HomeMyGames />
      <div className="home-newBet">
        <a href="new-bets">
          New Bet <FaArrowRight />
        </a>
      </div>
    </HomeContainer>
  )
}

export default Home;
