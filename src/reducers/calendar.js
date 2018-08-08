import {RECEIVE_ALL_EVENTS_FOR_USER, REQUEST_ALL_EVENTS_FOR_USER} from "../constants/action-types/calendar";

const initialState = {
    events: [],
    isFetching: false
};

export default function calendarReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_ALL_EVENTS_FOR_USER:
            return {
                events: action.events,
                isFetching: false
            };
        case REQUEST_ALL_EVENTS_FOR_USER:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state;
    }
}