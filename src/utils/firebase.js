import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-792ee.firebaseapp.com",
  projectId: "interviewiq-792ee",
  storageBucket: "interviewiq-792ee.firebasestorage.app",
  messagingSenderId: "1044855105618",
  appId: "1:1044855105618:web:50f035a1f7e96e12c7978b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
