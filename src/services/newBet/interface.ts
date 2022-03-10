interface InGames{
  game_id: number,
  numbers: number[]
}

export interface InMyNewBets{
  games: InGames[]
}

interface InBets{
  choosen_numbers: String,
  user_id: Number,
  game_id: Number,
  price: Number,
  created_at: String,
  updated_at: String,
  id: Number
}

export interface InResponseNewBet{
  bet: InBets[]
}


export interface InNewBets{
  newBets: (body: InMyNewBets) => Promise<InResponseNewBet>,
}
