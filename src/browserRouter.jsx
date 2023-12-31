import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/_index";
import ErrorPage from "./error-page";
import Movies from "./routes/$movieId";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/hng-stage-two-task"
      element={<Outlet />}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Root />} />
      <Route path="movie/:movieId" element={<Movies />} />
    </Route>
  )
);