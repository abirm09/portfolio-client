const SectionTitle = ({ title }) => {
  return (
    <div className="text-2xl font-inter font-semibold">
      <h2>{title}</h2>
      <span className="block w-16 h-[2px] bg-rose-600 mt-2"></span>
    </div>
  );
};

export default SectionTitle;
