import ProductForm from '../components/ProductForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UpdateProduct = ({ coffee }) => {
  const handleUpdateProduct = (product) => {
    // Handle updating product to the database here
    console.log('update product:', product);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container max-w-xl mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Update {coffee.name}</h1>
        <ProductForm onSubmit={handleUpdateProduct} product={coffee} />
      </div>
      <Footer />
    </div>
  );
};

export default UpdateProduct;
