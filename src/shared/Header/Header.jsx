import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import ActiveLinks from "../../components/ActiveLinks/ActiveLinks";
import usePortfolioContext from "../../Hooks/usePortfolioContext";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { setTheme } from "../../util/theme";

const Header = () => {
  const { isDark, setIsDark } = usePortfolioContext();
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
        <LinkScroll
          className="font-bold"
          to="about"
          smooth={true}
          duration={500}
        >
          About
        </LinkScroll>
      </li>
      <li>
        <LinkScroll
          className="font-bold"
          to="skills"
          smooth={true}
          duration={500}
        >
          Skills
        </LinkScroll>
      </li>
      <li>
        <ActiveLinks to="/projects">Projects</ActiveLinks>
      </li>
      <li className="ring-2 rounded-full font-inter ring-slate-500 shadow-xl my-2 md:my-0 ml-0 md:ml-5 hover:bg-[hsla(0,0%,100%,.06)] transition-all overflow-hidden">
        <ActiveLinks to="/contact">Contact</ActiveLinks>
      </li>
      <div className="w-max cursor-pointer ml-3" onClick={handleThemeChange}>
        {isDark ? (
          <BsFillSunFill
            title="Switch to Light"
            className="w-6 h-6 text-white"
          />
        ) : (
          <BsFillMoonFill title="Switch to Dark" className="w-6 h-6" />
        )}
      </div>
    </>
  );
  return (
    <header className="fixed w-full left-0 z-50 top-0">
      <div
        className={`navbar ${
          isDark ? "bg-[hsla(0,0%,100%,.06)]" : "bg-base-200/30"
        } items-center lg:px-20 backdrop-blur-[10px] w-full`}
      >
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
            <img src={`/api/i/my-logo-v1`} alt="Logo" />
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
