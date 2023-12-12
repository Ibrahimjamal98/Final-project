import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import SharedLayout from "./components/SharedLayout";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <>
      <CartProvider>
        <RouterProvider router={Router} />
      </CartProvider>
    </>
  );
}

export default App;
