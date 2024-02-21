import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://oqzbsvoiuqdvtusqzwbc.supabase.co";
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xemJzdm9pdXFkdnR1c3F6d2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0NTU1NTUsImV4cCI6MjAyNDAzMTU1NX0.z0ItxgV5S4YxQ-RMk1pXFe44-Ad58vY2M5QEU5zNz9k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
