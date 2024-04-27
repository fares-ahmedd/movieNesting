import React, { useEffect } from "react";
import { fetchData } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfig } from "./store/slices/homeSlice";
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
  const dispatch = useDispatch();
  useEffect(() => {
    apiTesting();
  }, []);
  async function apiTesting() {
    try {
      const response = await fetchData("/configuration");
      const data = {
        backdrop: `${response.images.secure_base_url}original`,
        poster: `${response.images.secure_base_url}original`,
        profile: `${response.images.secure_base_url}original`,
      };
      dispatch(getApiConfig(data));
    } catch (error) {}
  }
  return <RouterProvider router={router} />;
}

export default App;
