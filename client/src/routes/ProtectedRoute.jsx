import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectIsAuthenticated } from '../features/auth/services';
import { useGetCurrentUserQuery } from '../features/user/services';

import { ProfilePageSkeleton } from '../shared/skeletons/pages/profile';
import { Loader } from '../shared/skeletons/components/common';

function ProtectedRoute() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

  const { isLoading, isError } = useGetCurrentUserQuery(undefined, {
    skip: !isAuthenticated,
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
