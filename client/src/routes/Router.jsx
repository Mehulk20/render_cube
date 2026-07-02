import { createBrowserRouter } from 'react-router-dom';

import { MainLayout, AuthLayout } from '../layouts';

import { ProtectedRoute, PublicRoute } from '.';

import HomePage from '../pages/HomePage';
import MarketplacePage from '../pages/MarketplacePage';
import AssetDetailPage from '../pages/AssetDetailPage';
import CreatorsPage from '../pages/CreatorsPage';
import PricingPage from '../pages/PricingPage';
import CartPage from '../pages/CartPage';
import NotFoundPage from '../pages/NotFoundPage';

import { LoginPage, SignupPage } from '../pages/auth';

export const router = createBrowserRouter([
  // Public Website
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'marketplace',
        element: <MarketplacePage />,
      },
      {
        path: 'asset/:id',
        element: <AssetDetailPage />,
      },
      {
        path: 'creators',
        element: <CreatorsPage />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },

  // Authentication
  {
    element: <AuthLayout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'signup',
            element: <SignupPage />,
          },
        ],
      },
    ],
  },

  // Protected Routes
  {
    element: <ProtectedRoute />,
    children: [
      // Example
      // {
      //   path: 'dashboard',
      //   element: <DashboardPage />,
      // },
    ],
  },

  // 404
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
