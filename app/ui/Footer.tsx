import { footer } from "../lib/definitions";

const Footer = () => {
  return (
    <footer className="border-purple-400-400 text-md mt-8 border-[1px]">
      <article>
        <div className="grid grid-cols-1">
          <p className="pb-4 pt-8">{footer.contact}</p>
          <p className="text-sm font-extralight">{footer.text}</p>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
