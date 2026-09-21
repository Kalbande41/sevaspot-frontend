// तुमची आधीची Supabase Config अशी असेल:
const SUPABASE_URL = "https://hzbxgnfbsflpqxoqtpkw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6YnhnbmZic2ZscHF4b3F0cGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk4MzIzNjQsImV4cCI6MjEwNTQwODM2NH0.3gXVvXz5xoLSwZn6fAqMh7CEM7aviFRBbjg_2gOKpEY";
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 🟢 याच्या खाली हे Service Logger Helper जोडा:
async function logServicePrint(serviceCategory, serviceDetails = '') {
    try {
        const userId = sessionStorage.getItem('userId');
        if (!userId || !_supabase) return;

        await _supabase.from('service_logs').insert([{
            user_id: userId,
            service_category: serviceCategory,
            service_details: serviceDetails || 'Print Generated'
        }]);
        console.log("✅ सेवा यशस्वीरीत्या नोंदवली गेली:", serviceCategory);
    } catch (e) {
        console.error("लॉग नोंदवताना अडचण:", e);
    }
}
