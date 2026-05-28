import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../UI/Layout';
import HomePage from '../pages/HomePage';
import MarketplacePage from '../pages/MarketplacePage';
import AssetDetailPage from '../pages/AssetDetailPage';
import CreatorsPage from '../pages/CreatorsPage';
import PricingPage from '../pages/PricingPage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/marketplace', element: <MarketplacePage /> },
      { path: '/asset/:id', element: <AssetDetailPage /> },
      { path: '/creators', element: <CreatorsPage /> },
      { path: '/pricing', element: <PricingPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignupPage /> },

      // 404
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

function Routers() {
  return <RouterProvider router={router} />;
}

export default Routers;
