import { useEffect, useState } from "react";
import Skills from "./Skills";
const Resume = () => {
  const [resumeInfo, setResumeInfo] = useState({});
  useEffect(() => {
    fetch("/resume-info.json")
      .then(res => res.json())
      .then(data => setResumeInfo(data));
  }, []);
  return (
    <div className="cs-container mt-20">
      {resumeInfo.position && (
        <>
          <div>
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
            <div className="mt-5">
              <Skills resumeInfo={resumeInfo} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Resume;
