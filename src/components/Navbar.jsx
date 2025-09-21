"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
  },
};
const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
  },
};

const listVariants = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between h-full px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="w-1/3 gap-4 links md:flex">
        {links.map((link) => (
          <NavLinks link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="flex items-center justify-center p-1 text-sm font-semibold bg-black dark:bg-white rounded-md"
        >
          <span className="mr-1 text-white dark:text-black">Mohamed</span>
          <span className="flex items-center justify-center w-12 h-8 text-black dark:text-white bg-white dark:bg-black rounded">
            Alaa
          </span>
        </Link>
      </div>

      {/* SOCIAL */}

      <div className="w-1/3 gap-10 social md:flex  items-center ">
        <Link
          target="_blank"
          href="https://github.com/MohamdAlaa"
          className="bg-white border border-gray-300 rounded-full"
        >
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/mohamed.elmnyawe.7"
        >
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link
          target="_blank"
          href="https://x.com/MohamedAla4863"
          className="bg-white border border-gray-300 rounded-full"
        >
          <Image src="/twitter.svg" alt="" width={22} height={24} />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/mohamed-alaa-elmenyawe/"
        >
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* mood and sun icon */}
      <div className=" md:hidden lg:flex">
        <ThemeToggle />
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className={
            open
              ? `relative z-50 flex flex-col justify-between w-10 h-8 `
              : `relative z-50 flex flex-col justify-between w-10 h-8 `
          }
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className={
              open
                ? `w-10 h-1 origin-left 
              bg-white dark:bg-black
             rounded`
                : `w-10 h-1 origin-left 
              bg-black dark:bg-white
             rounded`
            }
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className={`w-10 h-1 origin-left 
              bg-black dark:bg-white
             rounded`}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className={
              open
                ? `w-10 h-1 origin-left 
              bg-white dark:bg-black
             rounded`
                : `w-10 h-1 origin-left 
              bg-black dark:bg-white
             rounded`
            }
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black dark:bg-white dark:text-black"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
