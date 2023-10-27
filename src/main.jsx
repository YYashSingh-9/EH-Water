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
import SignupUser from "./Components/AccountPages/SignupUser";
import EditAccount from "./Components/AccountPages/EditAccount";
import { userRequestsHandler, postIssue } from "./Store/AsyncFuntions";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ParentComponent />,
    children: [
      { path: "/", element: <ProblemForm />, action: postIssue },
      { path: "/issues", element: <WorldIssuesComponent /> },
      { path: "/issues/issue-details", element: <IssueThreadDetail_Page /> },
      {
        path: "/user-details",
        element: <UserPage />,
        action: userRequestsHandler,
      },
      { path: "/signup", element: <SignupUser />, action: userRequestsHandler },
      {
        path: "/user-details/edit-user",
        element: <EditAccount />,
        action: userRequestsHandler,
      },
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
