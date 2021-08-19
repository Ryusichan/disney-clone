import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvK1kCGYITtDg2f9UTwROhcA32RE5mxG4",
  authDomain: "disneyplus-clone-44931.firebaseapp.com",
  projectId: "disneyplus-clone-44931",
  storageBucket: "disneyplus-clone-44931.appspot.com",
  messagingSenderId: "756637105801",
  appId: "1:756637105801:web:331aa014f5371d083c9058",
  measurementId: "G-HPWCBTHWQE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
