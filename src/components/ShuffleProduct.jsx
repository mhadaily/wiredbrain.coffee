import { useContext } from 'react';
import CoffeeCard from '../components/CoffeeCard';
import { ProductsContext } from '../logic/ProductsContext';

const ShuffleProduct = () => {
  const { products } = useContext(ProductsContext);

  // Function to shuffle the products array
  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const shuffledCoffeeData = shuffle([...products]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Favorite Coffees</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shuffledCoffeeData.slice(0, 3).map((product) => (
          <CoffeeCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShuffleProduct;
