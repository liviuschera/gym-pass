import { useQuery } from "@tanstack/react-query";
import { getBookingsByActivityAndDate } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBookingsByActivityAndDate(bookingId) {
    const {
        isPending,
        data: { data: bookings, count },
        error,
    } = useQuery({
        queryKey: ["bookings", bookingId], // add the bookingId to the query key array to trigger the query
        queryFn: () => getBookingsByActivityAndDate(bookingId), // async function that returns a promise
        placeholderData: { data: [], count: 0 }, // initially data is undefined so we will use placeholderData to avoid error in console log
    });

    return { isPending, bookings, error, count };
}
