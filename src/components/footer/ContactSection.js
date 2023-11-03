import React from "react";
import email from "../../assets/email.svg";

const ContactSection = () => {
  return (
    <div className="flex justify-between bg-blue-900 text-white p-10 items-center">
      <div className="flex items-center">
        <div>
          <img className="h-10 w-10 mr-6" src={email} alt="email" />
        </div>
        <div className="details">
          <h3 className="text-lg font-bold">Your Travel Journey Starts Here</h3>
          <p>Sign up, and we'll send the best deals to you</p>
        </div>
      </div>

      <div className="email-details flex">
        <input
          type="text"
          placeholder="Your Email"
          className="p-2 rounded-md w-96 bg-white focus:outline-none focus:ring focus:border-blue-500 text-gray-400"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md ml-4">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
