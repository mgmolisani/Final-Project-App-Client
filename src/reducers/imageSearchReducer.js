import {
    CHANGE_SEARCH_FROM_DATE_FIELD,
    CHANGE_SEARCH_TAG_FIELD,
    CHANGE_SEARCH_TO_DATE_FIELD
} from "../constants/actionConstants";

/**
 * Reducer for setting form field strings
 * @param state
 * @param action
 * @returns {{tagField: string, fromDateField: string, toDateField: string}}
 */
export default function imageSearchReducer(
    state = {
        tagField: '',
        fromDateField: '',
        toDateField: ''
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