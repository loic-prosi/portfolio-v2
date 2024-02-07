import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";

interface NavbarProps {
  heading: string;
  links?: Link[];
}

interface Link {
  name: string;
  url: string;
}

export const Navbar = ({ heading, links }: NavbarProps) => {
  const isLinks = links && links.length > 0;
  return (
    <nav className="flex h-16 items-center md:h-28 xl:mx-auto xl:min-w-[1280px] xl:max-w-screen-xl">
      <h1 className="flex md:hidden">
        <Image
          src={logo}
          alt={heading}
          className="ml-4 w-10 md:ml-8 md:w-14"
          priority
        />
      </h1>
      <h1 className="ml-10 hidden text-2xl font-medium md:block">{heading}</h1>
      <ul className="ml-7 flex md:ml-12">
        {isLinks &&
          links.map((link, id) => {
            const firstLink = id === 0;
            return (
              <li key={`${id}${link.name}`} className="list-none">
                <Link
                  className={`${firstLink ? "" : "ml-4 md:ml-8"} transition ease-in-out hover:text-orange-700 md:text-xl`}
                  href={link.url}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
