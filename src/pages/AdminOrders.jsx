import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { getOrders } from '../firebase/firestore';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ubsub = getOrders(setOrders);
    () => ubsub();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orders.length ? (
            orders.map((order) => <OrderCard key={order.id} order={order} />)
          ) : (
            <p className="pt-5 text-center">No Pending or Processing orders found!</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminOrders;
