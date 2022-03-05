import instance from '../api';
import { InBets, ResponseBet } from './interface';

const myBets = ():InBets => {
  async function listBets(): Promise<ResponseBet>{
    return instance.get('/bet/all-bets');
  }

  return {listBets}
}

export default myBets;
