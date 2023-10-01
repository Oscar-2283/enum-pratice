import axios, { setApiType } from '@/api/utils/axios-helper';
import { ApiType } from '@/api/lib/apiType';


export default class Consultant {
  static async getConsultant(){
    setApiType(ApiType.v2); 
    const response = await axios({
      url: '/wuwow/teach',
      method: 'get',
      responseType: 'json',
  });
  return response;
  }
  static async getTest(){

    const response = await axios({
      url: 'test',
      method: 'get',
      responseType: 'json',
  });
  return response;
  }
}