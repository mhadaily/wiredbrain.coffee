import React from 'react';
import ProductForm from '../components/ProductForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
const AddProduct = () => {
  const handleAddProduct = (product) => {
    // Handle adding product to the database here
    console.log('New product:', product);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container max-w-xl mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
        <ProductForm onSubmit={handleAddProduct} />
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
