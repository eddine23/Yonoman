import React, { useState, useRef } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

import emailjs from "emailjs-com";

const Red = () => {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    message: "",
    senderName: "",
    senderPhone: "",
    senderAddress: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access the form using the ref
    const formData = new FormData(formRef.current);

    // Send email using EmailJS
    emailjs
      .send(
        "service_26690sh",
        "template_kxjnwy5",
        emailData,
        "_p5PlV587vBKLXVx1",
        {
          senderName: emailData.senderName,
          senderPhone: emailData.senderPhone,
          senderAddress: emailData.senderAddress,
        }
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email");
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
                  <div
                    className="relative mb-6 text-white"
                    data-te-input-wrapper-init
                  >
                    <input
                      className="block w-full rounded border-0 bg-[#1E1E1E] py-[0.32rem] px-3 "
                      type="text"
                      name="senderName"
                      placeholder="Your Full Name"
                      value={emailData.senderName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      className="block w-full rounded border-0 bg-[#1E1E1E] py-[0.32rem] px-3 "
                      type="text"
                      name="senderAddress"
                      placeholder="Your Address"
                      value={emailData.senderAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      className="block w-full rounded border-0 bg-[#1E1E1E] py-[0.32rem] px-3 "
                      type="tel"
                      name="senderPhone"
                      placeholder="Your Phone Number"
                      value={emailData.senderPhone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="message"
                      placeholder="Message"
                      value={emailData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    value="Send"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-3px_#3b71ca] transition duration-150 ease-in-out bg-blue-500 hover:bg-green-500 hover:shadow-[0_8px_9px_-3px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-bg-[#1E1E1E] focus:shadow-[0_8px_9px_-3px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] f"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-2 text-primary bg-green-500">
                          <AiOutlineWhatsApp
                            style={{
                              fontSize: "2rem",
                              color: "#fff",
                            }}
                          />
                        </div>
                      </div>
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
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-2 text-primary bg-green-500">
                          <AiOutlineWhatsApp
                            style={{
                              fontSize: "2rem",
                              color: "#fff",
                            }}
                          />
                        </div>
                      </div>
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
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-2 text-primary bg-green-500">
                          <AiOutlineWhatsApp
                            style={{
                              fontSize: "2rem",
                              color: "#fff",
                            }}
                          />
                        </div>
                      </div>
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
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-2 text-primary bg-green-500">
                          <AiOutlineWhatsApp
                            style={{
                              fontSize: "2rem",
                              color: "#fff",
                            }}
                          />
                        </div>
                      </div>
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
