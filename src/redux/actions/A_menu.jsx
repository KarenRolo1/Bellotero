import { MENU } from './action-types';

export function sendMenuData(){
  let datos = {
    "menu": {
      "items": [
        {
          "text": "Testimonial",
          "route": "/"
        },
        {
          "text": "Configurator",
          "route": "page-2"
        },
        {
          "text": "Stories",
          "route": "#"
        },
        {
          "text": "About",
          "route": "#"
        }
      ]
    }
  }
  return {
    type : MENU,
    data : datos
  };
}