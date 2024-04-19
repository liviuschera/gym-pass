import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getBookings({ filter, sortBy, page }) {
    let query = supabase
        .from("bookings")
        .select(
            "id, createdAt, bookingStatus, isGuest, isPaid, bookedInDateTime, activities (name, maxCapacity, regularPrice, discount), members (firstName, lastName, email, noShows)",
            {
                count: "exact",
            }
        );

    // FILTER
    if (filter) {
        query = query.eq(filter.field, filter.value);
    }

    // SORT
    if (sortBy) {
        let field;
        if (sortBy.field === "lastName") {
            field = "members(lastName)";
        } else if (sortBy.field === "name" || sortBy.field === "regularPrice") {
            field = `activities(${sortBy.field})`;
        } else {
            field = sortBy.field;
        }

        query = query.order(field, {
            ascending: sortBy.direction === "asc",
        });
    }

    // PAGINATION
    if (page) {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;
        query = query.range(from, to);
    }

    const { data, error, count } = await query;

    if (error) {
        console.error(error);
        throw new Error("Error fetching bookings");
    }
    return { data, count };
}
