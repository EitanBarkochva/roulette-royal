# 🎰 רולטה רויאל — Roulette Royal

אפליקציית קזינו רולטה עם **התחברות גוגל**, אווטאר אישי, וארנק ז'יטונים שנשמר **בענן** (Firebase).
נפתחת בכל דפדפן. כל משתמש חדש מקבל **1,000 ז'יטונים** במתנה.

🔗 **קישור חי:** https://eitanbarkochva.github.io/roulette-royal/

---

## 🎮 איך משחקים
- מתחברים עם חשבון גוגל ובוחרים אווטאר.
- בוחרים ערך ז'יטון (1 / 5 / 25 / 100 / 500) ולוחצים על הלוח כדי להמר.
- **כללי קזינו אמיתיים** (רולטה אירופית, אפס יחיד):
  - מספר בודד — **35:1**
  - תריסר / טור — **2:1**
  - אדום/שחור · זוגי/אי-זוגי · 1-18/19-36 — **1:1**
- לוחצים **"סובב!"** — הגלגל מסתובב, הכדור נוחת, והזכיות מחושבות אוטומטית.
- היתרה נשמרת בענן ומסתנכרנת בכל מכשיר שבו מתחברים עם אותו חשבון.

> ⚠️ משחק הדגמה בלבד. אין תשלום אמיתי — ה"רכישה" בחנות וירטואלית והז'יטונים חסרי ערך כספי.

---

## ⚙️ הגדרת Firebase (חד-פעמית)

האפליקציה דורשת פרויקט Firebase חינמי משלך כדי לאפשר התחברות גוגל ושמירה בענן.

### 1. צור פרויקט
היכנס ל-https://console.firebase.google.com → **Add project** → תן שם → צור.

### 2. הפעל התחברות גוגל
**Build → Authentication → Get started → Sign-in method → Google → Enable → Save.**

### 3. צור מסד נתונים
**Build → Firestore Database → Create database → Production mode → בחר אזור → Enable.**

הדבק את הכללים הבאים (Firestore → Rules → Publish) כך שכל משתמש יגיע רק לנתונים שלו:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

### 4. רשום אפליקציית Web והעתק את הקונפיג
**⚙️ Project settings → General → Your apps → אייקון Web `</>`** → תן כינוי → Register app.
העתק את האובייקט `firebaseConfig` שמופיע.

### 5. הדבק בקובץ ההגדרות
פתח את `firebase-config.js`, הדבק את הערכים שלך, ודחוף לגיט:
```bash
git add firebase-config.js && git commit -m "firebase config" && git push
```

### 6. אשר את הדומיין
**Authentication → Settings → Authorized domains → Add domain →** הוסף:
```
eitanbarkochva.github.io
```
(בלי זה חלון ההתחברות של גוגל ייכשל.)

---

## קבצים
- `index.html` — האפליקציה הראשית (התחברות + אווטאר + משחק + ענן)
- `firebase-config.js` — הגדרות Firebase (ממלאים פעם אחת)
- `casino-roulette-3d.html` — שולחן רולטה בתלת-ממד (תצוגה)

> מפתחות ה-Web של Firebase נועדו להיות ציבוריים — האבטחה נאכפת ע"י כללי Firestore
> והדומיינים המורשים, לכן בטוח להעלות אותם לגיט.
