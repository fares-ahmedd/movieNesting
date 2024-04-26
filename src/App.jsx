import React, { useEffect } from "react";
import { fetchData } from "./utils/api";
const Navbar = () => {
  useEffect(() => {
    apiTesting();
  }, []);
  async function apiTesting() {
    try {
      const response = await fetchData("/movie/popular");
      console.log(response);
    } catch (error) {}
  }
  return <div>Hello world</div>;
};

export default Navbar;
