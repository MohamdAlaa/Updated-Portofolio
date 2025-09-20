"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="h-full "
    >
      <div className="h-full">
        <div className="flex flex-col h-full px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* IMAGE CONTAINER */}
          <div className="relative h-1/2 lg:h-full lg:w-1/2">
            <Image src="/hero.png" alt="" fill className="object-contain" />
          </div>
          {/* TEXT CONTAINER */}
          <div className="flex flex-col items-center justify-center gap-8 h-1/2 lg:h-full lg:w-1/2">
            {/* TITLE */}
            <h1 className="text-4xl font-bold md:text-6xl">
              Crafting Digital Experiences, Designing Tomorrow.
            </h1>
            {/* DESC */}
            <p className="md:text-xl">
              Welcome to my Personal portfolio, where innovation and creativity
              converge. With a keen eye for aesthetics and a mastery of code, my
              portfolio showcases a diverse collection of projects that reflect
              my commitment to excellence.
            </p>
            {/* BUTTONS */}
            <div className="flex w-full gap-4">
              <Link
                href="/portfolio"
                className="p-4 text-white bg-black rounded-lg ring-1 ring-black hover:scale-90 transition-all duration-300 "
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="p-4 rounded-lg ring-1 ring-black hover:scale-90 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
