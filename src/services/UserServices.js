let _singleton = Symbol();
const USER_API_URL = "http://localhost:4200/api/user";
const REGISTER_API_URL = "http://localhost:4200/api/user";
const LOGIN_API_URL = "http://localhost:4200/api/login";
const LOGOUT_API_URL = "http://localhost:4200/api/logout";
const PROFILE_API_URL = "http://localhost:4200/api/profile";

export default class UserService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new UserService(_singleton);
        return this[_singleton]
    }

    register(user) {
        return fetch(REGISTER_API_URL, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        });
    }

    login(credentials) {
        return fetch(LOGIN_API_URL, {
            method: 'POST',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
    }

    logout() {
        return fetch(LOGOUT_API_URL, {
            method: 'POST',
            credentials: 'include'
        });
    }

    getProfile() {
        return fetch(PROFILE_API_URL, {
            credentials: 'include'
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        });
    }

    findUserById(userId) {
        return fetch(USER_API_URL + '/' + userId)
            .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                }
            );
    }

    findFollowersForUser(userId) {
        return fetch(USER_API_URL + '/' + userId + '/followers')
            .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                }
            );
    }

    findFollowingForUser(userId) {
        return fetch(USER_API_URL + '/' + userId + '/following')
            .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                }
            );
    }


    findAllCommentsForUser(userId) {
        return fetch(USER_API_URL + '/' + userId + '/comments')
            .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                }
            );
    }

    findAllEventsForUser(userId) {
        return fetch(USER_API_URL + '/' + userId + '/events/all')
            .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                }
            );
    }

    findFollowedEventsForUser(userId) {
        return fetch(USER_API_URL + '/' + userId + '/events/following')
            .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                }
            );
    }

    updateUser(userId, user) {
        return fetch(USER_API_URL + '/' + userId, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            }
        );
    }

    searchForUsers(search) {
        return fetch(USER_API_URL + '/search', {
            method: 'POST',
            body: JSON.stringify(search),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
    }

    followUser(followerId, followeeId) {
        return fetch(USER_API_URL + '/' + followerId + '/follow/user/' + followeeId, {
            method: 'PUT',
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
    }

    unfollowUser(followerId, followeeId) {
        return fetch(USER_API_URL + '/' + followerId + '/unfollow/user/' + followeeId, {
            method: 'PUT',
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
    }
}