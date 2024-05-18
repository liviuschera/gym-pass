import supabase from "./supabase";

export async function login({ email, password }) {
    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error(error);
        throw new Error("Error signing in: " + error.message);
    }

    console.log("🚀 ~ login ~ data:", data);
    return data;
}
