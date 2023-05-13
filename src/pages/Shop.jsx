import { useContext } from 'react';
import Header from '../components/Header';
import CoffeeCard from '../components/CoffeeCard';
import Footer from '../components/Footer';
import { ProductsContext } from '../logic/ProductsContext';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((coffee) => (
            <CoffeeCard key={coffee.id} product={coffee} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
