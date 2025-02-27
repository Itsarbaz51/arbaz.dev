import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Project from "./page/project.jsx";
import Experience from "./page/experience.jsx";
import Tools from "./page/tools.jsx";
import ErrorPage from "./page/error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index={true} element={<Hero />} />
      <Route path="/project" element={<Project />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/tools" element={<Tools />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
