import supabase from "./supabase";

export async function getBookings({ filter, sortBy }) {
    let query = supabase
        .from("bookings")
        .select(
            "id, createdAt, bookingStatus, isGuest, isPaid, bookedInDateTime, activities (name, maxCapacity, regularPrice, discount), members (firstName, lastName, email, noShows)"
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

    const { data, error } = await query;

    if (error) {
        console.error(error);
        throw new Error("Error fetching bookings");
    }
    return data;
}
