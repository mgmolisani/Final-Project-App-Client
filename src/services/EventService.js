let _singleton = Symbol();
const EVENT_API_URL = "http://localhost:4200/api/event";

export default class EventService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new EventService(_singleton);
        return this[_singleton]
    }

    findEventById(eventId) {
        return fetch(EVENT_API_URL + '/' + eventId)
            .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                }
            );
    }

    findAllCommentsForEvent(eventId) {
        return fetch(EVENT_API_URL + '/' + eventId + '/comments')
            .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                }
            );
    }

    searchForEvent(search) {
        return fetch(EVENT_API_URL + '/search', {
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

    findAllEvents() {
        return fetch(EVENT_API_URL)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            })
    }

    createEvent(event) {
        return fetch(EVENT_API_URL, {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
    }

    deleteEvent(eventId) {
        return fetch(EVENT_API_URL + '/' + eventId, {
            method: 'DELETE'
        })
    }

    findHostForEvent(eventId) {
        return fetch(EVENT_API_URL + '/' + eventId + '/host')
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            })
    }

    findInvitedToEvent(eventId) {
        fetch(EVENT_API_URL + '/' + eventId + '/invited')
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            })
    }

    findFollowingEvent(eventId) {
        fetch(EVENT_API_URL + '/' + eventId + '/invited')
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            })
    }

    updateEvent(eventId, event) {
        return fetch(EVENT_API_URL + '/' + eventId, {
            method: 'PUT',
            body: JSON.stringify(event),
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
}