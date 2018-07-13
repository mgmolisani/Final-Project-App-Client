import {RECEIVE_INSTAGRAM_IMAGES_FOR_USER, REQUEST_INSTAGRAM_IMAGES_FOR_USER} from "../constants/actionConstants";

export default function rootReducer(state = {images: [], isFetching: false}, action) {
    switch (action.type) {
        case RECEIVE_INSTAGRAM_IMAGES_FOR_USER:
            return {
                ...state,
                images: action.images.data.map(image => {
                    return image.images.standard_resolution.url;
                }),
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