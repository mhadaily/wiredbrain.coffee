import { createContext, useState, useEffect } from 'react';
import { getProducts } from '../firebase/firestore';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const ubsub = getProducts(setProducts);
    return () => ubsub();
  }, []);

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};

export { ProductsContext, ProductsProvider };
