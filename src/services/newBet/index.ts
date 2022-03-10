import instance from '../api';
import { InNewBets, InMyNewBets, InResponseNewBet } from './interface';

const createNewBets = ():InNewBets => {
  async function newBets(body: InMyNewBets): Promise<InResponseNewBet>{
    return instance.post('/bet/new-bet', body);
  }

  return {newBets}
}

export default createNewBets;
