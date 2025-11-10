// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLN0VAdwFhkG7tDnKZezrGYtuuB3eDRVo",
  authDomain: "study-mate-728a9.firebaseapp.com",
  projectId: "study-mate-728a9",
  storageBucket: "study-mate-728a9.firebasestorage.app",
  messagingSenderId: "23465011387",
  appId: "1:23465011387:web:fc0594fca30f273140219e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
