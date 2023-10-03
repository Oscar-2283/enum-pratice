import axios, { setApiType } from '@/api/utils/axios-helper';
import { ApiType } from '@/api/lib/apiType';


export default class Users {
  static async getUsers(){
    setApiType(ApiType.v2); 
    const response = await axios({
      url: '/users',
      method: 'get',
      responseType: 'json',
  });
  return response;
  }

}