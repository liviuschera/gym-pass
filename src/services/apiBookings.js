import supabase from "./supabase";

export async function getBookings() {
    let { data, error } = await supabase
        .from("bookings")
        .select(
            "id, createdAt, bookingStatus, isGuest, bookedInDateTime, activities (name, maxCapacity, regularPrice), members (firstName, lastName, email, noShows)"
        );

    if (error) {
        console.error(error);
        throw new Error("Error fetching bookings");
    }
    return data;
}
