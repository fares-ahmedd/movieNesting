import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import FixedButtons from "../ui/FixedButtons";

function AppLayout() {
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
