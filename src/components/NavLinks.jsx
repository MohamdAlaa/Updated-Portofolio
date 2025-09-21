"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 transition-colors duration-300 ${
        pathName === link.url
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLinks;
