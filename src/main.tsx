import ReactDOM from 'react-dom/client'
import './index.css'
import './firebase.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/loginPage/LoginPage.tsx'
import RegisterPage from './pages/registerPage/RegisterPage.tsx'
import NotFoundPage from './pages/notFoundPage/NotFoundPage.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import PrivateRoute from './components/privateRoute/PrivateRoute.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
