import { createContext, useState, useEffect } from 'react';
import { onAuthChange } from '../firebase/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthChange(setCurrentUser, setIsAdmin);
    // const user = { username: 'mhadaily' };
    //setCurrentUser(user);
    //setIsAuthenticated(true);
    //setIsAdmin(false); //user && user.role === 'admin'

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ isAdmin, isAuthenticated: !!currentUser, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
