import styled from "styled-components";

const CartContainer = styled.div`
  position: relative;
  width: 280px;
  height: 350px;
  max-height: 350px;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-right: 120px;

  h2{
    text-align: left;
    font: italic normal bold 22px Helvetica Neue !important;
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
    margin: 20px 10px !important;
  }

  .cart-gameList{
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    font: italic normal bold 17px Helvetica Neue !important;
    letter-spacing: 0px;
    color: #868686;
    opacity: 1;
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
    height: 100%;
    border-radius: 0px 0px 12px 12px;
    border: 1px solid #ccc;
  }
`;

export default CartContainer;
