import Title from "./Title";

const ExtraSkill = ({ resumeInfo }) => {
  return (
    <div>
      <Title title="Extra skills" />
      <ul className="font-inter list-disc">
        {resumeInfo.extra_skills.map(skill => (
          <li key={skill.name} className="ml-5">
            <span className="font-bold">{skill.name} :</span>
            <span>{" " + skill.skills}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraSkill;
