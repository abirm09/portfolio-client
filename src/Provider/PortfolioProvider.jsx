import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../util/FIrebase/firebase.config";
export const PortfolioContext = createContext();
const PortfolioProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const auth = getAuth(app);
  const data = {
    isDark,
    setIsDark,
  };
  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
