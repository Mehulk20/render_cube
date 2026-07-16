import { lazy, Suspense } from 'react';

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
} from '../features/public/pages';
import { UserDashboard } from '../features/user/pages';
import { CreatorDashboard } from '../features/creator/pages';
import { UserProfile, CreatorProfile } from '../features/profile/pages';
import { SignupPage, ForgotPasswordPage, ResetPasswordPage } from '../features/auth/pages';

import { LoginSkeleton } from '../shared/skeletons/pages/auth';
const LoginPage = lazy(() => import('../features/auth/pages/LoginPage'));

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
            element: (
              <Suspense fallback={<LoginSkeleton />}>
                <LoginPage />
              </Suspense>
            ),
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
        element: <DashboardLayout />,
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
        element: <DashboardLayout />,
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
