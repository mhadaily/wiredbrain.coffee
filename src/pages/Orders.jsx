import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import Footer from '../components/Footer';

const Orders = () => {
  // Replace this with actual data fetched from an API or state
  const orders = [
    {
      id: 1,
      status: 'Processing',
      total: 22,
      items: [
        { id: 1, name: 'Coffee 1', quantity: 1, price: 10 },
        { id: 2, name: 'Coffee 2', quantity: 1, price: 12 },
      ],
    },
    // ...
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
