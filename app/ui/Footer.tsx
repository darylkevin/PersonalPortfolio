import { footer } from "../lib/definitions";

const Footer = () => {
  return (
    <footer className="text-md mt-8">
      <article>
        <div className="grid grid-cols-1 text-slate-400">
          <p className="text-sm">{footer.text}</p>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
