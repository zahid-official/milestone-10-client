import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="">
      <header className="bg-white backdrop-blur-sm bg-opacity-60 fixed top-0 w-full z-40">
        <Navbar></Navbar>
      </header>

      <main className="pt-28">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
