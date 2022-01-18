import * as firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCux62JDgoXGZ55tWdL-Paj46wkCIBysBc",
    authDomain: "rd-tattoo.firebaseapp.com",
    projectId: "rd-tattoo",
    storageBucket: "rd-tattoo.appspot.com",
    messagingSenderId: "717030431691",
    appId: "1:717030431691:web:ff9e2ae67e5f048e03b44e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()

  export { projectStorage, projectFirestore } 