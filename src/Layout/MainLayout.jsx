import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
