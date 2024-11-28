import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope, FaTelegram, FaPhone, } from 'react-icons/fa'; // Import social media icons from react-icons
import Link from 'next/link'; // Import the Link component from Next.js
import { FaSquareYoutube,  } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-headercolor text-gray-100 py-5">
      <div className="flex flex-wrap justify-center max-w-[1400px] mx-auto">
        {/* Quick Links Section */}
        <div className="flex-1 min-w-[250px] m-3 text-center">
          <h3 className="text-lg font-bold mb-3 text-black">QUICK LINKS</h3>
          <ul className="list-none px-0 mx-auto max-w-[200px] text-center md:text-left lg:pl-11">
            {/* List of navigation links */}
            <li>
  <Link href="/" legacyBehavior>
    <a className="text-primarycolor hover:text-hovercolor transition duration-300">Home</a>
  </Link>
</li>
<li>
  <Link href="/About" legacyBehavior>
    <a className="text-primarycolor hover:text-hovercolor transition duration-300">About us</a>
  </Link>
</li>
<li>
  <Link href="/Contact" legacyBehavior>
    <a className="text-primarycolor hover:text-hovercolor transition duration-300">Contact us</a>
  </Link>
</li>
<li>
  <Link href="/Careers" legacyBehavior>
    <a className="text-primarycolor hover:text-hovercolor transition duration-300">Careers</a>
  </Link>
</li>

          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex-1 min-w-[250px] m-3 text-center">
          <h3 className="text-lg font-bold mb-3 text-hovercolor">FOLLOW US</h3>
          {/* Social media icons */}
          <div className="flex justify-center gap-4 my-3">
            <a href="https://www.linkedin.com" target="_blank" className="text-primarycolor hover:text-hovercolor text-2xl transition duration-300">
              <FaLinkedin /> {/* LinkedIn Icon */}
            </a>
            <a href="https://www.instagram.com" target="_blank" className="text-primarycolor hover:text-hovercolor text-2xl transition duration-300">
              <FaInstagram /> {/* Instagram Icon */}
            </a>
            <a href="https://www.facebook.com" target="_blank" className="text-primarycolor hover:text-hovercolor text-2xl transition duration-300">
              <FaFacebook /> {/* Facebook Icon */}
            </a>
            <a href="https://www.youtube.com" target="_blank" className="text-primarycolor hover:text-hovercolor text-2xl transition duration-300">
              <FaSquareYoutube /> {/* Youtube Icon */}
            </a>
            <a href="https://www.telegram.org" target="_blank" className="text-primarycolor hover:text-hovercolor text-2xl transition duration-300">
              <FaTelegram /> {/* Telegram Icon */}
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex-1 min-w-[250px] m-3 text-center">
          <h3 className="text-lg font-bold mb-3 text-black">CONTACT US</h3>
          <ul className="list-none px-0 mx-auto max-w-[200px] lg:max-w-[250px] text-center md:text-left lg:pl-10">
            {/* Contact email and phone numbers */}
            <li>
              <a href="mailto:info@navicode.cloud
" className="text-primarycolor hover:text-hovercolor flex gap-2">
              <FaEnvelope className='text-xl'/>info@navicode.cloud
              </a>
            </li>
            <li className="text-black flex gap-2">
            <FaPhone className='text-xl'/>+94751377545
            </li>
            <li className="text-black flex gap-2">
            <FaWhatsapp className='text-2xl'/>+94751377545
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Information */}
      <p className="text-center text-sm text-gray-400 mt-5">
        © 2024 NAVICODE (PVT) LTD. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
