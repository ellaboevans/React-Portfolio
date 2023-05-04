import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setFullName("");
    setEmail("");
    setMessage("");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        console.log("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="w-screen py-8 dark:bg-slate-800 duration-100">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:flex flex-col items-center px-4"
      >
        <h2 className="text-center dark:text-gray-100 uppercase font-bold text-[22px] my-8 ">
          Let's Get In Touch
        </h2>
        <div className="flex flex-col mx-auto  md:w-[800px] bg-gray-200 dark:bg-slate-700 rounded  p-2">
          <div className="flex flex-col md:flex-row  gap-14 items-stretch my-4 ">
            <div className="flex justify-center flex-col w-full">
              <label
                htmlFor="fullName"
                className=" font-semibold text-[22px] text-slate-700 dark:text-gray-200"
              >
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                id="fullName"
                value={fullName}
                onChange={(e) => console.log(setFullName(e.target.value))}
                placeholder="Enter your full name"
                className="py-2 dark:text-white bg-transparent dark:bg-transparent border-0 border-b-2 focus:outline-none border-slate-500  dark:border-slate-200 "
                required
              />
            </div>
            <div className="flex flex-col ml-2 w-full">
              <label
                htmlFor="email"
                className=" font-semibold text-[22px] text-slate-700 dark:text-gray-200 "
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                value={email}
                onChange={(e) => console.log(setEmail(e.target.value))}
                placeholder="Enter your email address"
                className="py-2 dark:text-white bg-transparent  dark:bg-transparent border-0 border-b-2 focus:outline-none border-slate-500   dark:border-slate-200"
                required
              />
            </div>
          </div>
          <div className="flex flex-col my-5">
            <label
              htmlFor="message"
              className="font-semibold text-[22px] text-slate-700 dark:text-gray-200"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => console.log(setMessage(e.target.value))}
              placeholder="Send us a message"
              className=" dark:text-white bg-transparent  dark:bg-transparent border-0 border-b-2 focus:outline-none border-slate-500  dark:border-slate-200"
              required
            />
          </div>
          <input
            type="submit"
            value="Reach Out to Us"
            className="dark:text-white text-[18px] text-slate-700 font-semibold bg-gray-300 outline-slate-800 outline outline-1 hover:outline-none dark:outline-gray-200 hover:outline-0 shadow-lg dark:bg-slate-700 w-full py-2 px-4 mt-2 dark:hover:bg-slate-500 rounded-md hover:bg-sky-600 transition hover:text-white cursor-pointer
            "
          />
        </div>
      </form>
    </section>
  );
}

export default Form;
