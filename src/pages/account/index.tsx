import AccountContainer from "./styled";

import MyAccount from "@components/myAccount/MyAccount";
import Header from "@components/header/Header";

function Account(){
  return(
    <AccountContainer>
      <Header />
      <MyAccount />
    </AccountContainer>
  )
}

export default Account;
