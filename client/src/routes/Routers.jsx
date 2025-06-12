import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from '../UI/AppLayout';
import HomePage from '../pages/HomePage';

function Routers() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [{ path: '/', element: <HomePage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routers;
