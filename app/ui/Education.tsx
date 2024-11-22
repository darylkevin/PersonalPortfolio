import { education } from "../lib/definitions";

const Education = () => {
  return (
    <section className="my-8 text-md border-[1px] border-yellow-400">
      <p className="my-8 py-2">Education</p>
      <article className="py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="text-[0.75em]">{education.period}</p>
          <p>{education.institution}</p>
          <p className="font-bold">{education.degree}</p>
          <p className="py-2 text-sm">{education.description}</p>
        </div>
      </article>
    </section>
  );
};

export default Education;
