
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Supasbase With Clerk Setup

const supabaseClint = async(SupabaseAccesToken) => {
    const supabase = createClient(supabaseUrl, supabaseKey,{
        global:{
            headers:{
                Authorization: `Bearer ${SupabaseAccesToken}`
            },
        },
    });
    return supabase;

}

export default supabase
        