import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";
import InterviewPage from "./pages/InterviewPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/sign",
    element: <Auth></Auth>,
  },
  {
    path: "/interview",
    element: <InterviewPage></InterviewPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
);
