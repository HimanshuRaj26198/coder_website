"use client";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzX_DE6QDoxmACSO_x6Y7PtfM2IJFNQyY",
    authDomain: "crafter-841dd.firebaseapp.com",
    projectId: "crafter-841dd",
    storageBucket: "crafter-841dd.firebasestorage.app",
    messagingSenderId: "163182758116",
    appId: "1:163182758116:web:a823210bb58ce76148c4f1",
    measurementId: "G-F32V6TT501"
};

// Initialize Firebase
let app;
let fireStore;
let analytics;

if (typeof window !== 'undefined') {
    // Initialize Firebase only if it hasn't been initialized yet
    if (!getApps().length) {
        app = initializeApp(firebaseConfig);
        analytics = getAnalytics(app); // Moved inside the check
    } else {
        app = getApp();
        analytics = getAnalytics(app); // Moved inside the check
    }

    fireStore = getFirestore(app);
}

export { app, fireStore, analytics }; // Export analytics if needed
