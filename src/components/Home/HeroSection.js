'use client';

import { useState } from 'react';
import Modal from 'react-modal'; // For the modal
import DatePicker from 'react-datepicker'; // For the date picker
import 'react-datepicker/dist/react-datepicker.css'; // Datepicker CSS
import Button from '../Common/Button';
import Heading from '../Common/Heading';
import SubHeading from '../Common/SubHeading';

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
  });

  // Generate today's date as a placeholder
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Details:', {
      ...formData,
      date: selectedDate,
    });
    closeModal();
    alert('Appointment successfully booked!');
  };

  return (
    <section
      className="relative text-left text-white py-24 px-5 pr-16 md:py-60 md:px-12"
      style={{
        backgroundImage: "url('/images/Hero_Section.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Banner Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-5 z-0"></div>

      <div className="container mx-auto relative z-10">
        {/* Hero Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold md:leading-tight leading-tight lg:leading-tight">
          We explore the internet today, committed to shaping the digital landscape of tomorrow.
        </h1>

        {/* Hero Paragraph */}
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Guiding clients through the tech landscape, creating digital solutions, and pushing the boundaries of innovation.
        </p>

        {/* Button */}
        <Button className="mt-6" onClick={openModal}>
          Make appointment
        </Button>
      </div>

      {/* Modal for Appointment Form */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="bg-white rounded-lg shadow-lg max-w-lg mx-auto p-6"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1050]"
        ariaHideApp={false} // Avoid warnings for accessibility
      >
        <h2 className="text-2xl font-bold mb-4">Book an appointment</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              required
              className="w-full border-2 border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700 font-medium">
              Mobile number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="+94761234567"
              required
              className="w-full border-2 border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-medium">
              Select date
            </label>
            <DatePicker
              id="date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText={formattedToday} // Dynamic placeholder for today's date
              required
              className="w-full border-2 border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              Cancel
            </button>
            <Button type="submit">
              Confirm appointment
            </Button>
          </div>
        </form>
      </Modal>
    </section>
  );
};

export default HeroSection;
