import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA-48O74RBkwapOXvenQbWPTY1xlgJCyuM",
    authDomain: "chat-app-4dbf8.firebaseapp.com",
    projectId: "chat-app-4dbf8",
    storageBucket: "chat-app-4dbf8.appspot.com",
    messagingSenderId: "187917859566",
    appId: "1:187917859566:web:73c867dd219462055911ff"
  }).auth();