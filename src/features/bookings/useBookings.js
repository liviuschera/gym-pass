import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
    const {
        isPending,
        data: bookings,
        error,
    } = useQuery({
        queryKey: ["bookings"],
        queryFn: getBookings, // async function that returns a promise
    });

    return { isPending, bookings, error };
}
