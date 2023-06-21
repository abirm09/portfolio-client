import { Link } from "react-router-dom";
import ActiveLinks from "../../components/ActiveLinks/ActiveLinks";
import usePortfolioContext from "../../Hooks/usePortfolioContext";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { setTheme } from "../../util/theme";
import logoWhite from "../../assets/logoWhite.png";

const Header = () => {
  const { isDark, setIsDark } = usePortfolioContext();
  console.log(isDark);
  const handleThemeChange = () => {
    setIsDark(!isDark);
    setTheme(!isDark);
  };
  const navLinks = (
    <>
      <li>
        <ActiveLinks to="/">Home</ActiveLinks>
      </li>
      <li>
        <ActiveLinks to="/portfolio">Portfolio</ActiveLinks>
      </li>
      <div className="btn w-max" onClick={handleThemeChange}>
        {isDark ? (
          <BsFillSunFill className="w-6 h-6 text-white" />
        ) : (
          <BsFillMoonFill className="w-6 h-6" />
        )}
      </div>
    </>
  );
  return (
    <header className="lg:mx-20">
      <div className="navbar bg-base-100 items-center">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-poppins"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className={`w-[150px] md:w-[200px]  ${
              !isDark ? "hover:bg-base-300" : "hover:bg-base-300"
            } transition-all rounded-lg active:scale-95 select-none ml-auto md:ml-0`}
          >
            <img
              src={isDark ? logoWhite : "https://i.ibb.co/yShvqNz/logo.png"}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-poppins items-center">
            {navLinks}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
