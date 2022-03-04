import instance from './api';
import { InAuth,
         InBodyAuthLogin,
         InBodyAuthRegister,
         InLoginResponse,
         InRegisterResponse } from '@services/index';

const auth = ():InAuth => {
  async function login(body: InBodyAuthLogin): Promise<InLoginResponse>{
    return instance.post('/login', body);
  }

  async function register(body: InBodyAuthRegister): Promise<InRegisterResponse>{
    return instance.post('/user/create', body);
  }

  return {login, register};
}

export default auth;
