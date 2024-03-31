import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)

const UseContext = ({ children }) => {

  const [user, setUser] = useState(null)


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const contextInfo = { user, createUser }

  return (
    <div>
      <AuthContext.Provider value={contextInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UseContext;