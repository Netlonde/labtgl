import styled from "styled-components";

const HomeMyGamesContainer = styled.div`
  height: 400px;

  .homemygames-filterGames{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  .homemygames-filterGames h3{
    text-align: center;
    font: italic normal bold 18px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
    opacity: 1;
    margin-right: 20px;
  }

  .homemygames-filterGames small{
    text-align: left;
    font: italic normal normal 14px Helvetica Neue;
    letter-spacing: 0px;
    color: #868686;
    opacity: 1;
  }

  .homemygames-bets{
    padding: 1.4rem;
    max-height: 400px;
    width: 450px;
    overflow: auto;
  }

  .homemygames-betContainer{
    margin-bottom: 20px;
    position: relative;
  }

  .homemygames-betContainer hr{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 5px;
    border: none;
    border-radius: 3px;
  }

  .homemygames-chosenNumbers{
    margin: 0px 0px 10px 15px;
    text-align: left;
    font: italic normal bold 16px Helvetica Neue;
    letter-spacing: 0px;
    color: #868686;
    opacity: 1;
  }

  .homemygames-dateAndPrice{
    margin: 0px 0px 10px 15px;
    text-align: left;
    font: normal normal normal 13px Helvetica Neue;
    letter-spacing: 0px;
    color: #868686;
    opacity: 1;
  }

  .homemygames-type{
    margin: 0px 0px 10px 15px;
    font: italic normal bold 15px Helvetica Neue;
    letter-spacing: 0px;
    opacity: 1;
  }

  .homemygames-filterButtons{
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .homemygames-filterOptions button{
    font: italic normal bold 14px Helvetica Neue;
    padding: 0.3rem 1.5rem;
    border-radius: 100px;
  }

  #homemygames-enoughtBets{
    position: absolute;
    top: 50%;
    left: 35%;
    font: italic normal bold 18px Helvetica Neue;
    color: #707070;
    text-transform: uppercase;
  }

  .homemygames-noGameFound{
    position: absolute;
    top: 300px;
    right: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font: italic normal bold 18px Helvetica Neue;
    color: #707070;
  }
`;

export default HomeMyGamesContainer;

export const HomeMyGamesLoading = styled.div`
  position: absolute;
  height: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff
`;
