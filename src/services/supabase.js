import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://racotqpiuqxgevfwbkdd.supabase.co";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, SUPABASE_KEY);

export default supabase;
