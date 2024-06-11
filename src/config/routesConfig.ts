import ForgotPasswordPage from '@pages/ForgotPasswordPage';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';
import HomePage from '@pages/HomePage';

export const routesConfig: {[key: string]: React.ComponentType<any>} = {
  '/forgot-password': ForgotPasswordPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/': HomePage,
};
