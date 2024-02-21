import supabase from "./supabase";

export async function getActivities() {
    let { data, error } = await supabase.from("activities").select("*");

    if (error) {
        console.error(error);
        throw new Error("Error fetching activities:");
    }

    return data;
}
