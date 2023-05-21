import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import logo from '../assets/logo.png';
import { AuthContext } from '../logic/AuthContext';
import { CartContext } from '../logic/CartContext';

const Header = () => {
  const { isAdmin, isAuthenticated, currentUser } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSubMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <header className="bg-white py-4 border-b">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </Link>
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <nav className="flex items-center space-x-4">
          {!isAuthenticated && (
            <>
              <Link to="/shop" className="text-gray-700 hover:text-gray-900">
                Shop
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-gray-900">
                Sign In
              </Link>
              <Link to="/cart" className="text-gray-700 hover:text-gray-900">
                <FiShoppingCart size={24} />
              </Link>
            </>
          )}
          {isAuthenticated && (
            <>
              <div
                onMouseEnter={handleSubMenu}
                onMouseLeave={handleSubMenu}
                className="relative inline-block text-left"
              >
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {currentUser.username || currentUser.email}
                </button>
                {showUserMenu && (
                  <div className="z-10 origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Orders
                      </Link>
                      {isAdmin && (
                        <Link
                          to="/admin"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Admin
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <Link to="/shop" className="text-gray-700 hover:text-gray-900">
                Shop
              </Link>
              <Link to="/cart" className="relative text-gray-700 hover:text-gray-900">
                {cart?.length > 0 && (
                  <div className="left-4 -top-4 absolute ">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      {cart.reduce((acc, item) => (acc += item.quantity), 0)}
                    </p>
                  </div>
                )}
                <FiShoppingCart size={24} />
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
