import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/UseAuth.ts';
import HomePage from '../../pages/homePage/HomePage.tsx';

const PrivateRoute = () => {
  const { isAuth } = useAuth();
  console.log(isAuth, 123123);
  return isAuth ? <HomePage /> : <Navigate to="/login" />;
};

export default PrivateRoute;
