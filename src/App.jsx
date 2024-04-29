import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import AppLayout from "./pages/AppLayout";
import SearchResult from "./pages/searchResult/SearchResult";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search/:query", element: <SearchResult /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
