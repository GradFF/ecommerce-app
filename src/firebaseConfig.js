import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /urls/{id} {
//         allow read: if true;
//         allow update, delete: if request.auth != null && request.auth.uid == resource.data.user;
//         allow create: if request.auth != null;
//     }
//     match /users/{id} {
//         allow read, update, delete: if request.auth != null && request.auth.uid == id;
//         allow create: if request.auth != null;
//     }
//   }
// }
