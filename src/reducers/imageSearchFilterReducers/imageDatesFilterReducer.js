import {HIDE_IMAGE_CAPTION_TEXT, SHOW_IMAGE_CAPTION_TEXT} from "../constants/actionConstants";
import {ADD_SEARCH_TAG, REMOVE_SEARCH_TAG} from "../../constants/actionConstants";
import {CHANGE_SEARCH_DATE_RANGE} from "../../constants/actionConstants";

export default function imageFromDateFilterReducer(
    state = {
        fromDate: Date.now() - (604800 * 1000), // 1 week from today
        toDate: Date.now()
    }, action) {
    switch (action.type) {
        case CHANGE_SEARCH_DATE_RANGE:
            return {
                fromDate: action.fromDate,
                toDate: action.toDate
            };
        default:
            return state;
    }
}