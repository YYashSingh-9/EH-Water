import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParentComponent from "./ParentComponent";
import ProblemForm from "./Components/OutletComponents/ProblemForm";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ParentComponent />,
    children: [{ path: "/", element: <ProblemForm /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
