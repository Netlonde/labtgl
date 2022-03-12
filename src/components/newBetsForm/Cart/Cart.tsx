import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import CartContainer from './styled';
import createNewBets from '@services/newBet';

function Cart(props: {game: any, choiceNumbers: Number[]}){
  const navigate = useNavigate();
  const {game, choiceNumbers} = props;

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

  function cartTotal(price: any){
    const $GamesResult = document.querySelector('.cart-total');

    price = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    $GamesResult!.textContent = 'TOTAL: ';
    $GamesResult!.textContent += String(price);
  }

  function cartTotalPrice(){
    const $GameListContainer = document.querySelector('.cart-gameList');
    const getNumberBR = /R\$\s/g;
    const getComma = /,/g;
    let money = 0;

    $GameListContainer?.childNodes.forEach((bet: any) => {
      if(bet.localName === 'p') return;
      let betCost =(((bet.childNodes[1].childNodes[1].childNodes[1].textContent).replace(getNumberBR,'')));
      betCost = betCost.replace(getComma, '.');
      money += Number(betCost)
    })

    cartTotal(money);
  }

  function addEnoughtMessage(){
    const $EnoughtMessage = document.createElement('p');
    const $cartGameList = document.querySelector('.cart-gameList');
    $EnoughtMessage.id = 'cart-enoughtGames';
    $EnoughtMessage.textContent = 'No games found.'
    $cartGameList?.appendChild($EnoughtMessage);
  }

  (function initializeGameContainer(){
    const $choiceNumbers = document.querySelector('.newbets-buttonNumbersChoiced');
    if(!$choiceNumbers) return;
    if(!game) return;
    if(choiceNumbers.length <= 1) return;

    const $EnoughtMessage = document.getElementById('cart-enoughtGames')
    const $GameListContainer = document.querySelector('.cart-gameList');
    const $div = document.createElement('div');
    const $divLeft = document.createElement('div');
    const $divRight = document.createElement('div');
    const $btnRemove = document.createElement('button');
    const $pNumbers = document.createElement('p');
    const $divRightBottom = document.createElement('div');
    const $pType = document.createElement('p');
    const $pValue = document.createElement('p');
    let sortNumbers: number[] = [];

    choiceNumbers.forEach((number) => sortNumbers.push(Number(number)))
    sortNumbers = sortNumbers.sort((a: number, b: number) => a-b);
    sortNumbers = sortNumbers.filter((number: number) => number !== 0)

    $EnoughtMessage?.remove();

    if(betAlreadyExists(sortNumbers)) return;

    $divRightBottom.className = 'games-cartNumbersBottomContainer'
    $pType.className = `games-${game.type}`;
    $div.className = `games-cartNumbersContainer ${game.id}`;
    $divLeft.className = 'games-cartNumbersLeftContainer';
    $divRight.className = `games-cartNumbersRightContainer`;
    $btnRemove.className = 'fa fa-regular fa-trash-can games-btnRemove';

    $btnRemove.addEventListener('click', () =>{
      $GameListContainer?.removeChild($div)
      if(!$GameListContainer?.childNodes[0]) addEnoughtMessage();
      cartTotalPrice();
    })

    $pValue.textContent = `${(game.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    $pNumbers.textContent = sortNumbers.join(',');
    $pType.textContent = game.type;
    $div.id = String(sortNumbers);
    $divRight.style.borderLeft = `4px solid ${game.color}`
    $pType.style.color = game.color

    $divLeft.appendChild($btnRemove);
    $divRightBottom.appendChild($pType);
    $divRightBottom.appendChild($pValue);
    $divRight.appendChild($pNumbers);
    $divRight.appendChild($divRightBottom);
    $div.appendChild($divLeft);
    $div.appendChild($divRight);
    $GameListContainer!.appendChild($div);

    cartTotalPrice();
  })();

  function getInfo(){
    const $cartGameList = document.querySelector('.cart-gameList');
    let totalBets: any = {games: []}
    let numbers = [];
    let game_id;
    $cartGameList?.childNodes.forEach((bet: any) => {
      game_id = (bet.className[bet.className.length - 1]);
      numbers = JSON.parse('[' + bet.id + ']');
      totalBets.games.push({game_id, numbers});
    })

    return totalBets;
  }

  async function handleAddBetToMyHomeList(e: React.MouseEvent){
    e.preventDefault();
    const myBetsInfo = getInfo();
    const {newBets} = createNewBets()
    try{
      await newBets(myBetsInfo)
        .then(() => {
          toast.success('Jogos cadastrados com sucesso')
          navigate('/home')
        })
        .catch(() => toast.error('Valor mínimo para compra: R$ 30,00'))
    }catch{
      toast.error('Não foi possível fazer a aposta');
    }
  }

  return(
    <CartContainer>
      <h2>CART</h2>

      <div className='cart-gameList'><p id='cart-enoughtGames'>No games found.</p></div>

      <h2>CART <span className='cart-total'>TOTAL: R$ 0,00</span></h2>

      <div className='cart-saveBuy'>
        <button onClick={handleAddBetToMyHomeList}>Save {'->'}</button>
      </div>
    </CartContainer>
  )
}


export default React.memo(Cart);
