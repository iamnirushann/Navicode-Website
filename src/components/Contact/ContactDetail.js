import Content from "@/components/Common/Content";

const ContactDetail = () => (
  <div className="w-full p-5  space-y-2 mt-10 lg:mt-0 flex justify-center bg-white-100">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {/* WhatsApp Card */}
      <div className="card border border-gray-200 bg-white rounded-lg shadow-md w-full max-w-xs p-6 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg mx-auto">
        <img
          src="/images/whatsapp-icon.gif"
          alt="WhatsApp"
          className="w-12 h-12 mb-4"
        />
        <Content title="WhatsApp" />
        <p className="text-orange-600 text-sm">+94 21 012 3456</p>
      </div>

      {/* Email Card */}
      <div className="card border border-gray-200 bg-white rounded-lg shadow-md w-full max-w-xs p-6 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg mx-auto">
        <img
          src="/images/email-icon.gif"
          alt="Email"
          className="w-12 h-12 mb-4"
        />
        <Content title="Email" />
        <p className="text-orange-600 text-sm">sample@gmail.com</p>
      </div>

      {/* Mobile Card */}
      <div className="card border border-gray-200 bg-white rounded-lg shadow-md w-full max-w-xs p-6 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg mx-auto">
        <img
          src="/images/phone-icon.gif"
          alt="Mobile"
          className="w-12 h-12 mb-4"
        />
        <Content title="Mobile" />
        <p className="text-orange-600 text-sm">+94 21 012 3456</p>
      </div>
    </div>
  </div>
);

export default ContactDetail;