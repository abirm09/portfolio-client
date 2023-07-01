import Title from "./Title";

const Skills = ({ resumeInfo }) => {
  return (
    <div>
      <Title title="Skills" />
      <table>
        <tbody>
          {resumeInfo.skills.map(info => (
            <tr key={info.category}>
              <td>
                <span className="font-bold">{info.category}: </span>
                <span>{info.skills}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
