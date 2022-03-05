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


export interface InBets{
  listBets: () => Promise<ResponseBet>,
}
