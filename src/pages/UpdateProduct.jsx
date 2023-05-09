import ProductForm from '../components/ProductForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const UpdateProduct = () => {
  const { state } = useLocation();
  const product = state;

  const handleUpdateProduct = (coffee) => {
    // Handle updating product to the database here
    console.log('update product:', coffee);
  };

  return (
    <div className="min-h-screen">
      <Header />
      {product ? (
        <div className="container max-w-xl mx-auto mt-8">
          <h1 className="text-2xl font-semibold mb-4">Update "{product.name}"</h1>
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
