import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Home from './routes/HomePage'
import Shop from './routes/ShopPage';
import Exercise from './routes/ExercisePage';
import Calorie from './routes/CaloriePage';
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
    path: "/shop",
    Component: Shop
  },
  {
    path: "/exercise",
    Component: Exercise
  },
  {
    path: "/calorie",
    Component: Calorie
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
