import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Skills from "./Skills";
import ExtraSkill from "./ExtraSkill";
import Education from "./Education";
import Hobbies from "./Hobbies";
import Languages from "./Languages";
import { useFollowPointer } from "../../util/use-follow-pointer";
import resume from "/Md. Abir Mahmud resume.pdf";
const Resume = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [resumeInfo, setResumeInfo] = useState({});
  useEffect(() => {
    fetch("/resume-info.json")
      .then(res => res.json())
      .then(data => setResumeInfo(data));
  }, []);
  return (
    <div className="cs-container mt-20">
      <div>
        <motion.div
          className="fixed z-10 top-0 left-0 box"
          ref={ref}
          animate={{ x, y }}
          transition={{
            type: "spring",
            damping: 3,
            stiffness: 50,
            restDelta: 0.001,
          }}
        >
          <a
            href={resume}
            download=""
            className="btn z-30 relative  -translate-x-2/4 -translate-y-2/4"
          >
            Download
          </a>
        </motion.div>
      </div>
      {resumeInfo.position && (
        <>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10 font-inter ">
              <div>
                <h2 className="text-3xl font-bold">{resumeInfo?.name}</h2>
                <p>{resumeInfo?.position}</p>
                <p className="mt-5">{resumeInfo?.career_objective}</p>
              </div>
              <div className="text-end">
                <p>{resumeInfo?.contact_info?.address}</p>
                {resumeInfo?.contact_info?.phone.map((info, index) => (
                  <p key={index}>{info}</p>
                ))}
                <p>{resumeInfo?.contact_info?.email}</p>
                {resumeInfo?.contact_info?.social.map((link, index) => (
                  <a
                    key={index}
                    rel="noreferrer"
                    target="_blank"
                    href={link.link}
                    className="ml-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-5 mt-5">
              <Skills resumeInfo={resumeInfo} />
              <ExtraSkill resumeInfo={resumeInfo} />
              <Education resumeInfo={resumeInfo} />
              <Hobbies resumeInfo={resumeInfo} />
              <Languages resumeInfo={resumeInfo} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Resume;
