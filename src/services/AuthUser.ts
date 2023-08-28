import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAlD77kjtOFPZzT_SPtnmICWS0M0B8q2lM",
  authDomain: "mywebauth-20b45.firebaseapp.com",
  projectId: "mywebauth-20b45",
  storageBucket: "mywebauth-20b45.appspot.com",
  messagingSenderId: "573632480123",
  appId: "1:573632480123:web:e372d24477a183fe6ff3de",
  measurementId: "G-1SMFH9HBVX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);