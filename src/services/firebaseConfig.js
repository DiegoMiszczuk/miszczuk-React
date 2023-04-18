import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBC4CQ8vDqZEjiwqlD4z5fRtakYzBLGcSU",
  authDomain: "miszczuk-ecommerce-react.firebaseapp.com",
  projectId: "miszczuk-ecommerce-react",
  storageBucket: "miszczuk-ecommerce-react.appspot.com",
  messagingSenderId: "205208900480",
  appId: "1:205208900480:web:4905eee7865bd6f801a765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)