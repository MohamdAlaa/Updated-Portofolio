"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MyProiects } from "../../components/Proiects";

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["12%", "-85%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex items-center h-screen gap-4 overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-purple-300 to-red-300" />
            {MyProiects.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col items-center gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      className="object-contain "
                    />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] ">
                    {item.desc}
                  </p>
                  <div>
                    <span className="text-lg ">key_Techs :- </span>
                    <span className="text-lg">{item.key_techs}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full md:gap-4 md:flex-row sm:gap-0">
                    <Link
                      target="_blank"
                      href={item.link}
                      className="flex justify-end"
                    >
                      <button className="p-2 m-4 text-sm font-semibold text-gray-600 bg-white rounded md:p-4 md:text-md lg:text-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="7"
                          strokeLinecap="round"
                          className="lucide lucide-external-link w-4 h-4 inline mr-2"
                          aria-hidden="true"
                        >
                          <path
                            d="M15 3h6v6"
                            stroke="#000000"
                            fill="none"
                            strokeWidth="2px"
                          ></path>
                          <path
                            d="M10 14 21 3"
                            stroke="#000000"
                            fill="none"
                            strokeWidth="2px"
                          ></path>
                          <path
                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                            stroke="#000000"
                            fill="none"
                            strokeWidth="2px"
                          ></path>
                        </svg>
                        {item.link ? "Live Demo" : "Project Not Public"}
                      </button>
                    </Link>
                    <Link
                      target="_blank"
                      href={item.github_url}
                      className="flex justify-end"
                    >
                      <button className="p-2 m-4 text-sm font-semibold text-gray-600 bg-white rounded md:p-4 md:text-md lg:text-lg flex items-center gap-2">
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                        >
                          <path
                            fill="#000000"
                            fillRule="evenodd"
                            d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item.github_url ? "Code" : "Private Repo"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-16 text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-16 h-16 m-auto text-white bg-black rounded-full md:w-28 md:h-28"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
