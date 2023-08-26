import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

// const App = lazy(() => import('./App'));
const BaseLayout = lazy(() => import('./layouts/baseLayout'));

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [{ path: '/', element: <div>hello,world</div> }],
  },
]);

export default router;
