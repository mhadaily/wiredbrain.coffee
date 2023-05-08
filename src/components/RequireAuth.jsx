import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

export default RequireAuth;
