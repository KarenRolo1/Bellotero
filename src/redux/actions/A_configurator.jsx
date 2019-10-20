import { CONFIGURATOR } from './action-types';

export function sendConfiguratorData(){
  let datos = {
      "calculator": {
        "title": "Save more with Bellotero.io",
        "description": "With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety.",
        "description1":"Monthly ingredient spending",
        "description2":"Full-time employees that  process invoices",
        "description3":"Estimated cost food savings",
        "description4":"Your estimated annual savings",
      }
    };
  return {
    type : CONFIGURATOR,
    data : datos
  };
}