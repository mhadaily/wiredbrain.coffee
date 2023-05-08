import React from 'react';

const CoffeeCard = ({ product }) => {
  const { id, name, description, images, price, metadata } = product;

  return (
    <div key={id} className="bg-white rounded-lg shadow-md p-4 w-full">
      <img
        src={images[0]}
        alt={name}
        className="w-full h-48 object-cover object-center rounded-t-lg mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-gray-500">{metadata.origin}</p>
          <p className="text-gray-500">{metadata.variety}</p>
        </div>
        <div>
          <p className="text-xl font-bold">${price.toFixed(2)}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
