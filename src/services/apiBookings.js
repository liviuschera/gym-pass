import supabase from "./supabase";

export async function getBookings({ filter }) {
    let query = supabase
        .from("bookings")
        .select(
            "id, createdAt, bookingStatus, isGuest, isPaid, bookedInDateTime, activities (name, maxCapacity, regularPrice, discount), members (firstName, lastName, email, noShows)"
        );

    // FILTER
    if (filter !== null) {
        query = query.eq(filter.field, filter.value);
    }

    const { data, error } = await query;

    if (error) {
        console.error(error);
        throw new Error("Error fetching bookings");
    }
    return data;
}
