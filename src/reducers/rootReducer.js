import {combineReducers} from 'redux'
import homePanelReducer from "./homePanelReducer";

const rootReducer = combineReducers({
    activeHomePanel: homePanelReducer
});

export default rootReducer;