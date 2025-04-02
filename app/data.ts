export type MockMessage = {
    id: string
    sender: string
    text: string
    date: string
    time: string
    reactions: {
        like?: string[]
        love?: string[]
        dislike?: string[]
        exclamation?: string[]
        question?: string[]
    }
    isRead?: boolean
    attachments: { type: string; url: string }[]
    newlySent?: boolean
}

export const MOCK_MESSAGES: MockMessage[] = [
    {
        id: '36',
        sender: 'Bob',
        text: 'Hope you get some rest soon! This is a long message that should be wrapped in a new line.',
        date: '2024-07-13',
        time: '10:08 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '35',
        sender: 'Alice',
        text: 'Just yesterday. Still a bit jet-lagged.',
        date: '2024-07-13',
        time: '10:07 AM',
        reactions: {},
        isRead: true,
        attachments: [],
    },
    {
        id: '34',
        sender: 'Bob',
        text: 'When did you get back?',
        date: '2024-07-13',
        time: '10:06 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '33',
        sender: 'Alice',
        text: 'Yes, it was a great trip.',
        date: '2024-07-13',
        time: '10:05 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '32',
        sender: 'Bob',
        text: 'That looks amazing!',
        date: '2024-07-13',
        time: '10:04 AM',
        reactions: {
            like: ['Alice'],
        },
        attachments: [],
    },
    {
        id: '31',
        sender: 'Alice',
        text: 'Here is a picture of the sunset from my vacation!',
        date: '2024-07-13',
        time: '10:03 AM',
        reactions: {
            like: ['Alice'],
        },
        attachments: [],
    },
    {
        id: '29',
        sender: 'Bob',
        text: 'I am good, thanks! How about you?',
        date: '2024-07-13',
        time: '10:01 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '28',
        sender: 'Alice',
        text: 'Hey, how are you?',
        date: '2024-07-13',
        time: '10:00 AM',
        reactions: {
            like: [],
        },
        attachments: [],
    },
    {
        id: '27',
        sender: 'Bob',
        text: 'Hope you get some rest soon!',
        date: '2024-07-12',
        time: '10:08 AM',
        reactions: {
            like: ['Alice'],
        },
        attachments: [],
    },
    {
        id: '26',
        sender: 'Alice',
        text: 'Just yesterday. Still a bit jet-lagged.',
        date: '2024-07-12T10:07:00Z',
        time: '10:07 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '25',
        sender: 'Bob',
        text: 'When did you get back?',
        date: '2024-07-12T10:06:00Z',
        time: '10:06 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '24',
        sender: 'Alice',
        text: 'Yes, it was a great trip.',
        date: '2024-07-12T10:05:00Z',
        time: '10:05 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '23',
        sender: 'Bob',
        text: 'That looks amazing!',
        date: '2024-07-12T10:04:00Z',
        time: '10:04 AM',
        reactions: {
            like: ['Alice'],
        },
        attachments: [],
    },
    {
        id: '22',
        sender: 'Alice',
        text: 'Here is a picture of the sunset from my vacation!',
        date: '2024-07-12T10:03:00Z',
        time: '10:03 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '21',
        sender: 'Alice',
        text: 'Here is a picture of the sunset from my vacation!',
        date: '2024-07-12T10:02:00Z',
        time: '10:02 AM',
        reactions: {
            like: [],
            love: [],
            dislike: [],
            exclamation: [],
            question: [],
        },
        attachments: [],
    },
    {
        id: '20',
        sender: 'Bob',
        text: 'I am good, thanks! How about you?',
        date: '2024-07-12T10:01:00Z',
        time: '10:01 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '19',
        sender: 'Alice',
        text: 'Hey, how are you?',
        date: '2024-07-12T10:00:00Z',
        time: '10:00 AM',
        reactions: {
            like: ['Bob'],
        },
        attachments: [],
    },
    {
        id: '18',
        sender: 'Bob',
        text: 'Hope you get some rest soon!',
        date: '2024-07-11T10:08:00Z',
        time: '10:08 AM',
        reactions: {
            like: ['Alice'],
        },
        attachments: [],
    },
    {
        id: '17',
        sender: 'Alice',
        text: 'Just yesterday. Still a bit jet-lagged.',
        date: '2024-07-11T10:07:00Z',
        time: '10:07 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '16',
        sender: 'Bob',
        text: 'When did you get back?',
        date: '2024-07-11T10:06:00Z',
        time: '10:06 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '15',
        sender: 'Alice',
        text: 'Yes, it was a great trip.',
        date: '2024-07-11T10:05:00Z',
        time: '10:05 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '14',
        sender: 'Bob',
        text: 'That looks amazing!',
        date: '2024-07-11T10:04:00Z',
        time: '10:04 AM',
        reactions: {
            like: ['Alice'],
        },
        attachments: [],
    },
    {
        id: '13',
        sender: 'Alice',
        text: 'Here is a picture of the sunset from my vacation!',
        date: '2024-07-11T10:03:00Z',
        time: '10:03 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '12',
        sender: 'Alice',
        text: 'Here is a picture of the sunset from my vacation!',
        date: '2024-07-11T10:02:00Z',
        time: '10:02 AM',
        reactions: {
            love: [],
        },
        attachments: [],
    },
    {
        id: '11',
        sender: 'Bob',
        text: 'I am good, thanks! How about you?',
        date: '2024-07-11T10:01:00Z',
        time: '10:01 AM',
        reactions: {},
        attachments: [],
    },
    {
        id: '10',
        sender: 'Alice',
        text: 'Hey, how are you?',
        date: '2024-07-11T10:00:00Z',
        time: '10:00 AM',
        reactions: {
            like: ['Bob'],
        },
        attachments: [],
    },
]
