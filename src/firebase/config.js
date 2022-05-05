import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCmh8wTLmiQkOKWfqi-zfqHihmNynYptpI",
  authDomain: "todo-f1720.firebaseapp.com",
  projectId: "todo-f1720",
  storageBucket: "todo-f1720.appspot.com",
  messagingSenderId: "33978552445",
  appId: "1:33978552445:web:99cb9d9485d8e5db5d2114"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}