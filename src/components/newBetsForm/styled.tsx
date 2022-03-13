import styled from "styled-components";

const NewBetsFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 50px;

  h2{
    text-align: left;
    font: italic normal bold 22px/50px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
    margin-top: 50px;
  }

  h4{
    text-align: left;
    font: italic normal bold 15px/24px Helvetica Neue;
    letter-spacing: 0px;
    color: #868686;
    margin-bottom: 5px;
  }

  small{
    text-align: left;
    font: italic normal bold 15px Helvetica Neue;
    letter-spacing: 0px;
    color: #868686;
    opacity: 1;
    margin-bottom: 15px;
  }

  .newbets-leftContainer{
    width: 700px;
    height: 575px;
  }

  .newbets-leftContainer span{
    text-align: center;
    font: italic normal 300 22px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
  }

  .newbets-rightContainer{
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .newbets-gamesContainer{
    display: flex;
    flex-direction: column;
  }

  .newbets-gamesButtonContainer{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 15px;
  }

  .newbets-gamesButtonContainer button{
    text-align: left;
    font: italic normal bold 14px Helvetica Neue;
    padding: 0.3rem 1.5rem;
    border-radius: 100px;
    letter-spacing: 0px;
    opacity: 1;
  }

  .newbets-buttonNumbers{
    height: 222px;
    overflow: auto;
  }

  .newbets-description{
    text-align: left;
    font: italic normal normal 17px/24px Helvetica Neue;
    letter-spacing: 0px;
    color: #868686;
    margin-bottom: 20px;
  }

  .newbets-buttonNumbers button:hover{
    opacity: 0.9;
  }

  .newbets-buttonsBuy{
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .newbets-buttonsBuy button{
    font-size: 15px;
    border-radius: 10px;
    padding: 7px 15px;
    font-weight: 600;
  }

  .newbets-buttonsGame{
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .newbets-buttonsGame button{
    border: 1px solid #27C383;
    color: #27C383;
    background-color: #fff;
    transition: all ease-in-out 200ms;
  }

  .newbets-buttonsGame button:hover{
    color: #fff;
    background-color: #27C383;
  }

  .newbets-buyButton{
    background-color: #27C383;
    border: 1px solid #27C383;
    color: #fff;
    transition: all ease-in-out 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .newbets-buyButton:hover{
    color: #27C383;
    background-color: #fff;
  }

  .newbets-buttonNumbersChoiced{
    display: none;
  }
`;

export default NewBetsFormContainer;


export const NewbetsLoadind = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
