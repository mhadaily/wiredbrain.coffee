import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = { username: 'mhadaily' };
    setCurrentUser(user);
    setIsAuthenticated(true);
    setIsAdmin(true); //user && user.role === 'admin'
  }, []);

  return (
    <AuthContext.Provider value={{ isAdmin, isAuthenticated, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
