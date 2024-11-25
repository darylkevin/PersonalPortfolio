const EducationCard = ({ education }) => {
  return (
    <article className="pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <p className="text-[0.75em] text-slate-400">{education.period}</p>
        <p>{education.institution}</p>
        <p className="font-bold">{education.degree}</p>
        <p className="py-2 text-sm text-slate-400">{education.description}</p>
      </div>
    </article>
  );
};

export default EducationCard;
