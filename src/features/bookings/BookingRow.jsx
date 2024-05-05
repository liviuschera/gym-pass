import styled from "styled-components";

import { TableRow } from "../../ui/Table";

import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import { format, isToday } from "date-fns";
import DisplayStatus from "./DisplayStatus";
import {
    HiArrowUpOnSquare,
    HiOutlineInformationCircle,
    HiOutlineTrash,
} from "react-icons/hi2";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import Tooltip from "../../ui/Tooltip";
import { Stacked } from "../../ui/Stacked";
import Row from "../../ui/Row";
import DeleteBooking from "./DeleteBooking";

const Activity = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    /* font-family: "Iosevka", monospace; */
`;

function BookingRow({
    booking: {
        id: bookingId,
        isGuest,
        isPaid,
        bookedInDateTime,
        bookingStatus,
        members: { firstName, lastName, noShows, email },
        activities: { name: activityName, maxCapacity, regularPrice, discount },
    },
}) {
    const navigate = useNavigate();

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
            <Row>
                <Tooltip text={`Delete booking #${bookingId}`}>
                    <DeleteBooking bookingId={bookingId} size="small" />
                </Tooltip>
                <Tooltip text={`Details for booking #${bookingId}`}>
                    <Button
                        size="small"
                        variation="secondary"
                        onClick={() => navigate(`/bookings/${bookingId}`)}
                    >
                        <HiOutlineInformationCircle />
                    </Button>
                </Tooltip>
                {bookingStatus === "unconfirmed" && (
                    <Tooltip text={`Check in for booking #${bookingId}`}>
                        <Button
                            size="small"
                            variation="secondary"
                            onClick={() => navigate(`/checkin/${bookingId}`)}
                        >
                            <HiArrowUpOnSquare />
                        </Button>
                    </Tooltip>
                )}
            </Row>
        </TableRow>
    );
}

export default BookingRow;
