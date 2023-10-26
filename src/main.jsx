import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import MainStore from "./Store/MainStore";
import ParentComponent from "./ParentComponent";
import ProblemForm from "./Components/OutletComponents/ProblemForm";
import WorldIssuesComponent from "./Components/OutletComponents/WorldIssuesComponent";
import IssueThreadDetail_Page from "./Components/WholePages/IssueThreadDetail";
import UserPage from "./Components/WholePages/UserPage";
import LoginPage from "./Components/AccountPages/LoginPage";
import SignupUser from "./Components/AccountPages/SignupUser";
import EditAccount from "./Components/AccountPages/EditAccount";
import { userRequestsHandler } from "./Store/AsyncFuntions";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ParentComponent />,
    children: [
      { path: "/", element: <ProblemForm /> },
      { path: "/issues", element: <WorldIssuesComponent /> },
      { path: "/issues/issue-details", element: <IssueThreadDetail_Page /> },
      {
        path: "/user-details",
        element: <UserPage />,
        action: userRequestsHandler,
      },

      { path: "/signup", element: <SignupUser /> },
      { path: "/user-details/edit-user", element: <EditAccount /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={MainStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
