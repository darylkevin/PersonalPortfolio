import { footer } from "../lib/definitions";

const Footer = () => {
  return (
    <footer className="border-purple-400-400 text-md mt-8 border-[1px]">
      <article>
        <div className="grid grid-cols-1 text-slate-400">
          <p className="text-sm">{footer.text}</p>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
