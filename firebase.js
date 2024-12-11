
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9wJuCGSgonYiUznpwqppLGMCCNk4rAbc",
      authDomain: "relationship-status-4158.firebaseapp.com",
      projectId: "relationship-status-4158",
      storageBucket: "relationship-status-4158.firebasestorage.app",
      messagingSenderId: "554240877468",
      appId: "1:554240877468:web:6b31437d27b42c855b5e59",
      measurementId: "G-JCXNV52BRF"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);