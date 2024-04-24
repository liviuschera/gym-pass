import styled from "styled-components";
import { format, formatDistance, isToday } from "date-fns";
import {
    HiOutlineChatBubbleBottomCenterText,
    HiOutlineCheckCircle,
    HiOutlineCurrencyDollar,
    HiOutlinePhone,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";
import { PiPersonSimpleRunDuotone } from "react-icons/pi";
import { useBookingsByActivityAndDate } from "./useBookingsByActivityAndDate";
import Spinner from "../../ui/Spinner";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";

const StyledBookingDataBox = styled.section`
    /* Box */
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);

    overflow: hidden;
`;

const Header = styled.header`
    background-color: var(--color-brand-500);
    padding: 2rem 4rem;
    color: #e0e7ff;
    font-size: 1.8rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        height: 3.2rem;
        width: 3.2rem;
    }

    & div:first-child {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        font-weight: 600;
        font-size: 1.8rem;
    }

    & span {
        font-family: "Reddit Mono", monospace;
        font-size: 2rem;
        margin-left: 4px;
    }
`;

const Section = styled.section`
    padding: 3.2rem 4rem 1.2rem;
`;

const Participant = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 1.6rem;
    color: var(--color-grey-500);

    & p:first-of-type {
        font-weight: 500;
        color: var(--color-grey-700);
    }
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 3.2rem;
    border-radius: var(--border-radius-sm);
    margin-top: 2.4rem;

    background-color: ${(props) =>
        props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
    color: ${(props) =>
        props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

    & p:last-child {
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 600;
    }

    svg {
        height: 2.4rem;
        width: 2.4rem;
        color: currentColor !important;
    }
`;

const Footer = styled.footer`
    padding: 1.6rem 4rem;
    font-size: 1.2rem;
    color: var(--color-grey-500);
    text-align: right;
`;

// A purely presentational component
function BookingDataBox({ booking }) {
    const {
        createdAt,
        id,
        activityId,
        bookedInDateTime,
        isGuest,
        isPaid,
        activities: { regularPrice, discount, maxCapacity, name },
        members: {
            firstName,
            lastName,
            email,
            phoneNumber,
            gender,
            dateOfBirth,
        },
        observations,
    } = booking;
    const date = new Date(bookedInDateTime).toISOString();
    const { isPending, count } = useBookingsByActivityAndDate({
        activityId,
        date,
    });
    const isFree = regularPrice === 0;
    if (isPending) return <Spinner />;

    return (
        <StyledBookingDataBox>
            <Header>
                <div>
                    <PiPersonSimpleRunDuotone />

                    <p>
                        {count}/{maxCapacity} participants for{" "}
                        <span>{name}</span>
                    </p>
                </div>

                <p>
                    {format(
                        new Date(bookedInDateTime),
                        "EEE, dd MMM yyyy, H:mm"
                    )}{" "}
                    (
                    {isToday(new Date(bookedInDateTime))
                        ? "Today"
                        : formatDistanceFromNow(bookedInDateTime)}
                    )
                </p>
            </Header>

            <Section>
                <Participant>
                    <p>
                        {firstName}&nbsp;{lastName}
                    </p>
                    <span>&bull;</span>
                    <p>{email}</p>
                    <span>&bull;</span>
                    <p>{phoneNumber}</p>
                    <span>&bull;</span>
                    <p>
                        {format(dateOfBirth, "dd MMM yyyy")}&nbsp;(
                        {formatDistance(dateOfBirth, new Date())
                            .split(" ")
                            .slice(1, 3)
                            .join(" ")}
                        )
                    </p>
                </Participant>

                {observations && (
                    <DataItem
                        icon={<HiOutlineChatBubbleBottomCenterText />}
                        label="Observations"
                    >
                        {observations}
                    </DataItem>
                )}

                <DataItem
                    icon={<HiOutlineCheckCircle />}
                    label="Participant is a:"
                >
                    {isGuest ? "Guest" : "Member"}
                </DataItem>

                <Price isPaid={isFree ? true : isPaid}>
                    <DataItem
                        icon={<HiOutlineCurrencyDollar />}
                        label={`Price: `}
                    >
                        {isFree
                            ? "FREE (included in the membership)"
                            : `${formatCurrency(
                                  regularPrice - discount
                              )} per person`}
                    </DataItem>

                    <p>
                        {!isFree && (isPaid ? "Paid" : "Will pay at reception")}
                    </p>
                </Price>
            </Section>

            <Footer>
                <p>
                    Booked{" "}
                    {format(new Date(createdAt), "EEE, dd MMM yyyy, H:mm")}
                </p>
            </Footer>
        </StyledBookingDataBox>
    );
}

export default BookingDataBox;
