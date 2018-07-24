import {CHANGE_ACTIVE_HOME_PANEL} from "../constants/homePanelConstants";

const initialState = 0;

export default function homePanelReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_ACTIVE_HOME_PANEL:
            return action.panelNumber;
        default:
            return state;
    }
}