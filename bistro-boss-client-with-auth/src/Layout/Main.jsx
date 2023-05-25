import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  // console.log(location.pathname);
  const noHeaderFooter = location.pathname.includes("/login");
  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <div className="min-h-[calc(100vh-230px)]">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
