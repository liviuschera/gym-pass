import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

// NOTE: implement API-side of filtering to improve performance, to reduce the data transfer over the network as bookings table will keep growing
export function useBookings() {
    const [searchParams] = useSearchParams();
    // console.log(searchParams);

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

    const sortValue = searchParams.get("sortBy") || "name-asc";
    const [field, direction] = sortValue.split("-");
    const sortBy = !sortValue ? null : { field, direction };

    // //////////////////////////////////////////
    // PAGINATION
    // ////////////////////////////////////////

    const page = Number(searchParams.get("page")) || 1;

    const {
        isPending,
        data: { data: bookings, count }, // initially data is undefined so we will use placeholderData to avoid error in console log

        // data: { data: bookings, count } ={},  // initially data is undefined so we need to set it to an empty object to avoid error in console log when data is null or undefined (see https://react-query.tanstack.com/guides/queries)
        error,
    } = useQuery({
        queryKey: ["bookings", filter, sortBy, page],
        queryFn: () => getBookings({ filter, sortBy, page }), // async function that returns a promise
        placeholderData: { data: [], count: 0 },
    });

    return { isPending, error, bookings, count };
}
