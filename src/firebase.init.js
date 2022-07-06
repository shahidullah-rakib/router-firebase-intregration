// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAf9G555Uquk5W9e9MtaUOYK6Hwx3beCQw",
    authDomain: "router-firebase-intregra-d50b0.firebaseapp.com",
    projectId: "router-firebase-intregra-d50b0",
    storageBucket: "router-firebase-intregra-d50b0.appspot.com",
    messagingSenderId: "966156447905",
    appId: "1:966156447905:web:caf0ac3459b4cc1c1740e0",
    measurementId: "G-VN49LV7B83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;