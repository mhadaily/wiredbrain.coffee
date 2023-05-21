import { createContext, useState, useEffect, useContext } from 'react';
import { getUserCart } from '../firebase/firestore';
import { AuthContext } from './AuthContext';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setUserCart] = useState([]);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      const unsubscribe = getUserCart(setUserCart);
      return unsubscribe;
    }
  }, [isAuthenticated]);

  return <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
