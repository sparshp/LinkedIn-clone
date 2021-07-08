import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeUppkgT3bk4cva0jHzEYkZeelQJPAces",
    authDomain: "lpu-linkedin-clone.firebaseapp.com",
    projectId: "lpu-linkedin-clone",
    storageBucket: "lpu-linkedin-clone.appspot.com",
    messagingSenderId: "985185140039",
    appId: "1:985185140039:web:647c77182cb454f41b2062",
    measurementId: "G-D8R26PKH50"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage};
  export default db;