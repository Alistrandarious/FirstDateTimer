import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzFpJZk2eQlbWM9NIVKWGS187PJnVIHz0",
  authDomain: "music-l-17bc3.firebaseapp.com",
  databaseURL: "https://music-l-17bc3-default-rtdb.firebaseio.com",
  projectId: "music-l-17bc3",
  storageBucket: "music-l-17bc3.appspot.com",
  messagingSenderId: "285754689437",
  appId: "1:285754689437:web:4193c576c7466b9dcf1174",
  measurementId: "G-017CDYDJQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);