import Header from '../components/Header';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { CartContext } from '../logic/CartContext';
import { ProductsContext } from '../logic/ProductsContext';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { decreaseQuantity, increaseQuantity } from '../firebase/firestore';
import { submitCartToUserOrder } from '../firebase/functions';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);
  const navigation = useNavigate();

  const handleDecrease = (productId) => {
    decreaseQuantity(productId);
  };
  const handleIncrease = (productId) => {
    increaseQuantity(productId);
  };

  const submitOrder = () => {
    submitCartToUserOrder().then(() => {
      navigation('/orders');
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, i) => {
                  const product = products.find((p) => p.id === item.productId);
                  const rowClassNames =
                    i % 2
                      ? 'text-gray-900 border-b bg-gray-50 '
                      : 'text-gray-900 bg-white border-b';
                  return (
                    <tr key={item.productId} className={rowClassNames}>
                      <td scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                      </td>
                      <td className="px-6 py-4">{product.price}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => handleDecrease(product.id)}
                            className="flex items-center justify-center h-10 w-10 transition hover:color-75"
                          >
                            <FiMinus size={24} />
                          </button>
                          <h3 className="h-10 w-10 flex justify-center items-center">
                            {item.quantity}
                          </h3>
                          <button
                            type="button"
                            onClick={() => handleIncrease(product.id)}
                            className="flex items-center justify-center h-10 w-10  transition hover:opacity-75"
                          >
                            <FiPlus size={24} />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">{item.quantity * product.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="m-10">
              <button
                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                onClick={submitOrder}
              >
                Submit your order
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
