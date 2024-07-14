import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-4xl min-w-[200px] w-full mx-auto lg:w-1/2 py-12 p-6 bg-white shadow-[0_10px_20px_rgba(0,_0,_0,_0.1)] rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="whatsapp" className="block text-gray-700">WhatsApp Number</label>
            <input type="text" id="whatsapp" name="whatsapp" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
            <input type="text" id="phone" name="phone" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea id="message" name="message" className="mt-1 block w-full p-2 border border-gray-300 rounded-md h-32"></textarea>
        </div>
        <button type="submit" className="mt-6 bg-white text-black border-black border-[1px] hover:bg-black hover:text-white py-2 px-4 rounded-md transition duration-200">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

