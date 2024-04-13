import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Home from './routes/HomePage'
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: SignIn,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/home",
    Component: Home
  },
  {
    path: "*",
    Component: ErrorPage,
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
