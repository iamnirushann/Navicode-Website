import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-headercolor text-gray-100 py-5">
      <div className="flex flex-wrap justify-center max-w-[1400px] mx-auto">
        {/* Quick links */}
        <div className="flex-1 min-w-[250px] m-3 text-center">
          <h3 className="text-lg font-bold mb-3 text-black">QUICK LINKS</h3>
          <ul className="list-none px-0 mx-auto max-w-[200px]  text-center md:text-left lg:pl-11">
            <li>
              <a href="/" className="text-primarycolor hover:text-hovercolor transition duration-300">Home</a>
            </li>
            <li>
              <a href="/About" className="text-primarycolor hover:text-hovercolor transition duration-300">About us</a>
            </li>
            <li>
              <a href="/Contact" className="text-primarycolor hover:text-hovercolor transition duration-300">Contact us</a>
            </li>
            <li>
              <a href="/Careers" className="text-primarycolor hover:text-hovercolor transition duration-300">Careers</a>
            </li>
          </ul>
        </div>

        {/* Follow us */}
        <div className="flex-1 min-w-[250px] m-3 text-center">
          <h3 className="text-lg font-bold mb-3 text-hovercolor">FOLLOW US</h3>
          <div className="flex justify-center gap-4 my-3 ">
            <a href="https://www.linkedin.com" target="_blank" className="text-primarycolor hover:text-hovercolor text-2xl transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com" target="_blank" className="text-primarycolor hover:text-hovercolor text-2xl transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" className="text-primarycolor hover:text-hovercolor text-2xl transition duration-300">
              <FaWhatsapp />
            </a>
            <a href="https://www.facebook.com" target="_blank" className="text-primarycolor hover:text-hovercolor text-2xl transition duration-300">
              <FaFacebook />
            </a>
            <a href="mailto:sample@gmail.com" target="_blank" className="text-primarycolor hover:text-hovercolor text-2xl transition duration-300">
              <FaEnvelope />
            </a>
            <a href="https://www.telegram.org" target="_blank" className="text-primarycolor hover:text-hovercolor text-2xl transition duration-300">
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Contact us*/}
        <div className="flex-1 min-w-[250px] m-3 text-center">
          <h3 className="text-lg font-bold mb-3 text-black">CONTACT US</h3>
          <ul className="list-none px-0  mx-auto max-w-[200px] text-center md:text-left lg:pl-10">
            <li>
              <a href="mailto:sample@gmail.com" className="text-primarycolor hover:text-hovercolor">
                sample@gmail.com
              </a>
            </li>
            <li className="text-black ">
                +94 21 012 3456
            </li>
            <li className="text-black ">
                +94 76 123 457
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400 mt-5">
        © 2024 NAVICODE (PVT) LTD. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;