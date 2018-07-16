import {SELECT_IMAGE, UNSELECT_IMAGE} from "../constants/actionConstants";

/**
 * Reducer for setting and removing what images are selected
 * @param state
 * @param action
 * @returns {*}
 */
export default function imageSelectionReducer(state = [], action) {
    switch (action.type) {
        case SELECT_IMAGE:
            return [...state, action.imageId];
        case UNSELECT_IMAGE:
            return state.filter(imageId => (imageId !== action.imageId));
        default:
            return state;
    }
}