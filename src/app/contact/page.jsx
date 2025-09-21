"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_HEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col h-full px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="flex items-center justify-center text-6xl h-1/2 lg:h-full lg:w-1/2 dark:text-white">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex flex-col justify-center gap-8 p-1 sm:p-4 lg:p-24 text-xl h-1/2 lg:h-full lg:w-1/2 bg-red-50 dark:bg-gray-800 rounded-xl"
        >
          <span className="dark:text-white">Hallo Mr-Mohamed ,</span>
          <textarea
            rows={1}
            className="bg-transparent border-b-2 outline-none resize-none border-b-black dark:border-b-white dark:text-white"
            name="user_message"
            required
          />
          <span className="dark:text-white">My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 outline-none border-b-black dark:border-b-white dark:text-white"
            required
          />
          <span className="dark:text-white">Regards</span>
          <button className="p-4 font-semibold text-gray-600 bg-purple-300 dark:bg-purple-600 dark:text-white rounded">
            Send
          </button>
          {success && (
            <span className="font-semibold text-green-600">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="font-semibold text-red-600">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
