import instance from '../api';
import { InBets, ResponseBet, ResponseRegisteredBet } from './interface';

const myBets = ():InBets => {
  async function listBets(): Promise<ResponseBet>{
    return instance.get('/bet/all-bets');
  }

  async function registeredBets(): Promise<ResponseRegisteredBet>{
    return instance.get('/cart_games');
  }

  return {listBets, registeredBets}
}

export default myBets;
