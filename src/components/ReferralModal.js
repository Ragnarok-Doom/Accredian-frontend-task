import React from 'react';
import { useForm } from 'react-hook-form';

const ReferralModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log('Form Data:', data);
    try {
      const response = await fetch('http://localhost:5000/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('API Response:', result);
      onClose();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md w-1/2">
        <h2 className="text-2xl mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2">Your Name</label>
            <input {...register('referrerName', { required: true, pattern: /^[A-Za-z\s]+$/ })} className="w-full p-2 border border-gray-300 rounded" />
            {errors.referrerName && <span className="text-red-500">Name is required and must only contain letters and spaces</span>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Your Email</label>
            <input {...register('referrerEmail', { required: true })} className="w-full p-2 border border-gray-300 rounded" />
            {errors.referrerEmail && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Friend's Name</label>
            <input {...register('refereeName', { required: true, pattern: /^[A-Za-z\s]+$/ })} className="w-full p-2 border border-gray-300 rounded" />
            {errors.refereeName && <span className="text-red-500">Name is required and must only contain letters and spaces</span>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Friend's Email</label>
            <input {...register('refereeEmail', { required: true })} className="w-full p-2 border border-gray-300 rounded" />
            {errors.refereeEmail && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Friend's Mobile No</label>
            <input {...register('refereeMobile', { required: true, pattern: /^\d+$/ })} className="w-full p-2 border border-gray-300 rounded" />
            {errors.refereeMobile && <span className="text-red-500">Mobile number must only contain digits</span>}
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
        <button onClick={onClose} className="mt-4 text-red-600">Close</button>
      </div>
    </div>
  );
};

export default ReferralModal;
