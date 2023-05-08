import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Admin = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Add your orders list and tabs here */}
      <Footer />
    </div>
  );
};

export default Admin;
