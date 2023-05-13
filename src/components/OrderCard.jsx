const OrderCard = ({ order }) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4">
      <h2 className="text-xl font-bold">Order #{order.id}</h2>
      <p className="text-gray-600">Status: {order.status}</p>
      <ul className="mt-4">
        {order.items?.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <div>
              {item.name} ({item.quantity})
            </div>
            <div>{item.price} USD</div>
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold mt-2">Total: {order.total} USD</p>
    </div>
  );
};

export default OrderCard;
