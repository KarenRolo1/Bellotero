import { CONFIGURATOR } from './action-types';
import axios from 'axios';

export function sendConfiguratorData(){
  return dispatch =>{
    axios.get("http://localhost:3001/calculator")
    .then(response=>{
      dispatch({
        type : CONFIGURATOR,
        data : response.data
      })
    })
  }
}