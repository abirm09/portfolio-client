import Title from "./Title";

const Skills = ({ resumeInfo }) => {
  return (
    <div>
      <Title title="Skills" />

      <ul className="list-disc">
        {resumeInfo.skills.map(info => (
          <li key={info.category} className="font-inter ml-5">
            <span className="font-bold">{info.category} : </span>
            <span>{info.skills}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
