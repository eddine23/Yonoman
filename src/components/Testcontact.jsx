import React, { useState, useRef } from "react";
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
    <form ref={formRef} onSubmit={handleSubmit}>
      <input
        type="email"
        name="to"
        placeholder="Recipient's Email"
        value={emailData.to}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={emailData.subject}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="senderName"
        placeholder="Your Full Name"
        value={emailData.senderName}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="senderPhone"
        placeholder="Your Phone Number"
        value={emailData.senderPhone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="senderAddress"
        placeholder="Your Address"
        value={emailData.senderAddress}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={emailData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default Red;
