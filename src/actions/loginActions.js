import {LOGIN, LOGOUT} from "../constants/actions";
import UserService from "../services/UserServices";

const userService = UserService.instance;

export const login = user => {
    return dispatch => {
        return userService
            .login(user)
            .then(user =>
                dispatch(loginSuccess(user))
            );
    };
};

export const loginSuccess = user => ({
    type: LOGIN,
    user
});

export const logout = () => ({
    type: LOGOUT
});
