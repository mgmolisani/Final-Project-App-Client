import {RECEIVE_INSTAGRAM_IMAGES_FOR_USER, REQUEST_INSTAGRAM_IMAGES_FOR_USER} from "../constants/actionConstants";

/**
 * Reducer for getting image data and showing when it has been loaded
 * @param state
 * @param action
 * @returns {*}
 */
export default function imageDataReducer(
    state = {
        images: [],
        isFetching: false
    }, action) {
    switch (action.type) {
        case RECEIVE_INSTAGRAM_IMAGES_FOR_USER:
            return {
                images: action.imageData.data,
                isFetching: false
            };
        case REQUEST_INSTAGRAM_IMAGES_FOR_USER:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state;
    }
}