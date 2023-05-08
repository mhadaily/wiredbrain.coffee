import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const RequireAuth = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet /> : null;
};

export default RequireAuth;
