import supabase from "./supabase";

export async function getBookings() {
    let { data, error } = await supabase
        .from("bookings")
        .select(
            "id, createdAt, paymentStatus, status, isGuest,bookedInDateTime, activities (name, bookedInSpots, maxCapacity, regularPrice), members (firstName, lastName, email, noShows)"
        );

    if (error) {
        console.error(error);
        throw new Error("Error fetching bookings");
    }
    return data;
}
