import { createContext, useState } from "react";

export const PortfolioContext = createContext();
const PortfolioProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
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
