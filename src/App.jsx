import { useContext } from 'react';
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
import AdminOrders from './pages/AdminOrders';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import Cart from './pages/Cart';
import RequireAuth from './components/RequireAuth';
import { AuthContext } from './logic/AuthContext';

const App = () => {
  const { isAdmin, isAuthenticated } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <RequireAuth customPath={'/profile'} isAuthenticated={!isAuthenticated}>
            <SignIn />
          </RequireAuth>
        }
      />
      <Route
        path="/register"
        element={
          <RequireAuth customPath={'/profile'} isAuthenticated={!isAuthenticated}>
            <SignUp />
          </RequireAuth>
        }
      />
      <Route
        path="/forgot"
        element={
          <RequireAuth customPath={'/profile'} isAuthenticated={!isAuthenticated}>
            <Forgot />
          </RequireAuth>
        }
      />
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
          <RequireAuth isAuthenticated={isAdmin}>
            <Admin />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/add-product"
        element={
          <RequireAuth isAuthenticated={isAdmin}>
            <AddProduct />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <RequireAuth isAuthenticated={isAdmin}>
            <AdminOrders />
          </RequireAuth>
        }
      />
      <Route
        path="/update-product"
        element={
          <RequireAuth isAuthenticated={isAdmin}>
            <UpdateProduct />
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

      <Route
        path="/cart"
        element={
          <RequireAuth isAuthenticated={isAuthenticated}>
            <Cart />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default App;
