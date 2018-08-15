import {LOGIN, LOGOUT} from "../constants/actions";

const initialState = {};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return action.user;
        case LOGOUT:
            return {};
        default:
            return state;
    }
}