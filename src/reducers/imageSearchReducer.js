import {
    CHANGE_SEARCH_FROM_DATE_FIELD,
    CHANGE_SEARCH_TAG_FIELD,
    CHANGE_SEARCH_TO_DATE_FIELD
} from "../constants/actionConstants";


export default function imageSearchReducer(
    state = {
        tagField: '',
        fromDateField: Date.now() - (604800 * 1000), // 1 week from today
        toDateField: Date.now()
    }, action) {
    switch (action.type) {
        case CHANGE_SEARCH_TAG_FIELD:
            return {
                ...state,
                tagField: action.tag
            };
        case CHANGE_SEARCH_FROM_DATE_FIELD:
            return {
                ...state,
                fromDateField: action.fromDate
            };
        case CHANGE_SEARCH_TO_DATE_FIELD:
            return {
                ...state,
                toDateField: action.toDate
            };
        default:
            return state;
    }
}