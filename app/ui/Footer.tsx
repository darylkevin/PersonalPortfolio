import { footer } from "../lib/definitions";

const Footer = () => {
  return (
    <footer className="border-purple-400-400 text-md mt-8 border-[1px]">
      <article className="mt-8 py-2">
        <div className="grid grid-cols-1">
          <p>{footer.contact}</p>
          <p className="text-sm font-extralight">{footer.text}</p>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
