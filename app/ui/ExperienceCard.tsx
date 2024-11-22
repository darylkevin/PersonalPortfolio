const ExperienceCard = ({ experience }) => {
  return (
    <article className="py-4 lg:flex lg:gap-8">
      <p className="lg:min-w-28 xl:min-w-36 text-sm font-extralight pt-1">{experience.period}</p>
      <div>
        <p className="font-bold">
          {experience.company},{" "}
          <span className="font-light">{experience.title}</span>
        </p>
        <p className="text-sm font-extralight">{experience.description}</p>
        <div className="flex flex-wrap gap-2 py-2">
          {experience.skills.map((skill) => (
            <p
              key={skill}
              className="text-md rounded-xl border p-1 font-extralight"
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
