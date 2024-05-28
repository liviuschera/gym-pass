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

    return data;
}

export async function getCurrentUser() {
    let { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) {
        console.error(error);
        throw new Error("Error getting user: " + error.message);
    }

    console.log("🚀 ~ getUser ~ data:", data);

    return data?.user;
}
