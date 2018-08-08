import {RECEIVE_ALL_EVENTS_FOR_USER, REQUEST_ALL_EVENTS_FOR_USER} from "../constants/action-types/calendar";

export function fetchAllEventsForUser() {
    return function (dispatch) {
        dispatch(requestAllEventsForUser());
        const events = [
            {
                name: 'Birthday',
                description: 'It\'s Mike\'s birthday!',
                activities: [
                    {
                        name: 'Play',
                        description: 'Let\'s play!',
                        start: [2018, 7, 12, 15, 25],
                        end: [2018, 7, 12, 17, 25]
                    },
                    {
                        name: 'Cake',
                        description: 'Let\'s eat!',
                        start: [2018, 7, 12, 17, 25],
                        end: [2018, 7, 12, 19, 25]
                    },
                    {
                        name: 'Party',
                        description: 'Let\'s party!',
                        start: [2018, 7, 12, 19, 25],
                        end: [2018, 7, 12, 21, 25]
                    }
                ]
            },
            {
                name: 'Birthday2',
                description: 'It\'s Mike\'s birthday!',
                activities: [
                    {
                        name: 'Play2',
                        description: 'Let\'s play!',
                        start: [2018, 7, 12, 15, 27],
                        end: [2018, 7, 12, 17, 25]
                    },
                    {
                        name: 'Cake2',
                        description: 'Let\'s eat!',
                        start: [2018, 7, 12, 17, 27],
                        end: [2018, 7, 12, 19, 25]
                    },
                    {
                        name: 'Party2',
                        description: 'Let\'s party!',
                        start: [2018, 7, 12, 19, 27],
                        end: [2018, 7, 12, 21, 25]
                    }
                ]
            }
        ];
        return dispatch(receiveAllEventsForUser(events));
    };
}

export function receiveAllEventsForUser(events) {
    return {
        type: RECEIVE_ALL_EVENTS_FOR_USER,
        events
    }
}

export function requestAllEventsForUser() {
    return {
        type: REQUEST_ALL_EVENTS_FOR_USER
    }
}