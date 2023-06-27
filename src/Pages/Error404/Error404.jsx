import Lottie from "lottie-react";
import error_404 from "../../assets/404-anim/error-404.json";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie animationData={error_404} loop={true} className="w-96 h-96" />
      <div className="space-y-3 text-center">
        <h3 className="text-3xl font-inter">Opps.</h3>
        <p>Something went wrong.</p>
        <Link
          to="/"
          className="bz-backdrop-btn hover:bg-slate-200/20 transition-all"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
