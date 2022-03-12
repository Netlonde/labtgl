import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4.5rem;
  border-bottom: 2px solid #ccc;
  padding: 0px 100px;

  a{
    text-align: center;
    font: italic normal bold 18px/70px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  a:hover{
    text-decoration: underline;
  }

  .header-logo{
    margin-top: 10px;
    text-align: center;
    font: italic normal bold 40px/61px Helvetica Neue;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  .header-lineDivisor{
    height: 7px;
    border-radius: 3px;
    background-color: #B5C401;
    border-color: #B5C401;
    border: none;
  }

  .header-options{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }

  .header-responsiveOptions{
    margin-top: 10px;
    display: none;
  }

  .header-responsiveButton{
    cursor: pointer;
    opacity: 0.8;
  }

  .header-responsiveButton:hover{
    opacity: 1;
  }

  .header-homeLink{
    position: absolute;
    left: 270px;
  }

  @media (max-width: 700px) {
    padding: 0px 50px;

    .header-options{
      display: none;
    }

    .header-homeLink{
      display: none;
    }

    .header-responsiveOptions{
      display: block;
    }
  }
`;

export default HeaderContainer;
