import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import FixedButtons from "../ui/FixedButtons";
import { useEffect } from "react";

function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <FixedButtons />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
