import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUsersDocumentForm,
} from "../utils/firebase/firebase.utils";

// actual value that we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUsersDocumentForm(user);
      }
      setCurrentUser(user);
    });

    return unsuscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
