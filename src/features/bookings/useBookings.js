import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

// NOTE: implement API-side of filtering to improve performance, to reduce the data transfer over the network as bookings table will keep growing
export function useBookings() {
    const [searchParams] = useSearchParams();
    console.log(searchParams);

    // //////////////////////////////////////////
    // FILTER
    // //////////////////////////////////////////

    const filterValue = searchParams.get("status");
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

    // //////////////////////////////////////////
    // SORT
    // ////////////////////////////////////////

    const sortValue = searchParams.get("sortBy") || "lastName-asc";
    const [field, direction] = sortValue.split("-");
    const sortBy = !sortValue ? null : { field, direction };

    const {
        isPending,
        data: bookings,
        error,
    } = useQuery({
        queryKey: ["bookings", filter, sortBy],
        queryFn: () => getBookings({ filter, sortBy }), // async function that returns a promise
    });

    return { isPending, bookings, error };
}
