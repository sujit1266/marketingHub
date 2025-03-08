// components/ReachUsForm.tsx
import React, { useState } from 'react';
import { FormData, FormErrors } from './types';
import { PrimeReactProvider } from 'primereact/api';

const ReachUsForm: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    number: '',
    companyName: '',
    service: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '*Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = '*Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = '*Message is required';
    }

    if (!formData.number.trim()) {
      newErrors.number = '*Number is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = '*Company Name is required';
    }

    if (!formData.service.trim()) {
      newErrors.service = '*Service is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form data submitted:', formData);
      // Handle form submission (e.g., send data to an API)
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <PrimeReactProvider>
    <form onSubmit={handleSubmit} className="w-[max-content] mx-auto p-10">
     <h3 className="text-2xl font-bold text-center text-[#000]">Contact Us</h3>
     {/* <p className="text-md w-[30rem] font-bold text-center text-[#000]">We’re here to turn your ideas into reality. Connect with us today and take the first step towards success!</p> */}
      <div className="mb-4">
        {/* <label htmlFor="name" className="block text-md font-medium text-gray-500">
          Name
        </label> */}
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Name'
          className="mt-1 block w-full pr-[15rem] py-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[transparent] rounded-2xl text-[#000]"
        />
        {errors.name && <p className="text-[#000] text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        {/* <label htmlFor="email" className="block text-md font-medium text-gray-500">
          Email
        </label> */}
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Email'
          className="mt-1 block w-full pr-[15rem] py-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[transparent] rounded-2xl text-[#000]"
        />
        {errors.email && <p className="text-[#000] text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        {/* <label htmlFor="email" className="block text-md font-medium text-gray-500">
          Email
        </label> */}
        <input
          type="text"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          placeholder='Phone Number'
          className="mt-1 block w-full pr-[15rem] py-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[transparent] rounded-2xl text-[#000]"
        />
        {errors.number && <p className="text-[#000] text-sm mt-1">{errors.number}</p>}
      </div>

      <div className="mb-4">
        {/* <label htmlFor="email" className="block text-md font-medium text-gray-500">
          Email
        </label> */}
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          placeholder='Company Name'
          className="mt-1 block w-full pr-[15rem] py-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[transparent] rounded-2xl text-white"
        />
        {errors.companyName && <p className="text-white text-sm mt-1">{errors.companyName}</p>}
      </div>

      <div className="mb-4">
        {/* <label htmlFor="email" className="block text-md font-medium text-gray-500">
          Email
        </label> */}
        <input
          type="text"
          id="service"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          placeholder='Service You Want'
          className="mt-1 block w-full pr-[15rem] py-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[transparent] rounded-2xl text-white"
        />
        {errors.service && <p className="text-white text-sm mt-1">{errors.service}</p>}
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#000] text-[#fff] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 font-bold hover:bg-buttonColor"
        >
          Submit
        </button>
      </div>
    </form>
    </PrimeReactProvider>
  );
};

export default ReachUsForm;