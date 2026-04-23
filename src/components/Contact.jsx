import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (
      !form.fullName.value ||
      !form.email.value ||
      !form.number.value ||
      !form.message.value
    ) {
      setError("Please fill all fields.");
      setTimeout(() => setError(""), 2000);
      return;
    }

    setError("");

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form,
        import.meta.env.VITE_YOUR_PUBLIC_KEY,
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          form.reset();
          setTimeout(() => setSuccess(false), 2000);
        },
        (error) => {
          console.error("Failed...", error);
          setError("Failed to send message. Try again.");
          setTimeout(() => setError(""), 2000);
        },
      );
  };

  return (
    <div className="w-full cursor-none">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="text-[3.5rem] lg:text-[4rem] xl:w-fit font-bold max-w-[800px] text-center lg:text-start leading-none my-10 lg:my-14"
      >
        LET'S WORK <br />
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="text-[#474649] list-none"
        >
          TOGETHER
        </motion.li>
      </motion.h1>

      <form
        ref={formRef}
        className="grid grid-cols-1 max-w-full  p-5 space-y-4"
        onSubmit={sendEmail}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <motion.label htmlFor="fullName">Full Name</motion.label>
            <motion.input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
              required
            />
          </div>
          <div className="space-y-2">
            <motion.label htmlFor="number">Mobile Number</motion.label>
            <motion.input
              type="number"
              name="number"
              placeholder="Number"
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <motion.label htmlFor="email">Email</motion.label>
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
            required
          />
        </div>
        <div className="space-y-2">
          <motion.label htmlFor="message">Message</motion.label>
          <motion.textarea
            name="message"
            cols="30"
            rows="3"
            placeholder="Message..."
            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
            required
          ></motion.textarea>
        </div>
        <button type="submit" className="bg-[#F46C38] rounded-xl py-2">
          Submit
        </button>
      </form>

      <div className="flex flex-col items-center">
        {/* Show error message */}
        {
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-red-500 my-2"
          >
            {error}
          </motion.p>
        }

        {/* Show success message */}
        {success && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-green-500 bg-white p-2 rounded-xl my-3 px-4  block w-fit"
          >
            SUCCESS! Message Sent.
          </motion.span>
        )}
      </div>
    </div>
  );
}

export default Contact;
