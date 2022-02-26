import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWsgsH22Z4UZnNgtLX6CSIVxm6GQZZpKY",
  authDomain: "live-chatroom-277eb.firebaseapp.com",
  projectId: "live-chatroom-277eb",
  storageBucket: "live-chatroom-277eb.appspot.com",
  messagingSenderId: "1003605966820",
  appId: "1:1003605966820:web:25ccc5b60f89a742d651f1",
  measurementId: "G-2EH4MCB0ME",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
