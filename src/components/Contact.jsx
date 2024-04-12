import React, { useState, useEffect } from "react";
import {
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { RiTiktokLine } from "react-icons/ri";

import emailjs from "emailjs-com";

const Contact = () => {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    message: "",
    senderName: "",
    senderPhone: "",
    senderAddress: "",
  });

  const [errors, setErrors] = useState({
    senderName: "",
    senderAddress: "",
    senderPhone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setInterval(() => {
        setLoadingProgress((prevProgress) => Math.min(prevProgress + 25, 100));
      }, 50);
    } else {
      setLoadingProgress(0);
    }

    return () => clearInterval(timer);
  }, [loading]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
    // Validate the field and update errors state
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const newErrors = {};
    Object.keys(emailData).forEach((key) => {
      newErrors[key] = validateField(key, emailData[key]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      setMessageStatus("error");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        "service_26690sh",
        "template_kxjnwy5",
        emailData,
        "_p5PlV587vBKLXVx1"
      );
      setMessageStatus("success");
      setLoading(false);
    } catch (error) {
      console.error("Error sending email:", error);
      setMessageStatus("error");
      setLoading(false);
    }

    setTimeout(() => {
      setMessageStatus(null);
      setEmailData({
        message: "",
        senderName: "",
        senderPhone: "",
        senderAddress: "",
      });
    }, 3000);
  };

  const validateField = (name, value) => {
    switch (name) {
      case "senderName":
        return validateName(value);
      case "senderAddress":
        return validateEmail(value) ? "" : "Please enter a valid email address";
      case "senderPhone":
        return validatePhoneNumber(value)
          ? ""
          : "Please enter a valid phone number";
      case "message":
        return value ? "" : "Please enter a message";
      default:
        return "";
    }
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z]{3,}$/;
    return nameRegex.test(name)
      ? ""
      : "Please enter a valid name (at least 3 letters, letters only)";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{9,14}$/;
    return phoneRegex.test(phone);
  };

  return (
    <div className="container my-12 mx-auto md:px-6" id="Contact us">
      <section>
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,16%,51%,1)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6 text-white">
                <form onSubmit={handleSubmit}>
                  <div className="relative mb-6 text-white">
                    <input
                      className={`block w-full rounded  outline-none border-2 bg-[#161616] ${
                        errors.senderName
                          ? "border-red-500"
                          : "border-[#212121]"
                      }  py-[0.32rem] px-3 focus:border-[#EBCF5B]`}
                      type="text"
                      name="senderName"
                      placeholder="Your Full Name"
                      value={emailData.senderName}
                      onChange={handleChange}
                      required
                    />
                    {errors.senderName && (
                      <p className="text-red-500 text-xs italic">
                        {errors.senderName}
                      </p>
                    )}
                  </div>
                  <div className="relative mb-6">
                    <input
                      className={`block w-full rounded  outline-none border-2 ${
                        errors.senderAddress
                          ? "border-red-500"
                          : "border-[#212121]"
                      } bg-[#161616] py-[0.32rem] px-3 focus:border-[#EBCF5B]`}
                      type="email"
                      name="senderAddress"
                      placeholder="Your Address"
                      value={emailData.senderAddress}
                      onChange={handleChange}
                      required
                    />
                    {errors.senderAddress && (
                      <p className="text-red-500 text-xs italic">
                        {errors.senderAddress}
                      </p>
                    )}
                  </div>
                  <div className="relative mb-6">
                    <input
                      className={`block w-full rounded  outline-none border-2 ${
                        errors.senderPhone
                          ? "border-red-500"
                          : "border-[#212121]"
                      } bg-[#161616] py-[0.32rem] px-3 focus:border-[#EBCF5B]`}
                      type="tel"
                      name="senderPhone"
                      placeholder="Your Phone Number"
                      value={emailData.senderPhone}
                      onChange={handleChange}
                      required
                    />
                    {errors.senderPhone && (
                      <p className="text-red-500 text-xs italic">
                        {errors.senderPhone}
                      </p>
                    )}
                  </div>
                  <div className="relative mb-6">
                    <textarea
                      className={`block w-full rounded  outline-none border-2 ${
                        errors.message ? "border-red-500" : "border-[#212121]"
                      } bg-[#161616] py-[0.32rem] px-3 focus:border-[#EBCF5B]`}
                      name="message"
                      placeholder="Message"
                      value={emailData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs italic">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    value="Send"
                    className="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-3px_#EBCF5B] transition duration-150 ease-in-out bg-[#EBCF5B] hover:bg-green-500 hover:shadow-[0_8px_9px_-3px_rgba(192, 202, 59, 0.3),0_4px_18px_0_rgba(202, 200, 59, 0.2)] focus:bg-bg-[#1E1E1E] focus:shadow-[0_8px_9px_-3px_rgba(171, 202, 59, 0.3),0_4px_18px_0_rgba(176, 202, 59, 0.2)]"
                  >
                    Send
                  </button>
                </form>
                {loading && (
                  <div className="w-full h-2 bg-gray-500 rounded-full">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{
                        width: `${loadingProgress}%`,
                        transition: "width 1s linear",
                      }}
                    ></div>
                  </div>
                )}
                {messageStatus === "success" && (
                  <div className="text-green-500">
                    We successfully received your message
                  </div>
                )}
                {messageStatus === "error" && (
                  <div className="text-red-500">
                    Message not sent!! Please check your information
                  </div>
                )}
                {messageStatus === "error" && (
                  <div className="text-red-500">
                    Message not sent!! Please check your information
                  </div>
                )}
              </div>
              <div className="w-full my-auto shrink-0  grow-0 basis-auto lg:w-7/12">
                <h1 className="max-w-[80%] mx-auto text-white text-center md:text-3xl  font-bold mb-10">
                  Contact us via email or through our social media
                </h1>
                <div className="flex flex-wrap">
                  <div className="flex flex-wrap mx-auto">
                    {/* WhatsApp */}
                    <div className="w-full mb-12 flex justify-center shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
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
                        <div className="ml-4 mb-4 ">
                          <h1 className="font-bold dark:text-white ">
                            Whatsapp
                          </h1>
                          <p className=" dark:text-white ">Whatsapp</p>
                        </div>
                      </div>
                    </div>
                    {/* Facebook */}
                    <div className="mb-12 w-full flex justify-center shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
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
                        <div className="ml-4 mb-4 ">
                          <h1 className="font-bold dark:text-white ">
                            Facebook
                          </h1>
                          <p className=" dark:text-white ">Facebook</p>
                        </div>
                      </div>
                    </div>
                    {/* Instagram */}
                    <div className="mb-12 w-full flex justify-center shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
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
                        <div className="ml-4 mb-4 ">
                          <h1 className="font-bold dark:text-white ">
                            Instagram
                          </h1>
                          <p className=" dark:text-white ">Instagram</p>
                        </div>
                      </div>
                    </div>
                    {/* TikTok */}
                    <div className="mb-12 w-full flex justify-center shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div className="align-start flex">
                        {/* TikTok Icon */}
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-2 text-primary bg-black">
                            <RiTiktokLine
                              style={{ fontSize: "2rem", color: "#ffffff" }}
                            />
                          </div>
                        </div>
                        <div className="ml-4 mb-4 ">
                          <h1 className="font-bold dark:text-white ">TikTok</h1>
                          <p className=" dark:text-white ">TikTok</p>
                        </div>
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

export default Contact;
