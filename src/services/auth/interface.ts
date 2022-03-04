export interface InBodyAuthLogin{
  email: String,
  password: String
}

export interface InBodyAuthRegister{
  name: String,
  email: String,
  password: String
}

interface UserLogin{
  id: Number,
  email: String,
  is_admin: Number,
  name: String,
  token: String | Boolean,
  token_created_at: String,
  created_at: String,
  updated_at: String,
  picture: String | Boolean
}

interface UserRegister{
  id: Number,
  email: String,
  name: String,
  created_at: String,
  updated_at: String,
}


interface Token{
  type: String,
  token: String,
  expires_at: String
}


export interface InLoginResponse{
  user: UserLogin,
  token: Token
}

export interface InRegisterResponse{
  user: UserRegister,
  token: Token
}

export interface InAuth{
  login: ({email, password}: InBodyAuthLogin) => Promise<InLoginResponse>,
  register: ({name, email, password}: InBodyAuthRegister) => Promise<InRegisterResponse>;
}
