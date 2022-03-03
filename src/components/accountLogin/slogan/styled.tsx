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

  @media (max-width: 950px) {
    margin-bottom: 2rem;

    @media (max-height: 800px) {
      margin-top: 5rem;
    }

    @media (max-height: 750px) {
      margin-top: 8rem;
    }

    @media (max-height: 700px) {
      margin-top: 10rem;
    }

    @media (max-height: 650px) {
      margin-top: 12rem;
    }

    .slogan-firstText{
      font: italic normal bold 50px/50px Helvetica Neue;
    }

    .slogan-forText{
      font: italic normal bold 20px/25px Helvetica Neue;
      width: 8rem;
      padding: 0.2rem;
    }

    .slogan-lastText{
      font: italic normal bold 65px/50px Helvetica Neue;
    }
  }

  @media (max-width: 600px){
    .slogan-firstText{
      font: italic normal bold 40px/50px Helvetica Neue;
    }

    .slogan-forText{
      font: italic normal bold 17px/25px Helvetica Neue;
      width: 8rem;
      padding: 0.2rem;
    }

    .slogan-lastText{
      font: italic normal bold 50px/50px Helvetica Neue;
    }
  }
`;

export default SloganContainer;
