export interface InUserData{
  email: String,
  name: String
}

export interface InResponseUpdateUser{
  id: Number,
	email: String,
	is_admin: Number,
	name: String,
	token: String,
	token_created_at: String,
	created_at: String,
	updated_at: String
}

export interface InUpdateUser{
  updateUser: (body: InUserData) => Promise<InResponseUpdateUser>,
}
