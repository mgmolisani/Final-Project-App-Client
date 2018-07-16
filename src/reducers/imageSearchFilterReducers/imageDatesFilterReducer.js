import {
    CHANGE_SEARCH_DATE_RANGE,
    CHANGE_SEARCH_FROM_DATE,
    CHANGE_SEARCH_TO_DATE
} from "../../constants/actionConstants";

/**
 * Initial date range
 * @type {{fromDate: string, toDate: string}}
 */
const initialState = {
    fromDate: '1970-01-01',
    toDate: '2018-07-04'
};

/**
 * Reducer for setting the date filter
 * @param state
 * @param action
 * @returns {{fromDate: string, toDate: string}}
 */
export default function imageFromDateFilterReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH_FROM_DATE:
            return {
                ...state,
                fromDate: action.fromDate
            };
        case CHANGE_SEARCH_TO_DATE:
            return {
                ...state,
                toDate: action.toDate
            };
        default:
            return state;
    }
}