import styled from 'styled-components'

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 300px;

  .home-newBet{
    margin-right: 50px;
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
`;

export default HomeContainer;
