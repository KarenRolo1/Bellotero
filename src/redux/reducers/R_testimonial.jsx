import { REDUCERTESTIMONIAL } from './reducers-types';
import { TESTIMONIAL } from '../actions/action-types';

const initialState = {
  reducer_type : REDUCERTESTIMONIAL,
  data : ""
};

const testimonialData = (state = initialState, action) => {
  state = initialState;
  switch (action.type) {
    case TESTIMONIAL:
      return { data: action.data};
    default:
      return state;
  }
}
export default testimonialData;
