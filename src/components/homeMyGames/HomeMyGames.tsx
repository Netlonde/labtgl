import  { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

import HomeMyGamesContainer, { HomeMyGamesLoading } from "./styled";
import myBets from "@services/listBet";
import { listBetActions } from "@store/ListBetRedux";
import Loading from "@components/loading/Loading";

function formatedDate(number: String){
  if(Number(number)<10) number = '0' + number;
  return number;
}

function whatColorBet(betTypes: [], bet: String){
  if(!betTypes) return;
  let color;

  betTypes.forEach((bets: {type: String, color: String}) => {
    if((bets.type) === bet) color = bets.color;
  });
  return color;
}

function HomeMyGames(){
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getBets(){
      setLoading(true);

      try{
        const { listBets, registeredBets } = myBets();
        await listBets().then(res => dispatch(listBetActions.LISTMYBETS(res)))
        await registeredBets().then(res => dispatch(listBetActions.LISTREGISTREDBETS(res)))
        setLoading(false);
      }catch{
        toast.error('Não foi possível obter seus jogos, atualize a página!');
        setLoading(false);
      }
    }
    getBets();

  },[dispatch])
  const betsState = useSelector((state: RootStateOrAny) => state.listBet)

  function searchForBets(button: any){
    const $EnoughtGame = document.querySelector('.homemygames-noGameFound');
    const $betsContainer = document.querySelector('.homemygames-bets');
    const $betNotFound = document.createElement('h2');
    $EnoughtGame?.childNodes.forEach((betNotFound) => $EnoughtGame.removeChild(betNotFound))

    if(button.style.color === 'rgb(255, 255, 255)' && !($betsContainer?.childNodes[1])){
      $betNotFound.textContent = `No games found.`;
      $EnoughtGame?.appendChild($betNotFound);
      return;
    }

    if(button.style.color === 'rgb(255, 255, 255)') return;

    console.log($betsContainer?.childNodes[0])

    $betsContainer?.childNodes.forEach((myBet: any) =>{
      if(myBet.childNodes[0] === undefined ||
         myBet.childNodes[0].childNodes[3].textContent !== button.className){
        $betNotFound.textContent = `No games found for ${button.className}`;
        $EnoughtGame?.appendChild($betNotFound);
      }else{
        $betNotFound.style.display = 'none'
      }
    })
  }

  function handleClick(e: any){
    const button = e.target;
    const allButtons = document.querySelector('.homemygames-filterButtons');
    const allBets = document.querySelectorAll('.homemygames-betContainer');

    searchForBets(button);

    allButtons?.childNodes.forEach((filterOption: any) => {
      if(!(filterOption.childNodes[0].className === button.className)){
        filterOption.childNodes[0].style.color = filterOption.childNodes[0].style.borderColor;
        filterOption.childNodes[0].style.backgroundColor = 'rgb(255, 255, 255)';
      }
    })

    if(button.style.color !== 'rgb(255, 255, 255)' ){
      button.style.backgroundColor = button.style.color;
      button.style.border = `1px solid ${button.style.color}`;
      button.style.color = 'rgb(255,255,255)'
    }else{
      button.style.color = button.style.backgroundColor;
      button.style.backgroundColor = 'rgb(255,255,255)';
    }

    allBets.forEach((bet: any) => {
      bet.style.display = 'block';
      if(bet.childNodes[3].innerHTML !== button.textContent && button.style.color === 'rgb(255, 255, 255)'){
        bet.style.display = 'none';
      }
    })


  }

  if(loading){
    return(
      <HomeMyGamesLoading>
        <Loading />
      </HomeMyGamesLoading>
    )
  }

  return(
    <HomeMyGamesContainer className="homemygames-container">
      <div className="homemygames-filterGames">
        <h3>RECENT GAMES</h3>
        <small>Filters</small>
        <div className="homemygames-filterButtons">
          {betsState.bets.types && betsState.bets.types.map((betType: { type: String, color: String}) => {
            return (
              <div
                className="homemygames-filterOptions"
                key={String(betType.type)}
              >

                <button
                  className={`${betType.type}`}
                  onClick={handleClick}
                  style={
                    {color: String(betType.color),
                     border: `1px solid ${String(betType.color)}`,
                     backgroundColor: '#fff'}}
                >
                  {betType.type}
                </button>

              </div>
            )
          })
          }
        </div>
      </div>

      <div className="homemygames-bets">
        {betsState.myBets.length > 0 &&
         betsState.myBets.map((bet:
                                { price: Number,
                                  choosen_numbers: String,
                                  created_at: Date,
                                  type: {type: String}}): any => {

          const date = new Date(bet.created_at);
          const color = whatColorBet(betsState.bets.types, bet.type.type);
          const money = bet.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          return (
            <div key={Math.random()}>
              <div className="homemygames-betContainer">
                <hr style={{backgroundColor: color}}></hr>
                <div className="homemygames-chosenNumbers">{bet.choosen_numbers}</div>

                <div className="homemygames-dateAndPrice">
                  {`${formatedDate(String(date.getDate()))}/${formatedDate(String(date.getMonth()))}/${date.getFullYear()} - (${money})`}
                </div>

                <div className="homemygames-type" style={{color}}>
                  {bet.type.type}
                </div>
              </div>
              <div className="homemygames-noGameFound"></div>
            </div>
          )
        })}
        {(betsState.myBets.length === 0) &&
          <div className="homemygames-noGameFound"><h2>No games found.</h2></div> }

      </div>
    </HomeMyGamesContainer>
  )
}

export default HomeMyGames;
