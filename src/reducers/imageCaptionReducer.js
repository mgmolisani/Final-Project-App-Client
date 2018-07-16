import {HIDE_IMAGE_CAPTION_TEXT, SHOW_IMAGE_CAPTION_TEXT} from "../constants/actionConstants";

/**
 * Reducer to show and hide an image caption
 * @param state
 * @param action
 * @returns {*}
 */
export default function imageCaptionReducer(state = null, action) {
    switch (action.type) {
        case SHOW_IMAGE_CAPTION_TEXT:
            return action.imageId;
        case HIDE_IMAGE_CAPTION_TEXT:
            return null;
        default:
            return state;
    }
}