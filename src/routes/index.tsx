import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Start from '../pages/Start';
import Dashboard from '../pages/Dashboard';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Start />,
  },
  {
    path: '/pokemon',
    element: <Dashboard />,
  },
]);

function AllRoutes() {
  return <RouterProvider router={routers} />;
}

export default AllRoutes;
