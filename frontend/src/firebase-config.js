import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAV5acrcIdkMMwJD80YyRJbkjT0yiyWVRI",
  authDomain: "blogs-dbc0e.firebaseapp.com",
  projectId: "blogs-dbc0e",
  storageBucket: "blogs-dbc0e.appspot.com",
  messagingSenderId: "406780233024",
  appId: "1:406780233024:web:03f6df8e51d6c18293e6a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const imgDB = getStorage(app);
