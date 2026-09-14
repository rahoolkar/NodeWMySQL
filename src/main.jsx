import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";
import InterviewPage from "./pages/InterviewPage.jsx";
import InterviewHistory from "./pages/InterviewHistory.jsx";
import Pricing from "./pages/Pricing.jsx";
import InterviewReport from "./pages/InterviewReport.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <Auth></Auth>,
  },
  {
    path: "/interview",
    element: <InterviewPage></InterviewPage>,
  },
  {
    path: "/history",
    element: <InterviewHistory></InterviewHistory>,
  },
  {
    path: "/pricing",
    element: <Pricing></Pricing>,
  },
  {
    path: "/report/:id",
    element: <InterviewReport></InterviewReport>,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
);
