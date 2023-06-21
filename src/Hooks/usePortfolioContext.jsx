import { useContext } from "react";
import { PortfolioContext } from "../Provider/PortfolioProvider";

const usePortfolioContext = () => {
  const data = useContext(PortfolioContext);
  return data;
};

export default usePortfolioContext;
