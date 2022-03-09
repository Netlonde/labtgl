interface BetType{
  id: Number,
  type: String
}

interface Bet{
  id: Number,
  user_id: Number,
  game_id: Number,
  choosen_numbers: String,
  price: Number,
  created_at: String
  type: BetType
}

export interface ResponseBet{
  Bets: Bet[]
}

interface registeredBet{
  id: Number,
  type: String,
  description: String,
  range: Number,
  price: Number,
  max_number: Number,
  color: String
}

export interface ResponseRegisteredBet{
  Bets: registeredBet[]
}


export interface InBets{
  listBets: () => Promise<ResponseBet>,
  registeredBets: () => Promise<ResponseRegisteredBet>
}
