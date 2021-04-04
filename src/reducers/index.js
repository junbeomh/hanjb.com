import {combineReducers} from 'redux';
import themeSwitchReducer from './themeSwitch';
import navbarSwitch from './navbarSwitch';

const rootReducer = combineReducers({
    themeSwitchReducer,
})

export default rootReducer;