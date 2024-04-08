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
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "checked-in",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },

    // RPM
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "checked-in",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },

    // BODYCOMBAT
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "checked-in",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "checked-in",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },

    //  Yoga
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "checked-in",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "checked-in",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },

    // Swimming
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },

    // Pilates
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "checked-in",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },

    // Tennis
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "checked-in",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },

    // Zumba
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        paymentStatus: "",
        isGuest: false,
        activityId: 1,
        memberId: 1,
    },
];
