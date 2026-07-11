import { createBrowserRouter } from 'react-router-dom';

import { MainLayout, AuthLayout, DashboardLayout } from '../layouts';

import { ProtectedRoute, PublicRoute } from '.';

import {
  HomePage,
  MarketplacePage,
  AssetDetailPage,
  CreatorsPage,
  PricingPage,
  CartPage,
  NotFoundPage,
} from '../pages/public';
import { UserDashboard, UserProfile } from '../pages/account';
import { CreatorProfile, CreatorDashboard } from '../pages/creator';
import { LoginPage, SignupPage, ForgotPasswordPage, ResetPasswordPage } from '../pages/auth';

export const router = createBrowserRouter([
  // Public pages
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
          {
            path: 'forgot-password',
            element: <ForgotPasswordPage />,
          },
          {
            path: 'reset-password',
            element: <ResetPasswordPage />,
          },
        ],
      },
    ],
  },

  // Protected Routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: 'account',
        element: <DashboardLayout mode="account" title="Dashboard" />,
        children: [
          {
            index: true,
            element: <UserDashboard />,
          },
          {
            path: 'profile',
            element: <UserProfile />,
          },
        ],
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: 'creator',
        element: <DashboardLayout mode="creator" title="creator-studio" />,
        children: [
          {
            index: true,
            element: <CreatorDashboard />,
          },
          {
            path: 'profile',
            element: <CreatorProfile />,
          },
        ],
      },
    ],
  },

  // 404
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
