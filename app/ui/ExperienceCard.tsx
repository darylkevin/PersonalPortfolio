const ExperienceCard = ({ experience }) => {
  return (
    <article className="pb-8 lg:flex lg:gap-8">
      <p className="pt-1 text-sm text-slate-400 lg:min-w-28 xl:min-w-36">
        {experience.period}
      </p>
      <div>
        <p className="font-bold">
          {experience.company},{" "}
          <span className="font-light">{experience.title}</span>
        </p>
        <p className="text-sm text-slate-400">{experience.description}</p>
        <div className="flex flex-wrap gap-2 py-2">
          {experience.skills.map((skill) => (
            <p
              key={skill}
              className="rounded-full border p-2 text-xs font-medium"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
