import supabase from "./supabase";

export async function getBookings() {
    let { data, error } = await supabase
        .from("bookings")
        .select(
            "id, createdAt, bookingStatus, isGuest, isPaid, bookedInDateTime, activities (name, maxCapacity, regularPrice, discount), members (firstName, lastName, email, noShows)"
        );

    if (error) {
        console.error(error);
        throw new Error("Error fetching bookings");
    }
    return data;
}
