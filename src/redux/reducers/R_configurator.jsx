import { REDUCERCONFIGURATOR } from './reducers-types';
import { CONFIGURATOR } from '../actions/action-types';

const initialState = {
  reducer_type : REDUCERCONFIGURATOR,
  data : ""
};

const configuratorData = (state = initialState, action) => {
    state = initialState;
    switch (action.type) {
        case CONFIGURATOR:
            return { data: action.data};
        default:
            return state;
    }
}
export default configuratorData;
