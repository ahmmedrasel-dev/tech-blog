import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main/Main'
import Home from '../page/Home';
import ErrorDisply from '../layout/shared/ErrorDisply';
const router = createBrowserRouter({
  path: '/',
  element: <Main></Main>,
  errorElement: <ErrorDisply></ErrorDisply>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    }
  ]
})

export default router;