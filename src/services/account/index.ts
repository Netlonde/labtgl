import instance from "../api";
import { InUserData ,InResponseUpdateUser, InUpdateUser } from './interface';

const updateMyAccount = ():InUpdateUser => {
  async function updateUser(body: InUserData): Promise<InResponseUpdateUser>{
    return instance.put('/user/update', body);
  }

  return {updateUser}
}

export default updateMyAccount;
