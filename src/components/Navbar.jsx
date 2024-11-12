"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
    backgroundColor: "rgb(255,255,255)",
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
    backgroundColor: "rgb(255,255,255)",
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
          className="flex items-center justify-center p-1 text-sm font-semibold bg-black rounded-md"
        >
          <span className="mr-1 text-white">Mohamed</span>
          <span className="flex items-center justify-center w-12 h-8 text-black bg-white rounded">
            Alaa
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="w-1/3 gap-4 social md:flex">
        <Link href="https://github.com/MohamdAlaa">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.facebook.com/mohamed.elmnyawe.7">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://x.com/MohamedAla4863">
          <Image src="/twitter.svg" alt="" width={22} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/mohamed-alaa-elmenyawe/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="relative z-50 flex flex-col justify-between w-10 h-8"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className={`w-10 h-1 origin-left 
              bg-black
             rounded`}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className={`w-10 h-1 origin-left 
              bg-black
             rounded`}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className={`w-10 h-1 origin-left 
              bg-black
             rounded`}
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black"
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
