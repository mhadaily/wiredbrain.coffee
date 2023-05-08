import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16 py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} WiredBrain.Coffee. All rights reserved.</p>
          <p className="py-2 flex justify-center items-center">
            <FiHeart size={16} /> <span className="px-2">Majid Hajian</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
