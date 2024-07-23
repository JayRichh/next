import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: NavLinkProps) => {
  return (
    <li className="list-none">
      <Link href={href}>
        <a className="group relative inline-block text-gray-800 transition duration-300 ease-in-out hover:text-primary-500">
          {label}
          <span className="absolute left-0 bottom-0 h-0.5 w-full bg-tertiary-100 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </a>
      </Link>
    </li>
  );
};

export default NavLink;
