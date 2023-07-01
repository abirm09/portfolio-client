import Title from "./Title";

const Hobbies = ({ resumeInfo }) => {
  return (
    <div>
      <Title title="Hobbies" />
      <div>{resumeInfo.hobbies}</div>
    </div>
  );
};

export default Hobbies;
