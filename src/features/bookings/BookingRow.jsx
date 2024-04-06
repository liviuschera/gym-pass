import styled from "styled-components";

import Tag from "../../ui/Tag";
import { TableRow } from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import Spinner from "../../ui/Spinner";

const Activity = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    font-family: "Iosevka", monospace;
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

const Amount = styled.div`
    font-family: "Iosevka", monospace;
    font-weight: 500;
`;

function BookingRow({
    booking: {
        id: bookingId,
        createdAt,
        paymentStatus,
        isGuest,
        bookedInDateTime,
        status,
        members: {
            firstName: memberFirstName,
            lastName: memberLastName,
            noShows,
            email,
        },
        activities: {
            name: activityName,
            bookedInSpots,
            maxCapacity,
            regularPrice,
        },
    },
}) {
    const statusToTagName = {
        unconfirmed: "blue",
        "checked-in": "green",
        paid: "green",
        unpaid: "red",
        guest: "silver",
        yellow: "yellow",
    };
    // console.log(firstName);
    // if (!bookingId) return <Spinner />;
    return (
        <TableRow role="row" columns="1fr 2fr 1fr 1fr 1fr">
            <Stacked>
                <Activity>{activityName}</Activity>
                <span>
                    {bookedInSpots} / {maxCapacity}
                </span>
            </Stacked>

            <Stacked>
                <span>
                    {memberFirstName}&nbsp;{memberLastName} &nbsp;
                    {noShows > 0 && (
                        <Tag type={statusToTagName["yellow"]}>
                            {`No shows: ${noShows}`}
                        </Tag>
                    )}
                </span>
                <span>{email}</span>
            </Stacked>
            <span>{bookedInDateTime}</span>
            <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

            <Amount>{formatCurrency(regularPrice)}</Amount>
        </TableRow>
    );
}

export default BookingRow;
