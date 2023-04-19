import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAKH9-uXwCuzWE1IaEKdf-KshKUflI_Q8s",
  authDomain: "language-resource.firebaseapp.com",
  projectId: "language-resource",
  storageBucket: "language-resource.appspot.com",
  messagingSenderId: "296745960871",
  appId: "1:296745960871:web:f72ed93b054b434927e282",
  measurementId: "G-69BC408XLB"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const contactMe = doc(db, "comment", "name");

export default async function Server() {

  try {
    const docRef = await addDoc(collection(db, "Contact"), {
      name: "Tokyo",
      comment: "Japan"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}