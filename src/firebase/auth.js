import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyB6HSmf_9vfwTyrlgaPmtJe5td6q3HIY2c",
    authDomain: "boarding-kennels-backend.firebaseapp.com",
    projectId: "boarding-kennels-backend",
    storageBucket: "boarding-kennels-backend.appspot.com",
    messagingSenderId: "331183307166",
    appId: "1:331183307166:web:19b6a66e2360d1a6b77e8f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, signOut };