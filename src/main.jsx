import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home.jsx";
import Phones from "./component/Phones.jsx";
import Phone from "./component/Phone.jsx";
import CellPhone from "./component/CellPhone.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader: () => fetch("http://localhost:5000/phone"),
      },
      {
        path: "/phone/:id",
        element: <Phone />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phone/${params.id}`),
      },
      {
        path: "/cellphone/:id",
        element: <CellPhone />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phone/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
