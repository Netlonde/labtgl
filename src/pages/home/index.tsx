import Header from "@components/header/Header";
import HomeContainer from "./styled";

function Home(){

  // async function handleClick(e: React.FormEvent){
  //   e.preventDefault();
  //   const { listBets } = myBets();
  //   await listBets().then(res => console.log(res))

  //   <button onClick={handleClick}>
  //     Clique
  //   </button>

  // }

  return(

    <HomeContainer>
      <Header />
      Home
    </HomeContainer>
  )
}

export default Home;
