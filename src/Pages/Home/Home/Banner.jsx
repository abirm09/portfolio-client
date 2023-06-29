import { Link } from "react-router-dom";
import usePortfolioContext from "../../../Hooks/usePortfolioContext";
import { motion } from "framer-motion";
const Banner = () => {
  const { isDark } = usePortfolioContext();
  const hour = new Date().getHours();
  return (
    <>
      <div className="cs-container">
        <div className="grid md:grid-cols-2 items-center py-20 gap-16 box">
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <img
              src="https://i.ibb.co/7zGCtfy/md-abir-mahmud.png"
              alt="MD. Abir mahmud"
              className={`max-w-[250px] md:max-w-[350px] w-full border-[10px] rounded-full mx-auto md:mr-0 shadow-lg select-none ${
                isDark ? "bg-orange-500 border-base-200" : "border-base-100"
              }`}
            />
          </motion.div>
          <div className="space-y-4">
            <p
              className={`${
                isDark ? "bg-[hsla(0,0%,100%,.06)]" : "bg-base-300/20"
              } cs-backdrop-btn`}
              data-aos="fade-up"
              data-aos-delay="0"
            >
              {hour > 4 && hour < 13
                ? `🌄 Good Morning`
                : hour >= 13 && hour < 19
                ? `🌤️ Good Afternoon`
                : (hour >= 19 && hour <= 24) || (hour >= 1 && hour <= 4)
                ? `🌚 Good Evening`
                : "Some thing went wrong"}
            </p>
            <div data-aos="fade-up" data-aos-delay="100">
              <h2 className="font-inter text-3xl md:text-5xl font-black">
                I&apos;m Abir Mahmud
              </h2>
              <p>Junior Front end Developer.</p>
            </div>
            <p className="font-inter" data-aos="fade-up" data-aos-delay="200">
              I am Abir mahmud. A professional web developer with 15+ projects
              and 12-month experience.
            </p>
            <div data-aos="fade-up" data-aos-delay="300">
              <a
                href="/Md. Abir Mahmud resume.pdf"
                download="Md. Abir Mahmud Resume.pdf"
                className={`${
                  isDark ? "bg-[hsla(0,0%,100%,.06)]" : "bg-base-300/20"
                } cs-backdrop-btn`}
              >
                Download Resume
              </a>
              <Link
                to="/contact"
                className="px-6 py-2 ring-2 rounded-full font-inter ring-slate-500 shadow-xl ml-5 hover:bg-[hsla(0,0%,100%,.06)] transition-all"
              >
                Hire me
              </Link>
            </div>
            <div className="flex gap-3">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/abirm09"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <img
                  src="https://i.ibb.co/C8JMmxn/github.png"
                  className="w-6"
                  alt="Github"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/abirm09/"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  src="https://i.ibb.co/k5jPMq1/001-linkedin.png"
                  className="w-6"
                  alt="LInkedIn"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://web.facebook.com/mdabirm09/"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <img
                  src="https://i.ibb.co/gSszV6K/004-facebook.png"
                  className="w-6"
                  alt="LInkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
