import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_-0h-hj12kSoy7Sgb-pBQrkzvq36MsEg",
    authDomain: "fir-practice-1-e9777.firebaseapp.com",
    projectId: "fir-practice-1-e9777",
    storageBucket: "fir-practice-1-e9777.appspot.com",
    messagingSenderId: "1007388797894",
    appId: "1:1007388797894:web:1b2d10895c18d8bdbd20c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
