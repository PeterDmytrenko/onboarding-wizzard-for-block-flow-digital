import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "./coreComponents/OnboardingLayout";
import OnboardingPage from "./pages/OnboardingPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/onboarding" replace />,
      },
      {
        path: "onboarding",
        element: <OnboardingPage />,
      },
    ],
  },
]);
