import React from "react";
import Heading from "../Common/Heading";
import Content from "../Common/Content";

const contactOptions = [
  {
    id: 1,
    icon: "/images/whatsapp-icon.gif",
    title: "Chat with us",
    linkText: "Start chat",
    link: "https://wa.me/1234567890",
  },
  {
    id: 2,
    icon: "/images/email-icon.gif",
    title: "Email us",
    linkText: "Send mail",
    link: "mailto:example@example.com",
  },
  {
    id: 3,
    icon: "/images/phone-icon.gif",
    title: "Call us",
    linkText: "Make a call",
    link: "tel:+1234567890",
  },
];

const ContactInformation = () => {
  return (
    <div className="bg-background py-12 px-6 lg:px-28">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <Heading title="Contact us" />
        <Content title="Reach out to us using any of the methods below. We’re here to help!" />
      </div>

      {/* Contact Details Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 space-y-8 lg:space-y-0">
        {contactOptions.map((option) => (
          <div
            key={option.id}
            className="text-center lg:text-left lg:flex lg:items-center lg:space-x-4"
          >
            {/* Icon */}
            <img
              src={option.icon}
              alt={option.title}
              className="w-12 h-12 mx-auto lg:mx-0"
            />
            {/* Title and Link */}
            <div>
              <h2 className="text-lg font-semibold text-textcolor mt-2 lg:mt-0">
                {option.title}
              </h2>
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primarycolor font-semibold hover:text-hovercolor transition-colors duration-300"
              >
                {option.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInformation;
