import {combineReducers} from 'redux'
import homePanelReducer from "./homePanelReducer";
import calendarReducer from "./calendar";

const rootReducer = combineReducers({
    activeHomePanel: homePanelReducer,
    calendar: calendarReducer
});

export default rootReducer;