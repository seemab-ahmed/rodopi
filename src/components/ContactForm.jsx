'use client';
import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mb-8 max-w-xl mx-auto my-[80px]">
      <h2 className="text-2xl font-bold mb-6 text-primary">Contact Us</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Message</label>
        <textarea rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"></textarea>
      </div>
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded focus:outline-none pr-2" />
          <span className="ml-2 text-sm text-gray-600">I agree to the Data Protection</span>
        </label>
      </div>
      <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition">Send Message</button>
      <p className="text-xs text-gray-500 mt-2">Your message will be sent to info@rodopi.de</p>
    </div>
  );
};

export default ContactForm;