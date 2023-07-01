import Title from "./Title";

const Languages = ({ resumeInfo }) => {
  return (
    <div>
      <Title title="Languages" />
      <div>
        <ul className="font-inter">
          {resumeInfo.language.map((item, index) => (
            <li key={index}>
              <span>{index + 1}.</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Languages;
