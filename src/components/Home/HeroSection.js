'use client';

import { useState } from 'react'; // Hook for managing component state
import Modal from 'react-modal'; // Modal component for displaying the appointment form
import DatePicker from 'react-datepicker'; // DatePicker component for selecting dates
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for DatePicker styling
import Button from '../Common/Button'; // Reusable Button component
// Removed unused Heading and SubHeading imports

const HeroSection = () => {
  // Modal state for controlling visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // State for storing the selected date from the DatePicker
  const [selectedDate, setSelectedDate] = useState(null);

  // State for storing the form data (name and mobile number)
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
  });

  // Generate today's date for placeholder in the DatePicker
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD

  // Function to open the modal
  const openModal = () => setModalOpen(true);

  // Function to close the modal
  const closeModal = () => setModalOpen(false);

  // Function to handle changes in input fields (name and mobile)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the appointment details (this could be replaced with an API call)
    console.log('Appointment Details:', {
      ...formData,
      date: selectedDate,
    });

    // Close the modal after submission
    closeModal();

    // Display an alert after the form is submitted
    alert('Appointment successfully booked!');
  };

  return (
    <section
      className="relative text-left text-white py-24 px-5 pr-16 md:py-60 md:px-12"
      style={{
        backgroundImage: "url('/images/Hero_Section.png')", // Hero section background image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Banner Overlay for dimming the background image */}
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

        {/* Button to open the appointment modal */}
        <Button className="mt-6" onClick={openModal}>
          Make appointment
        </Button>
      </div>

      {/* Modal for Appointment Form */}
      <Modal
        isOpen={isModalOpen} // Control modal visibility
        onRequestClose={closeModal} // Function to close the modal
        className="bg-white rounded-lg shadow-lg max-w-lg mx-auto p-6"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1050]"
        ariaHideApp={false} // Disable accessibility warnings for modal (use with caution in production)
      >
        {/* Modal Title */}
        <h2 className="text-2xl font-bold mb-4">Book an appointment</h2>

        {/* Appointment Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
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

          {/* Mobile Number Input */}
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

          {/* Date Picker Input */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-medium">
              Select date
            </label>
            <DatePicker
              id="date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText={formattedToday} // Placeholder set to today's date
              required
              className="w-full border-2 border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Buttons for form submission or cancellation */}
          <div className="flex justify-end">
            {/* Cancel Button */}
            <button
              type="button"
              className="mr-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              Cancel
            </button>

            {/* Submit Button */}
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
