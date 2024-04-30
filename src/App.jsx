import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import AppLayout from "./pages/AppLayout";
import SearchResult from "./pages/searchResult/SearchResult";
import Details from "./pages/details/Details";
import NotFoundPage from "./pages/not-found/NotFound";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search/:query", element: <SearchResult /> },
      { path: "/:mediaType/:id", element: <Details /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
