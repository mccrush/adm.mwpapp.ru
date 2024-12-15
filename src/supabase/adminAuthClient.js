import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_projectURL
const roleKey = import.meta.env.VITE_roleKey

const supabase = createClient(supabaseUrl, roleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: true
  }
})


export { supabase }