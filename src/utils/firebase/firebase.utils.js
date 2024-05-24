import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

//sign in auth with google providers
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUsersDocumentForm = async (
  userAuth,
  adicionalInformation = {}
) => {
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
        ...adicionalInformation,
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
