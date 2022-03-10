import styled from "styled-components";

const CartContainer = styled.div`
  width: 280px;
  height: 390px;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-right: 120px;

  h2{
    text-align: left;
    font: italic normal bold 20px Helvetica Neue !important;
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
    margin: 20px 10px !important;
  }

  .cart-gameList{
    overflow: auto;
    width: 100%;
    height: 170px;
    text-align: left;
    font: italic normal bold 17px Helvetica Neue !important;
    letter-spacing: 0px;
    color: #868686;
    opacity: 1;
  }

  #cart-enoughtGames{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart-saveBuy{
    width: 100%;
    height: 86px;
  }

  .cart-saveBuy button{
    text-align: center;
    font: italic normal bold 35px Helvetica Neue;
    letter-spacing: 0px;
    color: #27C383;
    opacity: 1;
    width: 100%;
    height: 106%;
    border-radius: 0px 0px 12px 12px;
    border: 1px solid #ccc;
  }

  .games-cartNumbersContainer{
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    word-wrap: break-word;
    margin: 12px 0px;
  }

  .games-cartNumbersContainer p{
    width: 100%;
    font: italic normal bold 12px/15px Helvetica Neue;
    letter-spacing: 0px;
    color: #868686;
  }

  .games-cartNumbersLeftContainer{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
  }

  .games-cartNumbersRightContainer {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 185px;
      padding: 0px 7px;
      border-radius: 3px;
      margin-right: 10px;
  }

  .games-btnRemove{
      margin-left: 20px;
      background: transparent;
      border: none;
      font-size: 1.2rem;
  }

  .games-cartNumbersBottomContainer{
      display: flex;
      align-items: center;
      justify-content: left;
      width: 100%;
      padding-right: 10px;
      margin-top: 5px;
      height: 20px;
  }

  .cart-total{
    text-align: center;
    font: normal normal 300 20px Helvetica Neue !important;
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
  }
`;

export default CartContainer;
