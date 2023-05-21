import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ customPath, isAuthenticated, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(customPath || '/login');
    }
  }, [customPath, isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

export default RequireAuth;
