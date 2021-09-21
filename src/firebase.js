import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVMvS_lsOz8SXlY8SN-MLJR50GCrlDKGE",
  authDomain: "restaurant-888aa.firebaseapp.com",
  projectId: "restaurant-888aa",
  storageBucket: "restaurant-888aa.appspot.com",
  messagingSenderId: "305253906002",
  appId: "1:305253906002:web:5c6258d3b35f77b828d18b",
  measurementId: "G-FEGVE72V63",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
