// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Bu-RpeaOluSeP40KK4FVRHO3tqr3aLY",
  authDomain: "assignment-9-own-project.firebaseapp.com",
  projectId: "assignment-9-own-project",
  storageBucket: "assignment-9-own-project.appspot.com",
  messagingSenderId: "441733967286",
  appId: "1:441733967286:web:a80e940ef871d90d4fa517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;