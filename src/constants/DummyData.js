export const activitiesForEvent1 = [
    {
        id: 1,
        name: 'Play',
        description: 'Let\'s play!',
        start: [2018, 7, 12, 15, 25],
        end: [2018, 7, 12, 17, 25]
    },
    {
        id: 2,
        name: 'Cake',
        description: 'Let\'s eat!',
        start: [2018, 7, 12, 17, 25],
        end: [2018, 7, 12, 19, 25]
    },
    {
        id: 3,
        name: 'Party',
        description: 'Let\'s party!',
        start: [2018, 7, 12, 19, 25],
        end: [2018, 7, 12, 21, 25]
    }
];

export const comments = [
    {
        id: 1,
        postedBy: 1,
        content: 'Let\'s play!',
        date: [2018, 7, 12, 15, 25]
    },
    {
        id: 2,
        postedBy: 2,
        content: 'Let\'s eat!',
        date: [2018, 7, 12, 19, 25]
    },
    {
        id: 3,
        postedBy: 1,
        content: 'Let\'s party!',
        date: [2018, 7, 12, 17, 25]
    }
];

export const events = [
    {
        id: 1,
        name: 'Birthday',
        description: 'It\'s Mike\'s birthday!',
        hosts: [1],
        location: '72',
        activities: activitiesForEvent1,
        images: [
            'https://picsum.photos/200/300'
        ],
        comments: comments
    },
    {
        id: 2,
        name: 'Birthday2',
        description: 'It\'s Mike\'s birthday!',
        host: [2],
        activities: [],
        location: '76',
        images: [
            'https://picsum.photos/200/300'
        ],
        comments: []
    }
];

export const users = [
        {
            id: 1,
            username: 'MikeMo',
            firstName: 'Mike',
            lastName: 'Molisani',
            role: 'Private',
            address: '72 All',
            phoneNumber: '1234567890',
            dateOfBirth: [1994, 6, 30],
            email: 'mgmolisani@gmail.com',
            connections: {
                followers: [1, 1, 1, 1, 1, 1, 1],
                following: [1, 1, 1, 1, 1]
            },
            createdEventsEventlistId: 1,
            followedEventsEventlistId: 2,
            eventlists: {
                owns: [1, 2, 3, 4],
                follows: [5, 6, 7]
            },
            avatar: 'https://picsum.photos/200/300'
        },
    {
        id: 2,
        username: 'Joe',
        firstName: 'joeb',
        lastName: 'me',
        role: 'Private',
        address: '72 All',
        phoneNumber: '234567890',
        dateOfBirth: [1994, 6, 30],
        email: 'mgmolisani@gmail.com',
        connections: {
            followers: [1, 1, 1, 1, 1, 1, 1],
            following: [1, 1, 1, 1, 1]
        },
        createdEventsEventlistId: 1,
        followedEventsEventlistId: 2,
        eventlists: {
            owns: [1, 2, 3, 4],
            follows: [5, 6, 7]
        },
        avatar: 'https://picsum.photos/200/300'
    }
    ]
;

export const eventlists = [
    {
        id: 1,
        name: 'Test1',
        events: [1],
        followers: [1, 2]
    },
    {
        id: 2,
        name: 'Test2',
        events: [1],
        followers: [1, 2]
    },
    {
        id: 3,
        name: 'Test3',
        events: [1],
        followers: [1, 2]
    },
    {
        id: 4,
        name: 'Test4',
        events: [1],
        followers: [1, 2]
    },
    {
        id: 5,
        name: 'Test5',
        events: [1],
        followers: [1, 2]
    },
    {
        id: 6,
        name: 'Test6',
        events: [1],
        followers: [1, 2]
    },
    {
        id: 7,
        name: 'Test7',
        events: [1],
        followers: [1, 2]
    },
    {
        id: 8,
        name: 'Test8',
        events: [1],
        followers: [1, 2]
    }
];
