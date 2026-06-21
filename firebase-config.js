// ════════════════════════════════════════════════════════════════
//  הגדרות Firebase — מלא כאן את הערכים מהפרויקט שלך
// ════════════════════════════════════════════════════════════════
//  איך משיגים את הערכים:
//   1. נכנסים ל-https://console.firebase.google.com ויוצרים פרויקט.
//   2. Build → Authentication → Get started → מפעילים את Google.
//   3. Build → Firestore Database → Create database (Production mode).
//   4. ⚙️ Project settings → "Your apps" → אייקון Web (</>) → רושמים אפליקציה.
//   5. מעתיקים את ה-firebaseConfig שמופיע — ומדביקים כאן במקום הערכים.
//   6. Authentication → Settings → Authorized domains → Add domain →
//        מוסיפים:  eitanbarkochva.github.io
//
//  הערה: מפתחות ה-Web של Firebase נועדו להיות ציבוריים — האבטחה נאכפת
//  ע"י כללי Firestore והדומיינים המורשים, לכן בטוח להעלות אותם לגיט.
// ════════════════════════════════════════════════════════════════

export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
