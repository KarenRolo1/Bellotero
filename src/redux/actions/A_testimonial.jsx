import { TESTIMONIAL } from './action-types';
import axios from 'axios';

export function sendTestimonialData(){
  return dispatch =>{
    axios.get("http://localhost:3001/slider")
    .then(response=>{
      dispatch({
        type : TESTIMONIAL,
        data : response.data
      })
    })
  }
}