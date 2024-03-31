import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)

const UseContext = ({ children }) => {

  const [user, setUser] = useState(null)


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  // manage user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log('observing manage user', currentUser);
    });
    return () => {
      unSubscribe()
    }

  }, [])


  const contextInfo = { user, createUser, signInUser, logOut }

  return (
    <div>
      <AuthContext.Provider value={contextInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UseContext;