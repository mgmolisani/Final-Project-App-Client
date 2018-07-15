import {
    RECEIVE_INSTAGRAM_IMAGES_FOR_USER,
    REQUEST_INSTAGRAM_IMAGES_FOR_USER,
    SHOW_IMAGE_CAPTION_TEXT
} from "../constants/actionConstants";

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