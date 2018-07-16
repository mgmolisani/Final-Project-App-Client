import {CHANGE_SEARCH_DATE_RANGE} from "../../constants/actionConstants";

const initialState = {
    fromDate: '1970-01-01',
    toDate: '2018-07-04'
};

export default function imageFromDateFilterReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH_DATE_RANGE:
            return {
                fromDate: Number.parseInt(action.fromDate.replace('-', ''), 10) < Number.parseInt(state.toDate.replace('-', ''), 10) ?
                    action.fromDate : initialState.fromDate,
                toDate: Number.parseInt(action.toDate.replace('-', ''), 10) > Number.parseInt(state.fromDate.replace('-', ''), 10) ?
                    action.toDate : initialState.toDate
            };
        default:
            return state;
    }
}