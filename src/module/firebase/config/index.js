import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyCnkCO-As7DmRhHvpENSzMYxmPJ0RqWJ2s",
  authDomain: "web-course-d7d68.firebaseapp.com",
  projectId: "web-course-d7d68",
  storageBucket: "web-course-d7d68.appspot.com",
  messagingSenderId: "746471223018",
  appId: "1:746471223018:web:417072ef02445f94b13193",
  measurementId: "G-11Q49JGW4D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { app, auth, provider, analytics };