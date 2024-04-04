import supabase from "./supabase";

export async function getBookings() {
    let { data, error } = await supabase.from("bookings").select("*");

    if (error) {
        console.error(error);
        throw new Error("Error fetching bookings");
    }
    return data;
}
