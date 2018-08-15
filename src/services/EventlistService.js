let _singleton = Symbol();
const EVENTLIST_API_URL = "http://localhost:4200/api/eventlist";

export default class EventlistService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new EventlistService(_singleton);
        return this[_singleton]
    }


    searchForEventlist(search) {
        return fetch(EVENTLIST_API_URL + '/search', {
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

    findEventlistById(eventlistId) {
        return fetch(EVENTLIST_API_URL + '/' + eventlistId)
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
    }
}