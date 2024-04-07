import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const Red = () => {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    message: "",
    senderName: "",
    senderPhone: "",
    senderAddress: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
    setValidationErrors({ ...validationErrors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailData.senderName.trim()) {
      errors.senderName = "Please enter your name";
    }

    if (!emailData.senderAddress.trim()) {
      errors.senderAddress = "Please enter your address";
    }

    if (!phoneRegex.test(emailData.senderPhone)) {
      errors.senderPhone = "Please enter a valid phone number";
    }

    if (!emailRegex.test(emailData.to)) {
      errors.to = "Please enter a valid email address";
    }

    if (!emailData.message.trim()) {
      errors.message = "Please enter your message";
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    emailjs
      .send(
        "service_26690sh",
        "template_kxjnwy5",
        emailData,
        "_p5PlV587vBKLXVx1"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
        setTimeout(() => {
          setIsSubmitting(false);
        }, 10000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,16%,51%,1)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6 text-white">
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="relative mb-6">
                    <label htmlFor="senderName" className="text-white">
                      Your Full Name
                    </label>
                    <input
                      className={`block w-full rounded border border-transparent bg-[#1E1E1E] py-[0.32rem] px-3 focus:outline-none ${
                        validationErrors.senderName ? "border-red-500" : ""
                      }`}
                      type="text"
                      id="senderName"
                      name="senderName"
                      value={emailData.senderName}
                      onChange={handleChange}
                      required
                    />
                    {validationErrors.senderName && (
                      <p className="text-red-500 mt-1 text-sm">
                        {validationErrors.senderName}
                      </p>
                    )}
                  </div>
                  <div className="relative mb-6">
                    <label htmlFor="senderPhone" className="text-white">
                      Your Phone Number
                    </label>
                    <input
                      className={`block w-full rounded border border-transparent bg-[#1E1E1E] py-[0.32rem] px-3 focus:outline-none ${
                        validationErrors.senderPhone ? "border-red-500" : ""
                      }`}
                      type="tel"
                      id="senderPhone"
                      name="senderPhone"
                      value={emailData.senderPhone}
                      onChange={handleChange}
                      required
                      placeholder="Example: +1234567890"
                    />
                    {validationErrors.senderPhone && (
                      <p className="text-red-500 mt-1 text-sm">
                        {validationErrors.senderPhone}
                      </p>
                    )}
                  </div>

                  <div className="relative mb-6">
                    <label htmlFor="to" className="text-white">
                      Your Email Address
                    </label>
                    <input
                      className={`block w-full rounded border border-transparent bg-[#1E1E1E] py-[0.32rem] px-3 focus:outline-none ${
                        validationErrors.to ? "border-red-500" : ""
                      }`}
                      type="email"
                      id="to"
                      name="to"
                      value={emailData.to}
                      onChange={handleChange}
                      required
                      placeholder="Example: example@example.com"
                    />
                    {validationErrors.to && (
                      <p className="text-red-500 mt-1 text-sm">
                        {validationErrors.to}
                      </p>
                    )}
                  </div>

                  <div className="relative mb-6">
                    <label htmlFor="message" className="text-white">
                      Message
                    </label>
                    <textarea
                      className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${
                        validationErrors.message ? "border-red-500" : ""
                      }`}
                      name="message"
                      id="message"
                      value={emailData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {validationErrors.message && (
                      <p className="text-red-500 mt-1 text-sm">
                        {validationErrors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-3px_#3b71ca] transition duration-150 ease-in-out bg-blue-500 hover:bg-green-500 hover:shadow-[0_8px_9px_-3px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-bg-[#1E1E1E] focus:shadow-[0_8px_9px_-3px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] f"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
              {/* Social Media Contacts */}
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  {/* WhatsApp */}
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="flex items-start">
                      {/* WhatsApp Icon */}
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-2 text-primary bg-green-500">
                          <AiOutlineWhatsApp
                            style={{ fontSize: "2rem", color: "#fff" }}
                          />
                        </div>
                      </div>
                      {/* WhatsApp Contact Info */}
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Technical support
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          support@example.com
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          +1 234-567-89
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Facebook */}
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="flex items-start">
                      {/* Facebook Icon */}
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-2 text-primary bg-blue-500">
                          <AiFillFacebook
                            style={{ fontSize: "2rem", color: "#fff" }}
                          />
                        </div>
                      </div>
                      {/* Facebook Contact Info */}
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Sales questions
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          sales@example.com
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          +1 234-567-89
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Instagram */}
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="align-start flex">
                      {/* Instagram Icon */}
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-2 text-primary bg-orange-500">
                          <AiFillInstagram
                            style={{ fontSize: "2rem", color: "#fff" }}
                          />
                        </div>
                      </div>
                      {/* Instagram Contact Info */}
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">Press</p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          press@example.com
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          +1 234-567-89
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Mail */}
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="align-start flex">
                      {/* Mail Icon */}
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-2 text-primary bg-white">
                          <AiOutlineMail
                            style={{ fontSize: "2rem", color: "#000" }}
                          />
                        </div>
                      </div>
                      {/* Mail

 Contact Info */}
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Bug report
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          bugs@example.com
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          +1 234-567-89
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Red;
