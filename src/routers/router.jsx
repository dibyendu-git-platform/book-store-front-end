import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import Checkout from "../pages/books/Checkout";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from './PrivateRoute'
import OrderPage from "../pages/books/OrderPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/orders",
            element: <PrivateRoute><OrderPage /></PrivateRoute>
        },
        {
            path: "/about",
            element: <div>About</div>
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/cart",
          element: <CartPage />
        },
        {
          path: "/checkout",
          element: <PrivateRoute><Checkout /></PrivateRoute>
        },
        {
          path: "/books/:id",
          element: <SingleBook/>
        },
        {
          path: "/dashboard",
          element: <div>Dashboard</div>
        }
      ]
    },
]);

export default router;