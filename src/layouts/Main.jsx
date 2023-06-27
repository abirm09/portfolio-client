import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";

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
      <div className="pt-[82.662px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
