import { useContext } from 'react';
import { AuthContext } from '../logic/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { deleteProduct } from '../firebase/firestore';

const CoffeeCard = ({ product }) => {
  const { isAdmin } = useContext(AuthContext);
  const { navigate } = useNavigate();

  const handleDeleteProduct = () => {
    deleteProduct(product.id);
    navigate('/shop');
  };

  return (
    <div key={product.id} className="bg-white rounded-lg shadow-md p-4 w-full">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-48 object-cover object-center rounded-t-lg mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-gray-500">{product.metadata.origin}</p>
          <p className="text-gray-500">{product.metadata.variety}</p>
        </div>
        <div>
          <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Add to Cart</button>
        </div>
      </div>

      {isAdmin && (
        <div className="pt-10 flex justify-between items-end">
          <div>
            <button
              onClick={handleDeleteProduct}
              className="bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Delete
            </button>
          </div>
          <div>
            <Link
              to={'/update-product'}
              state={product}
              className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Update
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeCard;
