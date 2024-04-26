import React, { useEffect } from "react";
import { fetchData } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfig } from "./store/slices/homeSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    apiTesting();
  }, []);
  async function apiTesting() {
    try {
      const response = await fetchData("/movie/popular");
      console.log(response);
      dispatch(getApiConfig(response));
    } catch (error) {}
  }
  console.log(url);
  return <div>{url?.total_pages}</div>;
};

export default Navbar;
