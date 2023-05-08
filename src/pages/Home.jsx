import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ShuffleProduct from '../components/ShuffleProduct';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <ShuffleProduct />
      <Footer />
    </div>
  );
};

export default Home;
