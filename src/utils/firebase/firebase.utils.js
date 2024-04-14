import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKjyMaCgpr7C3Wl1f6oe3is5nQfNPSmmg",
  authDomain: "bee-clothing-db.firebaseapp.com",
  projectId: "bee-clothing-db",
  storageBucket: "bee-clothing-db.appspot.com",
  messagingSenderId: "858040762659",
  appId: "1:858040762659:web:9de24d310ae68626c24c96",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUsersDocumentForm = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("this is the userDocRef", userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  // check if the user exists in the database
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //create the new user
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  return userDocRef;
};
