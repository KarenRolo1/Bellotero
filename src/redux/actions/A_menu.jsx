import { MENU } from './action-types';
import axios from 'axios';

export function sendMenuData(){
  return dispatch =>{
    axios.get("http://localhost:3001/menu")
    .then(response=>{
      dispatch({
        type : MENU,
        data : response.data
      })
    })
  }
}