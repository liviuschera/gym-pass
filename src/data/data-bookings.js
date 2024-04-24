import { add, startOfToday } from "date-fns";

/**
 * Generates a string representation of a date that is `days` days from the start of today,
 * `hours` hours from the start of today, and `minutes` minutes from the start of today.
 *
 * @param {number} days - The number of days from the start of today.
 * @param {number} hours - The number of hours from the start of today.
 * @param {number} minutes - The number of minutes from the start of today.
 * @return {string} A string representation of the date in ISO 8601 format.
 */
function fromToday(days, hours, minutes) {
    const date = add(startOfToday(), { days, hours, minutes });
    return date.toISOString();
}

export const bookings = [
    // BODYPUMP
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        isPaid: true,
        activityId: 1,
        memberId: 2,
        observations: "Hurt the left knee. Under recovery.",
    },
    {
        bookedInDateTime: fromToday(1, 18, 30),
        bookingStatus: "",
        isGuest: false,
        isPaid: true,
        activityId: 1,
        memberId: 3,
        observations: "",
    },
    {
        bookedInDateTime: fromToday(0, 19, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        isPaid: true,
        activityId: 1,
        memberId: 4,
        observations: "",
    },

    // RPM
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: true,
        activityId: 2,
        memberId: 5,
        observations: "",
    },
    {
        bookedInDateTime: fromToday(5, 8, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: true,
        activityId: 2,
        memberId: 6,
        observations: "",
    },
    {
        bookedInDateTime: fromToday(5, 8, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        isPaid: true,
        activityId: 2,
        memberId: 7,
        observations: "",
    },

    // BODYCOMBAT
    {
        bookedInDateTime: fromToday(3, 17, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        isPaid: true,
        activityId: 3,
        memberId: 8,
        observations: "Recovering from an injury. Needs to be toned down.",
    },
    {
        bookedInDateTime: fromToday(2, 17, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: true,
        activityId: 3,
        memberId: 9,
        observations: "",
    },
    {
        bookedInDateTime: fromToday(1, 12, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        isPaid: true,
        activityId: 3,
        memberId: 10,
        observations: "",
    },

    //  Yoga
    {
        bookedInDateTime: fromToday(2, 9, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        isPaid: false,
        activityId: 4,
        memberId: 11,
        observations: "Will bring their own mat.",
    },
    {
        bookedInDateTime: fromToday(2, 17, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: false,
        activityId: 4,
        memberId: 12,
        observations: "",
    },
    {
        bookedInDateTime: fromToday(2, 17, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        isPaid: false,
        activityId: 4,
        memberId: 13,
        observations: "",
    },

    // Swimming
    {
        bookedInDateTime: fromToday(1, 8, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: false,
        activityId: 5,
        memberId: 14,
        observations: "Requested an instructor for private class.",
    },
    {
        bookedInDateTime: fromToday(0, 8, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: false,
        activityId: 5,
        memberId: 15,
        observations: "",
    },
    {
        bookedInDateTime: fromToday(1, 9, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: false,
        activityId: 5,
        memberId: 16,
        observations: "",
    },

    // Pilates
    {
        bookedInDateTime: fromToday(1, 11, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        isPaid: false,
        activityId: 6,
        memberId: 17,
        observations: "",
    },
    {
        bookedInDateTime: fromToday(1, 11, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: false,
        activityId: 6,
        memberId: 18,
        observations: "",
    },
    {
        bookedInDateTime: fromToday(3, 10, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: false,
        activityId: 6,
        memberId: 19,
        observations: "",
    },

    // Tennis
    {
        bookedInDateTime: fromToday(1, 12, 0),
        bookingStatus: "checked-in",
        isGuest: false,
        isPaid: false,
        activityId: 7,
        memberId: 20,
        observations: "Will bring their own racket.",
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: false,
        activityId: 7,
        memberId: 21,
        observations: "",
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: false,
        activityId: 7,
        memberId: 22,
        observations: "",
    },

    // Zumba
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: false,
        activityId: 8,
        memberId: 3,
        observations: "",
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: false,
        activityId: 8,
        memberId: 23,
        observations: "",
    },
    {
        bookedInDateTime: fromToday(2, 12, 0),
        bookingStatus: "",
        isGuest: false,
        isPaid: false,
        activityId: 8,
        memberId: 24,
        observations: "",
    },
];
