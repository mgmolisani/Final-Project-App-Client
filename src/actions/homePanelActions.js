import {CHANGE_ACTIVE_HOME_PANEL} from "../constants/homePanelConstants";

export function changeActiveHomePanel(panelNumber) {
    return {
        type: CHANGE_ACTIVE_HOME_PANEL,
        panelNumber
    }
}
