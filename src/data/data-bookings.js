import { add } from "date-fns";

function fromToday(numDays, withTime = false) {
    const date = add(new Date(), { days: numDays });
    if (!withTime) date.setUTCHours(0, 0, 0, 0);
    return date.toISOString().slice(0, -1);
}

export const bookings = [
    // BODYPUMP
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        activityId: 1,
        memberId: 2,
    },
    {
        bookedInDateTime: fromToday(1, 18, 30),
        bookingStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 3,
    },
    {
        bookedInDateTime: fromToday(0, 19, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        activityId: 1,
        memberId: 4,
    },

    // RPM
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 2,
        memberId: 5,
    },
    {
        bookedInDateTime: fromToday(5, 8, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 2,
        memberId: 6,
    },
    {
        bookedInDateTime: fromToday(5, 8, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        activityId: 2,
        memberId: 7,
    },

    // BODYCOMBAT
    {
        bookedInDateTime: fromToday(3, 17, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        activityId: 3,
        memberId: 8,
    },
    {
        bookedInDateTime: fromToday(2, 17, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 3,
        memberId: 9,
    },
    {
        bookedInDateTime: fromToday(1, 12, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        activityId: 3,
        memberId: 10,
    },

    //  Yoga
    {
        bookedInDateTime: fromToday(2, 9, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        activityId: 4,
        memberId: 11,
    },
    {
        bookedInDateTime: fromToday(2, 17, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 4,
        memberId: 12,
    },
    {
        bookedInDateTime: fromToday(2, 17, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        activityId: 4,
        memberId: 13,
    },

    // Swimming
    {
        bookedInDateTime: fromToday(1, 8, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 5,
        memberId: 14,
    },
    {
        bookedInDateTime: fromToday(0, 8, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 5,
        memberId: 15,
    },
    {
        bookedInDateTime: fromToday(1, 9, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 5,
        memberId: 16,
    },

    // Pilates
    {
        bookedInDateTime: fromToday(1, 11, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        activityId: 6,
        memberId: 17,
    },
    {
        bookedInDateTime: fromToday(1, 11, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 6,
        memberId: 18,
    },
    {
        bookedInDateTime: fromToday(3, 10, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 6,
        memberId: 19,
    },

    // Tennis
    {
        bookedInDateTime: fromToday(1, 12, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        activityId: 7,
        memberId: 20,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 7,
        memberId: 21,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 7,
        memberId: 22,
    },

    // Zumba
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 8,
        memberId: 3,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 8,
        memberId: 23,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        isGuest: false,
        activityId: 8,
        memberId: 24,
    },
];
