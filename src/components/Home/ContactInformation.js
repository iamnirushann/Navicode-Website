import React from "react";
import Heading from "../Common/Heading"; // Importing the Heading component to display the main heading
import Content from "../Common/Content"; // Importing the Content component for displaying subtext
import Image from "next/image"; // Import Image component from Next.js

// Contact options, which includes different methods to reach out to the company
const contactOptions = [
  {
    id: 1,
    icon: "/images/whatsapp-icon.gif", // Icon for WhatsApp
    title: "Chat with us", // Title for WhatsApp contact method
    linkText: "Start chat", // Text to display for the WhatsApp link
    link: "https://wa.me/1234567890", // WhatsApp link
  },
  {
    id: 2,
    icon: "/images/email-icon.gif", // Icon for Email
    title: "Email us", // Title for Email contact method
    linkText: "Send mail", // Text to display for the Email link
    link: "mailto:example@example.com", // Email link
  },
  {
    id: 3,
    icon: "/images/phone-icon.gif", // Icon for Phone
    title: "Call us", // Title for Phone contact method
    linkText: "Make a call", // Text to display for the Phone link
    link: "tel:+1234567890", // Phone number link
  },
];

const ContactInformation = () => {
  return (
    <div className="bg-background py-12 px-6 lg:px-28"> {/* Container with background and padding */}
      
      {/* Heading Section */}
      <div className="text-center mb-10">
        {/* Display main heading and content using Heading and Content components */}
        <Heading title="Contact us" />
        <Content title="Reach out to us using any of the methods below. We’re here to help!" />
      </div>

      {/* Contact Details Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 space-y-8 lg:space-y-0">
        {/* Loop through each contact option */}
        {contactOptions.map((option) => (
          <div
            key={option.id} // Unique key for each contact option
            className="text-center lg:text-left lg:flex lg:items-center lg:space-x-4" // Flexbox layout for mobile/desktop
          >
            {/* Icon Display */}
            <div className="w-12 h-12 mx-auto lg:mx-0">
              <Image
                src={option.icon} // Display the appropriate icon for the contact method
                alt={option.title} // Alt text for the icon image
                width={48} // Set width for optimization
                height={48} // Set height for optimization
              />
            </div>
            {/* Title and Link Section */}
            <div>
              {/* Display the title for each contact method */}
              <h2 className="text-lg font-semibold text-textcolor mt-2 lg:mt-0">
                {option.title}
              </h2>
              {/* Display the link to contact, open in a new tab */}
              <a
                href={option.link} // Link to the contact method (WhatsApp, Email, Phone)
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security feature for external links
                className="text-primarycolor font-semibold hover:text-hovercolor transition-colors duration-300"
              >
                {option.linkText} {/* Link text */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInformation;
