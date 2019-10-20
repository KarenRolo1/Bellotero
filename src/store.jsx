import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './redux/reducers/root-reducer';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(ReduxThunk))
  );
}