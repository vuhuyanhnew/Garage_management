import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
