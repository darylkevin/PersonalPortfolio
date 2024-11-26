const EducationCard = ({ education, index }) => {
  return (
    <article className="pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <p className="text-sm text-slate-400">{education.period}</p>
        <p className="flex gap-2">
          {education.degree}
          <svg
            id={`education-link-${index}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="m-1 size-3"
          >
            <path
              fillRule="evenodd"
              d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <p>{education.institution}</p>
        <p className="py-2 text-sm font-extralight text-slate-400">
          {education.description}
        </p>
      </div>
    </article>
  );
};

export default EducationCard;
