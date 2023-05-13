import { useState } from 'react';

const ProductForm = ({ onSubmit, product }) => {
  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [image, setImage] = useState(product?.images[0] || '');
  const [price, setPrice] = useState(product?.price || 0);
  const [metadata, setMetadata] = useState(
    product?.metadata || {
      strength: '',
      origin: '',
      type: 'coffee',
      weight: '',
      variety: '',
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      description,
      images: [image],
      price: parseFloat(price),
      metadata,
    });
  };

  const handleMetadataChange = (key, value) => {
    setMetadata({ ...metadata, [key]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
      </div>
      {/* Add more input fields for metadata properties */}
      <div>
        <label htmlFor="strength" className="block text-sm font-medium text-gray-700">
          Strength
        </label>
        <input
          type="text"
          id="strength"
          value={metadata.strength}
          onChange={(e) => handleMetadataChange('strength', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
          Origin
        </label>
        <input
          type="text"
          id="origin"
          value={metadata.origin}
          onChange={(e) => handleMetadataChange('origin', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
          Weight
        </label>
        <input
          type="text"
          id="weight"
          value={metadata.weight}
          onChange={(e) => handleMetadataChange('weight', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="metadataDescription" className="block text-sm font-medium text-gray-700">
          Metadata Description
        </label>
        <input
          type="text"
          id="metadataDescription"
          value={metadata.description}
          onChange={(e) => handleMetadataChange('description', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="variety" className="block text-sm font-medium text-gray-700">
          Variety
        </label>
        <input
          type="text"
          id="variety"
          value={metadata.variety}
          onChange={(e) => handleMetadataChange('variety', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
