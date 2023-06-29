import usePortfolioContext from "../../Hooks/usePortfolioContext";

const Footer = () => {
  const { isDark } = usePortfolioContext();
  return (
    <footer
      className={` ${
        isDark ? "bg-[hsla(0,0%,100%,.06)]" : "bg-base-200/30"
      }  lg:px-20 backdrop-blur-[10px] w-full py-5 mt-20`}
    >
      <div className="cs-container">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-3">
          <ul className="flex justify-center gap-5">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/abirm09"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://web.facebook.com/mdabirm09/"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/abirm09/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <div>
            <h2 className="text-center">Made with ❤ by Md. Abir mahmud</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
