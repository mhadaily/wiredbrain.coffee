import ProductForm from '../components/ProductForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateProduct } from '../firebase/firestore';

const UpdateProduct = () => {
  const { state } = useLocation();
  const { navigate } = useNavigate();
  const product = state;

  const handleUpdateProduct = (coffee) => {
    updateProduct(coffee.id, coffee);
    navigate(`/coffee/${coffee.id}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      {product ? (
        <div className="container max-w-xl mx-auto mt-8">
          <h1 className="text-2xl font-semibold mb-4">Update {product.name}</h1>
          <ProductForm onSubmit={handleUpdateProduct} product={product} />
        </div>
      ) : (
        <p>No product found to update</p>
      )}
      <Footer />
    </div>
  );
};

export default UpdateProduct;
