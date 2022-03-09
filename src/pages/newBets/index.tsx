import NewBetsContainer from "./styled";
import NewBetsForm from "@components/newBetsForm/NewBetsForm";
import Header from "@components/header/Header";

function NewBets(){
  return(
    <NewBetsContainer>
      <Header />
      <NewBetsForm />
    </NewBetsContainer>
  )
}

export default NewBets;
