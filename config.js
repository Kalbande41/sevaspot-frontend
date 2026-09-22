// ==========================================
// 🚀 SUPABASE CONFIGURATION
// ==========================================
const SUPABASE_URL = "https://hzbxgnfbsflpqxoqtpkw.supabase.co"; // तुमचा खरा URL ठेवा
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6YnhnbmZic2ZscHF4b3F0cGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk4MzIzNjQsImV4cCI6MjEwNTQwODM2NH0.3gXVvXz5xoLSwZn6fAqMh7CEM7aviFRBbjg_2gOKpEY";             // तुमची खरी Key ठेवा
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ==========================================
// 🟢 SERVICE LOGGER HELPER (प्रिंट लॉग्स नोंदवण्यासाठी)
// ==========================================
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
} // 👈 हा कंस इथेच बरोबर बंद झाला!

// ==========================================
// 🚀 QUICKIDPRINT प्लॅन्स कॉन्फिगरेशन
// (भविष्यात किंमत किंवा दिवस बदलायचे असल्यास फक्त येथे बदला!)
// ==========================================
const RECHARGE_PLANS = [
    { 
        id: "1m", 
        name: "१ महिना प्लॅन", 
        amount: 199, 
        days: 30, 
        tag: "", 
        desc: "सर्व प्रिंट आणि घोषणापत्र सेवा",
        popular: false
    },
    { 
        id: "3m", 
        name: "३ महिने प्लॅन", 
        amount: 499, 
        days: 90, 
        tag: "सर्वाधिक लोकप्रिय", 
        desc: "फायदेशीर आणि सोयीस्कर",
        popular: true // 🟢 हा प्लॅन सुरुवातीला सिलेक्ट राहील
    },
    { 
        id: "6m", 
        name: "६ महिने प्लॅन", 
        amount: 699, 
        days: 180, 
        tag: "", 
        desc: "दीर्घकालीन बचत प्लॅन",
        popular: false
    },
    { 
        id: "1y", 
        name: "१ वर्ष प्लॅन", 
        amount: 1199, 
        days: 365, 
        tag: "सर्वोत्कृष्ट बचत", 
        desc: "वर्षभर निश्चिंत वापर",
        popular: false
    }
];

// WhatsApp सपोर्ट नंबर
const SUPPORT_WHATSAPP_NUMBER = "919403901395";
