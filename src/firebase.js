
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCigW48K_ysLA6oMXDT7raRzIuBsL8pcTM",
    authDomain: "new-test-6dfe5.firebaseapp.com",
    projectId: "new-test-6dfe5",
    storageBucket: "new-test-6dfe5.firebasestorage.app",
    messagingSenderId: "1092915555869",
    appId: "1:1092915555869:web:f800de1c0c8715daaa60f4",
    measurementId: "G-5YLSR90107"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Auth initialization

export { auth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider };
