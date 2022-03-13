import styled from 'styled-components'

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  .home-newBet{
    margin-bottom: 365px;
  }

  .home-newBet a{
    text-align: center;
    font: italic normal bold 20px Helvetica Neue;
    letter-spacing: 0px;
    color: #B5C401;
    opacity: 1;
  }

  .home-newBet a:hover{
    text-decoration: underline;
  }

  @media (max-width: 1085px) {
    .home-newBet{
      position: absolute;
      right: 100px;
      bottom: -300px;
    }
  }

  @media (max-width: 700px) {
    .home-newBet{
      display: none;
    }
  }
`;

export default HomeContainer;
