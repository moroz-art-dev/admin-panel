import ForgotPasswordPage from '@pages/ForgotPasswordPage';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';
import HomePage from '@pages/HomePage';

const routesConfig = [
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
];

export default routesConfig;
