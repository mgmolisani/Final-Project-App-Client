import {HIDE_IMAGE_CAPTION_TEXT, SHOW_IMAGE_CAPTION_TEXT} from "../constants/actionConstants";
import {ADD_SEARCH_TAG, REMOVE_SEARCH_TAG} from "../../constants/actionConstants";

export default function imageTagsFilterReducer(state = [], action) {
    switch (action.type) {
        case ADD_SEARCH_TAG:
            return [...state, action.tag];
        case REMOVE_SEARCH_TAG:
            return state.filter(tag => (tag !== action.tag));
        default:
            return state;
    }
}