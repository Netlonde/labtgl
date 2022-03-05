import HeaderContainer from "./styled";

function Header(){
  return(
    <HeaderContainer>
      <div className="header-logo">
        TGL

        <hr className="header-lineDivisor" />
      </div>

      <div className="header-options">
        <a href="#">Account</a>
        <a href="/login">Sair {'->'}</a>
      </div>
    </HeaderContainer>
  )
}

export default Header;
