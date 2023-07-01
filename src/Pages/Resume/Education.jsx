import Title from "./Title";

const Education = ({ resumeInfo }) => {
  return (
    <div>
      <Title title="Education" />
      <div className="font-inter">
        <h2 className="font-bold">{resumeInfo.education.college_name}</h2>
        <h2>{resumeInfo.education.degree}</h2>
      </div>
    </div>
  );
};

export default Education;
