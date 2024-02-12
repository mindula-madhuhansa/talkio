import exp from "constants";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAPpIoCUfWZFKCVu7Yh50hltI4rJAhWcLo",
  authDomain: "talkio-faf21.firebaseapp.com",
  projectId: "talkio-faf21",
  storageBucket: "talkio-faf21.appspot.com",
  messagingSenderId: "416064115171",
  appId: "1:416064115171:web:e9e5638824e06705efd0d6",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
