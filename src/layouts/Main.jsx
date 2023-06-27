import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import usePortfolioContext from "../Hooks/usePortfolioContext";

const Main = () => {
  const { isDark } = usePortfolioContext();
  return (
    <div className={`${isDark ? "dark-bg" : ""}`}>
      <Header />
      <div className="pt-[82.662px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
