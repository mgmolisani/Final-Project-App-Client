export const comments = [
    {
        id: 1,
        postedBy: 1,
        forEvent: 1,
        content: 'Let\'s play some shit!',
        date: [2018, 7, 12, 15, 25]
    },
    {
        id: 2,
        postedBy: 2,
        forEvent: 1,
        content: 'Let\'s eat some shit!',
        date: [2018, 7, 12, 19, 25]
    },
    {
        id: 3,
        postedBy: 1,
        forEvent: 1,
        content: 'Let\'s party some shit!',
        date: [2018, 7, 12, 17, 25]
    }
];

export const events = [
    {
        id: 1,
        name: 'Birthday',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem augue, rhoncus tincidunt vestibulum non, accumsan et nulla. Donec vel nibh in orci blandit efficitur quis vel purus. Maecenas varius velit leo, quis mattis velit placerat at. Suspendisse a sapien quam. In eget commodo dolor, sit amet dignissim lorem. Curabitur et laoreet magna. Proin malesuada tincidunt tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec nulla metus, viverra nec porta vitae, bibendum sit amet leo.\n' +
        '\n' +
        'Maecenas tempor euismod posuere. Nam nec feugiat nibh, non ultricies lorem. Aliquam at tellus ut turpis rutrum faucibus vel eget diam. Nunc quis sodales felis, id suscipit orci. Curabitur eu gravida metus, non tincidunt tortor. Quisque suscipit nisl diam, id interdum sem lacinia id. Sed et tempus dolor. Integer blandit maximus semper. Pellentesque ut volutpat tortor. In lacinia iaculis nunc, vitae fringilla nibh egestas egestas. Curabitur luctus a quam vitae porttitor. Mauris eget bibendum enim, nec ornare enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        host: 1,
        private: false,
        invited: [],
        followedBy: [],
        address: '72',
        images: [
            'https://picsum.photos/200/300'
        ],
        comments: [1, 2, 3],
        start: [2018, 7, 12, 19, 25],
        end: [2018, 7, 12, 21, 25]
    },
    {
        id: 2,
        name: 'B0rthday',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem augue, rhoncus tincidunt vestibulum non, accumsan et nulla. Donec vel nibh in orci blandit efficitur quis vel purus. Maecenas varius velit leo, quis mattis velit placerat at. Suspendisse a sapien quam. In eget commodo dolor, sit amet dignissim lorem. Curabitur et laoreet magna. Proin malesuada tincidunt tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec nulla metus, viverra nec porta vitae, bibendum sit amet leo.\n' +
        '\n' +
        'Maecenas tempor euismod posuere. Nam nec feugiat nibh, non ultricies lorem. Aliquam at tellus ut turpis rutrum faucibus vel eget diam. Nunc quis sodales felis, id suscipit orci. Curabitur eu gravida metus, non tincidunt tortor. Quisque suscipit nisl diam, id interdum sem lacinia id. Sed et tempus dolor. Integer blandit maximus semper. Pellentesque ut volutpat tortor. In lacinia iaculis nunc, vitae fringilla nibh egestas egestas. Curabitur luctus a quam vitae porttitor. Mauris eget bibendum enim, nec ornare enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        host: 2,
        private: true,
        invited: [],
        followedBy: [],
        address: '72',
        images: [
            'https://picsum.photos/200/300'
        ],
        comments: [],
        start: [2018, 7, 12, 19, 25],
        end: [2018, 7, 12, 21, 25]
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
            avatar: 'https://picsum.photos/200/300',
            comments: [1, 2, 3],
            invites: [1, 2]
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
            invitedToEventListId: 3,
            eventlists: {
                owns: [1, 2, 3, 4],
                follows: [5, 6, 7]
            },
            avatar: 'https://picsum.photos/200/300',
            invites: [1]
        }
    ]
;

export const eventlists = [
    {
        id: 1,
        name: 'Mike\'s Events',
        events: [1],
        owner: 1,
        followers: [1, 2]
    },
    {
        id: 2,
        name: 'Event\'s Mike Follows',
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
