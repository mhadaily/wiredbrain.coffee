import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ShuffleProduct from '../components/ShuffleProduct';
import { getFavoriteCoffee } from '../firebase/remoteConfig';
import { useEffect, useState } from 'react';

const Home = () => {
  const [enableFav, setEnableFav] = useState(true);

  useEffect(() => {
    getFavoriteCoffee().then(setEnableFav);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      {enableFav && <ShuffleProduct />}
      <Footer />
    </div>
  );
};

export default Home;
