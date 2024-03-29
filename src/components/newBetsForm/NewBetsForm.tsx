import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify';
import { FaShoppingCart } from 'react-icons/fa'

import { listBetActions } from "@store/ListBetRedux";
import myBets from "@services/listBet";

import Cart from "./Cart/Cart";
import NewBetsFormContainer, { NewbetsLoadind } from "./styled"
import Loading from "@components/loading/Loading";


function NewBetsForm(){
  const [numbers, setNumbers] = useState([]);
  const [game, setGame] = useState(
    {id: '',
     type: '',
     description: '',
     color: '',
     max_number: 0,
     price: 0,
     range: 0}
    );
  const dispatch = useDispatch();

  useEffect(() => {
    async function getBets(){
      try{
        const { registeredBets } = myBets();
        await registeredBets().then(res => dispatch(listBetActions.LISTREGISTREDBETS(res)))
      }catch{
        toast.error('Não foi possível obter as apostas')
      }
    }
    getBets();

  },[dispatch])
  const betsType = useSelector((state: any) => state.listBet.bets)

  if(betsType.types === undefined) return(
    <NewbetsLoadind >
      <Loading />
    </NewbetsLoadind>
  )

  function createButtons(range: number, color: String){
    const $ButtonNumbersContainer = document.querySelector('.newbets-buttonNumbers');

    for(let i = 1; i < range+1; i++){
      let $button = document.createElement('button');
      $button.innerHTML = String(i);
      $button.id = `button-${String(i)}`
      $button.style.backgroundColor = '#ADC0C4'
      $button.style.border = 'none'
      $button.style.font = 'inherit'
      $button.style.color = '#fff'
      $button.style.padding = '1rem'
      $button.style.borderRadius = '100px'
      $button.style.margin = '5px'
      $button.style.width = '4rem'
      $button.style.height = '4rem'
      $button.style.textAlign = 'center'
      $button.addEventListener('click', () => handleSelectNumber($button.id, color))
      $ButtonNumbersContainer?.appendChild($button);
    }
  }

  function alterColorNumber(id: String, color: String){
    const $choiceNumbers = document.querySelector('.newbets-buttonNumbersChoiced');
    const $button = document.getElementById(`${id}`);
    let choiceNumbers = $choiceNumbers?.innerHTML.split(',')

    if(((game.max_number > 0 && choiceNumbers!.length >= game.max_number) ||
         choiceNumbers!.length >= betsType.types[0].max_number) && $button!.style.backgroundColor !== 'rgb(173, 192, 196)'){
            return;
         }

    if($button!.style.backgroundColor === 'rgb(173, 192, 196)'){
      $button!.style.backgroundColor = String(color)
    }else{
      $button!.style.backgroundColor = 'rgb(173, 192, 196)';
    }
  }

  function handleSelectNumber(id: String, color: String){
    const $button = document.getElementById(`${id}`);
    const $choiceNumbers = document.querySelector('.newbets-buttonNumbersChoiced');
    let choiceNumbers = $choiceNumbers?.innerHTML.split(',')
    choiceNumbers = (choiceNumbers?.filter((item) => item !== '') )

    if($button!.style.backgroundColor === 'rgb(173, 192, 196)'){
      if((game.max_number > 0 && choiceNumbers!.length >= game.max_number) ||
          choiceNumbers!.length >= betsType.types[0].max_number){
            toast.error('Você já selecionou todos os números');
            return;
          }

      $button!.style.backgroundColor = String(color)

      $choiceNumbers!.innerHTML += ',' + $button?.innerHTML + ',';
    }else{

      choiceNumbers = choiceNumbers?.filter((item) => item !== (String($button?.innerHTML)));

      $choiceNumbers!.innerHTML = String(choiceNumbers?.toString());
      $button!.style.backgroundColor = 'rgb(173, 192, 196)';
    }
  }

  function removeAllButtons(){
    const $ButtonNumbersContainer = document.querySelector('.newbets-buttonNumbers');
    if($ButtonNumbersContainer === null) return;

    while ($ButtonNumbersContainer!.firstChild) {
      $ButtonNumbersContainer!.removeChild($ButtonNumbersContainer!.firstChild);
    }
  }

  function sortNumbers(range: any , max: any, numbers: Array<String>){
    numbers = numbers.filter((item) => item !== '' );

    let length = numbers.length;

    let arrayNumbers: any =  [];

    (length > 0)
        ? numbers.forEach((number) => arrayNumbers.push(Number(number)))
        : arrayNumbers = [];


    let randomNumber;
    for(let i=0; i<(max - length);i++){
      randomNumber = Math.floor((Math.random() * range) +1);
      (arrayNumbers!.indexOf((randomNumber)) === -1)
          ? arrayNumbers.push(randomNumber)
          : i--;
    }
    return arrayNumbers;
  }

  function completeGame(){
    const $choiceNumbers = document.querySelector('.newbets-buttonNumbersChoiced');
    let choiceNumbers: any;
    choiceNumbers = $choiceNumbers?.innerHTML.split(',');

    (choiceNumbers![0] === '')
      ? choiceNumbers = sortNumbers(game.range || betsType.types[0].range, game.max_number || betsType.types[0].max_number, choiceNumbers)
      : choiceNumbers = sortNumbers(game.range || betsType.types[0].range, game.max_number || betsType.types[0].max_number, choiceNumbers)
      $choiceNumbers!.textContent = choiceNumbers.join(',');

      choiceNumbers.forEach((id: any) => alterColorNumber(`button-${id}`, game.color || betsType.types[0].color))
  }

  function clearGame(e: React.MouseEvent){
    e.preventDefault();
    const $choiceNumbers = document.querySelector('.newbets-buttonNumbersChoiced');
    const $ButtonNumbersContainer = document.querySelector('.newbets-buttonNumbers');
    $choiceNumbers!.textContent = '';

    $ButtonNumbersContainer?.childNodes.forEach((button: any) => alterColorNumber(button.id, 'rgb(173, 192, 196)'))
  }

  function alterColorType(e: any, color: String){
    const $button = e.target || document.getElementById(`${betsType.types[0].type}`);
    const $allButtons = document.querySelector('.newbets-gamesButtonContainer');

    if($allButtons !== null){
      $allButtons!.childNodes.forEach((filterOption: any) => {
        if(!(filterOption.id === $button.id)){
          filterOption.style.color = filterOption.style.borderColor;
          filterOption.style.backgroundColor = 'rgb(255, 255, 255)';
        }
      })
    }

    if($button && $button.style.color !== 'rgb(255, 255, 255)' ){
      $button.style.backgroundColor = $button.style.color;
      $button.style.border = `1px solid ${$button.style.color}`;
      $button.style.color = 'rgb(255,255,255)'
    }else{
      return;
    }
  }

  function handleClick(e: any, bet: any){
    e.preventDefault();
    setGame(bet);
    setNumbers([]);
    clearGame(e);
    alterColorType(e, game.color);
  }

  function correctRange(sortNumbers: any){
    const numbersRange = game.max_number - sortNumbers.length;
    if (sortNumbers.length !== game.max_number){
      toast.error(`Selecione mais ${numbersRange} número${(numbersRange > 1) ? 's' : ''}`);
      return false;
    };
    return true;
  }

  function betAlreadyExists(sortNumbers: any){
    let newSortNumbers: string[] = [];
    let isExist = false;

    sortNumbers.forEach((number:number) => newSortNumbers.push(String(number)))

    const $GameListContainer = document.querySelector('.cart-gameList');
    $GameListContainer?.childNodes.forEach((game: any) => {
      if(game.id === newSortNumbers.join(',')) isExist = true;
    })

    return isExist;
  }

  function handleAddToCart(e: React.MouseEvent){
    const $choiceNumbers = document.querySelector('.newbets-buttonNumbersChoiced');

    let numbers : any;
    numbers = $choiceNumbers?.textContent;
    numbers = numbers!.split(',')
    numbers = numbers.filter((numberInText: string) => numberInText !== '');
    if(!correctRange(numbers)) return;
    if (betAlreadyExists(numbers)){
      toast.error('Você já escolheu essa combinação');
      return;
    }
    setNumbers(numbers);

    clearGame(e);
  }

  if(game.range === 0 && betsType.types){
    setTimeout(() => {
      removeAllButtons();
      createButtons(betsType.types[0].range, betsType.types[0].color);
      alterColorType(_, betsType.types[0].color);
      setGame(betsType.types[0]);
    },500)
  }else{
    removeAllButtons();
    createButtons(game.range, game.color);
  }

  return(
    <NewBetsFormContainer>
      {betsType.types &&
        <div className="newbets-leftContainer">
          <h2>
            NEW BET <span>FOR {game.type || betsType.types[0].type}</span>
          </h2>

          <div className="newbets-gamesContainer">
            <small>Choose a game</small>

            <div className="newbets-gamesButtonContainer">
              {betsType.types.map((bet: any) => {
                return (
                  <button
                    key={bet.type}
                    id={bet.type}
                    style={{color: bet.color, backgroundColor: '#fff', border: `1px solid ${bet.color}`}}
                    onClick={(e) => handleClick(e,bet)}
                  >
                      {bet.type}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="newbets-descriptionContainer">
            <h4>Fill your bet</h4>
            <p className="newbets-description">{game.description || betsType.types[0].description}</p>
          </div>

          <div className="newbets-buttonNumbersContainer">
            <div className="newbets-buttonNumbers"></div>
          </div>

          <div className="newbets-buttonNumbersChoiced"></div>

          <div className="newbets-buttonsBuyContainer">

            <div className="newbets-buttonsBuy">

              <div className="newbets-buttonsGame">
                <button onClick={completeGame}>Complete Game</button>
                <button onClick={clearGame}>Clear Game</button>
              </div>

              <button onClick={handleAddToCart} className="newbets-buyButton"><FaShoppingCart /> Comprar</button>
            </div>
          </div>
        </div>
      }
      <div className="newbets-rightContainer">
        <Cart game={game || betsType.types[0]} choiceNumbers={numbers} />
      </div>


    </NewBetsFormContainer>
  )
}

export default NewBetsForm
function _(_: any, color: any) {
  throw new Error("Function not implemented.");
}

