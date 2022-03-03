import styled from "styled-components";

const SloganContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;

  .slogan-firstText{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    text-align: center;
    font: italic normal bold 40px/50px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    margin-bottom: 1.8rem;
  }

  .slogan-forText{
    font: italic normal bold 17px/25px Helvetica Neue;
    color: #fff;
    background: #B5C401 0% 0% no-repeat padding-box;
    border-radius: 100px;
    opacity: 1;
    width: 6rem;
    text-align: center;
    margin-bottom: 1.8rem;
  }

  .slogan-lastText{
    text-align: center;
    font: italic normal bold 53px/50px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
    opacity: 1;
  }
`;

export default SloganContainer;
