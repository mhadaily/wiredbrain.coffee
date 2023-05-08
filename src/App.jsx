import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Forgot from './pages/Forgot';
import Shop from './pages/Shop';
import CoffeeDetails from './pages/CoffeeDetails';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import RequireAuth from './components/RequireAuth';

const App = () => {
  const isAuthenticated = false;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/coffee/:id" element={<CoffeeDetails />} />
      <Route
        path="/profile"
        element={
          <RequireAuth isAuthenticated={isAuthenticated}>
            <Profile />
          </RequireAuth>
        }
      />
      <Route
        path="/admin"
        element={
          <RequireAuth isAuthenticated={isAuthenticated}>
            <Admin />
          </RequireAuth>
        }
      />
      <Route
        path="/orders"
        element={
          <RequireAuth isAuthenticated={isAuthenticated}>
            <Orders />
          </RequireAuth>
        }
      />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
