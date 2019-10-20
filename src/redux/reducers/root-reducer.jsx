import {combineReducers} from 'redux';
import configuratorData from './R_configurator';
import menuData from './R_menu';
import testimonialData from './R_testimonial';

const rootReducer = combineReducers({
    configuratorData,
    menuData,
    testimonialData
});
export default rootReducer;