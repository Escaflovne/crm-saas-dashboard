import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./routes/NotFoundPage";
import RootPage from "./routes/RootPage";
import RecoverPage from "./routes/auth/RecoverPage";
import SignInPage from "./routes/auth/SignInPage";
import SignUpDetailsPage from "./routes/auth/SignUpDetailsPage";
import SignUpFinishPage from "./routes/auth/SignUpFinishPage";
import SignUpPage from "./routes/auth/SignUpPage";
import DashboardContactsPage from "./routes/dashboard/DashboardContactsPage";
import DashboardEmptyPage from "./routes/dashboard/DashboardEmptyPage";
import DashboardFinancePage from "./routes/dashboard/DashboardFinancePage";
import DashboardPage from "./routes/dashboard/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/recover",
    element: <RecoverPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/sign-up/details",
    element: <SignUpDetailsPage />,
  },
  {
    path: "/sign-up/finish",
    element: <SignUpFinishPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/dashboard/contacts",
    element: <DashboardContactsPage />,
  },
  {
    path: "/dashboard/finance",
    element: <DashboardFinancePage />,
  },
  {
    path: "/dashboard/empty",
    element: <DashboardEmptyPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
