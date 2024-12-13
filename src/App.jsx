import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogoSpinner from "./ui/LogoSpinner";
const Home = lazy(() => import("./pages/home/Home"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const SearchResult = lazy(() => import("./pages/searchResult/SearchResult"));
const Details = lazy(() => import("./pages/details/Details"));
const Explore = lazy(() => import("./pages/explore/Explore"));
const NotFoundPage = lazy(() => import("./pages/not-found/NotFound"));
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search/:query", element: <SearchResult /> },
      { path: "/explore/:mediaType", element: <Explore /> },
      { path: "/:mediaType/:id", element: <Details /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<LogoSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
