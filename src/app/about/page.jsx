"use client";
import BrainSvg from "@/components/BrainSvg";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-24 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col justify-center gap-12">
            {/* BIOGRAPHY TITLE */}
            <h1 className="text-2xl font-bold">SUMMARY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Results-driven Front End Developer skilled in designing ,
              implementing responsive and user-friendly web interfaces.
              Proficient in HTML, CSS, JavaScript (ES6), and TypeScript, with
              extensive experience using frameworks and libraries such as
              React.js, Redux, and Next.js. Adept at collaborating with
              cross-functional teams to deliver high quality web applications.
              Strong problem-solving skills and a keen eye for detail, committed
              to staying updated with the latest industry trends and
              technologies
            </p>

            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <Image
                src="/signature.png"
                alt="signature"
                width={180}
                height={76}
              />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col justify-center gap-12" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Javascript
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Typescript
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Next.js
              </div>

              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                jQuery
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Jest
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Gulp
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Material-UI
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Ant Design
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Rest Api
              </div>

              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Framer Motion
              </div>

              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Vite
              </div>

              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Git
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Figma
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Communication
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Critical thinking
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Time management
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Problem solving
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col justify-center gap-12 pb-48 "
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between sm:h-56 md:h-52 lg:h-60">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="p-3 font-semibold bg-white rounded-b-lg rounded-s-lg">
                    Front End Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    <ul className="list-disc ">
                      <li>
                        Developed and maintained responsive web applications.
                      </li>
                      <li>
                        Collaborated with Back-End Team for integration like
                        Authentication and authorisation.
                      </li>
                      <li>
                        Built multi-language support and customized UI
                        components.
                      </li>
                      <li>
                        Collaborated closely on UX improvements and state
                        management.
                      </li>
                    </ul>
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 text-sm font-semibold bg-white rounded w-fit">
                    Not Found Agance
                  </div>
                </div>
                {/* CENTER */}
                <div className="flex justify-center w-1/6">
                  {/* LINE */}
                  <div className="relative w-1 h-full bg-gray-600 rounded">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="flex justify-center w-1/6">
                  {/* LINE */}
                  <div className="relative w-1 h-full bg-gray-600 rounded">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="p-3 font-semibold bg-white rounded-b-lg rounded-s-lg">
                    Front End Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    <ul className="list-disc ">
                      <li>
                        Designed web applications with a focus on responsive
                        design and API integration.
                      </li>
                      <li>
                        Collaborated with front-end, back-end, UI, and mobile
                        teams.
                      </li>
                      <li>
                        Built client relationships by addressing client needs
                        effectively.
                      </li>
                    </ul>
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">
                    2022
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 text-sm font-semibold bg-white rounded w-fit">
                    Ebda
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="p-3 font-semibold bg-white rounded-b-lg rounded-s-lg">
                    React JS Training.
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    <ul className="list-disc ">
                      <li>learned React library.</li>
                      <li>Gained expertise in Redux and state management.</li>
                      <li>
                        Developed a final project app utilizing all learned
                        concepts.
                      </li>
                    </ul>
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">
                    2021
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 text-sm font-semibold bg-white rounded w-fit">
                    App Scoure
                  </div>
                </div>
                {/* CENTER */}
                <div className="flex justify-center w-1/6">
                  {/* LINE */}
                  <div className="relative w-1 h-full bg-gray-600 rounded">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="sticky top-0 z-30 w-1/3 brain lg:block xl:w-1/2">
          <BrainSvg scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
