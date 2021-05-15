import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKhAw492mW9tXvOG1GdmN1BKZGDOTskh0",
  authDomain: "sql-demo-fh.firebaseapp.com",
  projectId: "sql-demo-fh",
  storageBucket: "sql-demo-fh.appspot.com",
  messagingSenderId: "447589146521",
  appId: "1:447589146521:web:65e1a79d2147c992923d08",
  measurementId: "G-HK6NR89WY3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();