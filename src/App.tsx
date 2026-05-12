import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutePlaceholder title="CRM SaaS Dashboard" />,
  },
  {
    path: "/sign-in",
    element: <RoutePlaceholder title="Sign In" />,
  },
  {
    path: "/recover",
    element: <RoutePlaceholder title="Recover Account" />,
  },
  {
    path: "/sign-up",
    element: <RoutePlaceholder title="Sign Up" />,
  },
  {
    path: "/sign-up/details",
    element: <RoutePlaceholder title="Sign Up Details" />,
  },
  {
    path: "/sign-up/finish",
    element: <RoutePlaceholder title="Sign Up Finish" />,
  },
  {
    path: "/dashboard",
    element: <RoutePlaceholder title="Dashboard" />,
  },
  {
    path: "/dashboard/contacts",
    element: <RoutePlaceholder title="Contacts" />,
  },
  {
    path: "/dashboard/finance",
    element: <RoutePlaceholder title="Finance" />,
  },
  {
    path: "/dashboard/empty",
    element: <RoutePlaceholder title="Empty State" />,
  },
  {
    path: "*",
    element: <RoutePlaceholder title="Not Found" />,
  },
]);

function RoutePlaceholder({ title }: { title: string }) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
