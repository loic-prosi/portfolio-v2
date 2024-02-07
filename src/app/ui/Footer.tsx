import Link from "next/link";
import { Icon } from "@/app/ui/Icon";

interface FooterProps {
  text: string;
  link: {
    name: string;
    url: string;
  };
}

export const Footer = ({ text, link }: FooterProps) => {
  return (
    <footer className="flex h-16 place-content-center items-center text-stone-800 md:h-20 md:text-xl">
      <p>{text}</p>
      <Link
        className="ml-3 flex items-center transition ease-in-out hover:text-orange-700 md:ml-6 md:text-xl"
        href={link.url}
      >
        <Icon
          className="mr-2 h-4 w-4 md:h-5 md:w-5 md:-translate-y-px"
          type="github"
        />
        <span className="hidden md:block">{link.name}</span>
      </Link>
    </footer>
  );
};
