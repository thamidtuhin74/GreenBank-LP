import Navbar from "../../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className=" ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
