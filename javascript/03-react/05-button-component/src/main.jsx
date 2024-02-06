import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./assets/pages/Homepage.jsx";
import MainpageLayout from "./assets/mainpage/MainpageLayout.jsx";
import Alert from "./assets/pages/Alert.jsx";
import Button from "./assets/pages/Buttons.jsx";
import Card from "./assets/pages/Card.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainpageLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/alert",
        element: <Alert />
      },
      {
        path: "/buttons",
        element: <Button />
      },
      {
        path:"/cards",
        element:<Card />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
