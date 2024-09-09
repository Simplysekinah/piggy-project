
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
//   require('dotenv').config();
//   console.log(process.env.API_KEY)
  const firebaseConfig = {
    apiKey: _API_KEY_,
    authDomain: _AUTH_DOMAIN_,
    databaseURL: _DATABASE_URL_,
    projectId: _PROJECT_ID_,
    storageBucket: _STORAGE_BUCKET_,
    messagingSenderId: _MESSAGINGSENDER_ID_,
    appId: _APP_ID_,
    measurementId: _MEASUREMENT_ID_
  };

  export const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
