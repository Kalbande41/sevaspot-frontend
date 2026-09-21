// Supabase Configuration (Frontend sathi Anon Key vaparavi)
const SUPABASE_URL = "https://hzbxgnfbsflpqxoqtpkw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6YnhnbmZic2ZscHF4b3F0cGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk4MzIzNjQsImV4cCI6MjEwNTQwODM2NH0.3gXVvXz5xoLSwZn6fAqMh7CEM7aviFRBbjg_2gOKpEY";

// Render Backend Live URL (Aapan tayar kelela python backend)
const BACKEND_URL = "https://sevaspot-backend.onrender.com";

// Supabase Client Initialization (जर frontend madhe supabase-js vaparat asal tar)
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
