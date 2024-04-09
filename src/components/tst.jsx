import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    fullName: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" }); // Clear error if input is changed
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fullNameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+){1,}$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const messageRegex = /^(?!.*(.)\1{4,})(?=(.*\s){5,})(?=.{20,}).*$/;

    let formErrors = {};

    // Email validation
    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = "Please enter a valid email";
    }

    // Full name validation
    if (!formData.fullName || !fullNameRegex.test(formData.fullName)) {
      formErrors.fullName =
        "Full Name must contain at least 6 characters with at least one space and only letters";
    }

    // Phone number validation
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      formErrors.phone = "Please enter a valid phone number";
    }

    // Message validation
    if (!formData.message || !messageRegex.test(formData.message)) {
      formErrors.message =
        "Message must be at least 20 characters long, not contain a single repeated character 5 or more times, and have at least 5 spaces";
    }

    if (Object.keys(formErrors).length === 0) {
      // If no errors, submit the form
      alert("Form submitted successfully!");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.email && "border-red-500"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name:
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.fullName && "border-red-500"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs italic">{errors.fullName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number:
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.phone && "border-red-500"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic">{errors.phone}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            className={`shadow appearance-none border ${
              errors.message && "border-red-500"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-xs italic">{errors.message}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
