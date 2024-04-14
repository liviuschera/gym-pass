import styled from "styled-components";

import { TableRow } from "../../ui/Table";

import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import { format, isToday } from "date-fns";
import DisplayStatus from "./DisplayStatus";

const Activity = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    /* font-family: "Iosevka", monospace; */
`;

const Stacked = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    & span:first-child {
        font-weight: 500;
    }

    & span:last-child {
        color: var(--color-grey-500);
        font-size: 1.2rem;
    }
`;

function BookingRow({
    booking: {
        id: bookingId,
        createdAt,
        isGuest,
        isPaid,
        bookedInDateTime,
        bookingStatus,
        members: {
            firstName: memberFirstName,
            lastName: memberLastName,
            noShows,
            email,
        },
        activities: { name: activityName, maxCapacity, regularPrice, discount },
    },
}) {
    // if (!bookingId) return <Spinner />;

    return (
        <TableRow role="row" columns="1fr 2fr 1fr 1fr 1fr">
            {/* DISPLAY ACTIVITY DETAILS */}
            <Stacked>
                <Activity>{activityName}</Activity>
                <span>Max capacity: {maxCapacity}</span>
            </Stacked>

            {/* DISPLAY  MEMBER DETAILS */}
            <Stacked>
                <span>
                    {memberFirstName}&nbsp;{memberLastName} &nbsp;
                    {noShows > 0 && (
                        <DisplayStatus status={"noShows"}>
                            {`No shows: ${noShows}`}
                        </DisplayStatus>
                    )}
                </span>
                <span>{email}</span>
            </Stacked>

            {/* DISPLAY BOOKED IN DATE AND TIME */}
            <Stacked>
                <span>
                    {isToday(new Date(bookedInDateTime))
                        ? "Today"
                        : formatDistanceFromNow(bookedInDateTime)}
                </span>
                <span>
                    {format(new Date(bookedInDateTime), "MMM dd yyyy HH:mm")}
                </span>
            </Stacked>

            {/* DISPLAY BOOKING STATUS */}
            <DisplayStatus status={bookingStatus}>
                {bookingStatus.replace("-", " ")}
            </DisplayStatus>

            {/* DISPLAY PAYMENT STATUS */}
            <DisplayStatus status={regularPrice} isPaid={isPaid}>
                {formatCurrency(regularPrice - discount)}
            </DisplayStatus>
        </TableRow>
    );
}

export default BookingRow;
