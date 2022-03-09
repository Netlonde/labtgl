import  { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import HomeMyGamesContainer from "./styled";
import myBets from "@services/listBet";
import { listBetActions } from "@store/ListBetRedux";

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

  useEffect(() => {
    async function getBets(){
      try{
        const { listBets, registeredBets } = myBets();
        await listBets().then(res => dispatch(listBetActions.LISTMYBETS(res)))
        await registeredBets().then(res => dispatch(listBetActions.LISTREGISTREDBETS(res)))
      }catch{
        alert('erro')
      }
    }
    getBets();

  },[dispatch])
  const betsState = useSelector((state: RootStateOrAny) => state.listBet)

  function handleClick(e: any){
    const button = e.target;
    const allButtons = document.querySelector('.homemygames-filterButtons');
    const allBets = document.querySelectorAll('.homemygames-betContainer');

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

  return(
    <HomeMyGamesContainer>
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
          const money = bet.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
          return (
            <div
              key={Math.random()}
              className="homemygames-betContainer"
            >
              <hr style={{backgroundColor: color}}></hr>
              <div className="homemygames-chosenNumbers">{bet.choosen_numbers}</div>

              <div className="homemygames-dateAndPrice">
                {`${formatedDate(String(date.getDate()))}/${formatedDate(String(date.getMonth()))}/${date.getFullYear()} - (${money})`}
              </div>

              <div className="homemygames-type" style={{color}}>
                {bet.type.type}
              </div>
            </div>
          )
        })}
      </div>
    </HomeMyGamesContainer>
  )
}

export default HomeMyGames;
