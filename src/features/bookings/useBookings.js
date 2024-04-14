import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

// implement API-side of filtering
export function useBookings() {
    const [searchParams] = useSearchParams();

    // FILTER
    const filterValue = searchParams.get("status");
    // console.log(filterValue);
    let filter;
    if (!filterValue || filterValue === "all") {
        filter = null;
    } else if (filterValue === "paid" || filterValue === "unpaid") {
        filter = {
            field: "isPaid",
            value: filterValue === "paid" ? true : false,
        };
    } else {
        filter = { field: "bookingStatus", value: filterValue };
    }

    const {
        isPending,
        data: bookings,
        error,
    } = useQuery({
        queryKey: ["bookings", filter],
        queryFn: () => getBookings({ filter }), // async function that returns a promise
    });

    return { isPending, bookings, error };
}
