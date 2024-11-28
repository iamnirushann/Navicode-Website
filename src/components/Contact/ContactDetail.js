import Content from "@/components/Common/Content";
import Image from "next/image"; // Import the Image component from Next.js

// ContactDetail component displaying contact information cards (WhatsApp, Email, and Mobile)
const ContactDetail = () => (
  <div className="w-full p-5 space-y-2 mt-10 lg:mt-0 flex justify-center bg-white-100">
    {/* Grid container for the contact cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      
      {/* WhatsApp Contact Card */}
      <div className="card border border-gray-200 bg-white rounded-lg shadow-md w-full max-w-xs p-6 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg mx-auto">
        <Image
          src="/images/whatsapp-icon.gif" // Image source path
          alt="WhatsApp" // Alt text for the image
          className="w-12 h-12 mb-4"
          width={48} // Set width for optimization
          height={48} // Set height for optimization
        />
        <Content title="WhatsApp" />
        {/* Displaying the WhatsApp phone number */}
        <p className="text-orange-600 text-sm">+94 21 012 3456</p>
      </div>

      {/* Email Contact Card */}
      <div className="card border border-gray-200 bg-white rounded-lg shadow-md w-full max-w-xs p-6 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg mx-auto">
        <Image
          src="/images/email-icon.gif" // Image source path
          alt="Email" // Alt text for the image
          className="w-12 h-12 mb-4"
          width={48} // Set width for optimization
          height={48} // Set height for optimization
        />
        <Content title="Email" />
        {/* Displaying the email address */}
        <p className="text-orange-600 text-sm">sample@gmail.com</p>
      </div>

      {/* Mobile Contact Card */}
      <div className="card border border-gray-200 bg-white rounded-lg shadow-md w-full max-w-xs p-6 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg mx-auto">
        <Image
          src="/images/phone-icon.gif" // Image source path
          alt="Mobile" // Alt text for the image
          className="w-12 h-12 mb-4"
          width={48} // Set width for optimization
          height={48} // Set height for optimization
        />
        <Content title="Mobile" />
        {/* Displaying the mobile number */}
        <p className="text-orange-600 text-sm">+94 21 012 3456</p>
      </div>

    </div>
  </div>
);

export default ContactDetail;
