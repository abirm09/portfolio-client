import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div className={`main-layout`}>
      <div className="shapes">
        <span className="anim"></span>
        <span className="anim"></span>
        <span className="anim"></span>
        <span className="anim"></span>
        <span className="anim"></span>
        <span className="anim"></span>
        <span className="anim"></span>
        <span className="anim"></span>
        <span className="anim"></span>
        <span className="anim"></span>
      </div>
      <Header />
      <div
        className="pt-[82.662px]"
        style={{ minHeight: "calc(100vh - 144px)" }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
