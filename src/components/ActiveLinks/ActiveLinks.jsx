import { NavLink } from "react-router-dom";

const ActiveLinks = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        (isActive ? "text-red-500" : "") + " font-bold"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLinks;
