import {LOGIN, LOGOUT} from "../constants/actions";
import UserService from "../services/UserServices";

const userService = UserService.instance;

export const updateCurrentUser = user => {
    return dispatch => {
        return userService
            .login(user)
            .then(user =>
                dispatch(loginSuccess(user))
            );
    };
};

export const currentUserUpdated = user => ({
    type: LOGIN,
    user
});

