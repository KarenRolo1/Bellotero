import { REDUCERMENU } from './reducers-types';
import { MENU } from '../actions/action-types';

const initialState = {
  reducer_type : REDUCERMENU,
  data : ""
};

const menuData = (state = initialState, action) => {
  state = initialState;
  switch (action.type) {
    case MENU:
      return { data: action.data};
    default:
      return state;
  }
}
export default menuData;
