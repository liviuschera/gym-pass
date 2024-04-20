import styled from "styled-components";

import { TableRow } from "../../ui/Table";

import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import { format, isToday } from "date-fns";
import DisplayStatus from "./DisplayStatus";
import {
    HiEye,
    HiInformationCircle,
    HiOutlineInformationCircle,
    HiPencil,
} from "react-icons/hi2";
import Button from "../../ui/Button";
import { Navigate, useNavigate } from "react-router-dom";

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
        members: { firstName, lastName, noShows, email },
        activities: { name: activityName, maxCapacity, regularPrice, discount },
    },
}) {
    const navigate = useNavigate();
    // if (!bookingId) return <Spinner />;

    return (
        <TableRow role="row" columns="1fr 3fr 1.5fr 1fr 1fr 0.3fr">
            {/* DISPLAY ACTIVITY DETAILS */}
            <Stacked>
                <Activity>{activityName}</Activity>
                <span>Max capacity: {maxCapacity}</span>
            </Stacked>

            {/* DISPLAY  MEMBER DETAILS */}
            <Stacked>
                <span>
                    {lastName}&#44;&nbsp;{firstName} &nbsp;
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
            {/* DISPLAY BOOKING ID */}
            <Button
                size="small"
                variation="info"
                onClick={() => navigate(`/bookings/${bookingId}`)}
            >
                <HiOutlineInformationCircle
                    size={21}
                    style={{ margin: "0.1rem" }}
                />
            </Button>
        </TableRow>
    );
}

export default BookingRow;
