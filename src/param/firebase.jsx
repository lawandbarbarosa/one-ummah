import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtSvbaqMK-oFIYECXXeO1UYr02FYrCrRc",
  authDomain: "one-ummah-bd991.firebaseapp.com",
  projectId: "one-ummah-bd991",
  storageBucket: "one-ummah-bd991.appspot.com",
  messagingSenderId: "1007793469620",
  appId: "1:1007793469620:web:a3f3abdaf5938ad333ffe1",
  measurementId: "G-JMG387F8RH"
};

let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { auth };
