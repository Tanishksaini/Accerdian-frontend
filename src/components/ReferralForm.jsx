import React from 'react';
import { useForm } from 'react-hook-form';

const ReferralForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Refer a Friend</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="your-name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="your-name"
            {...register("yourName", { required: "Your name is required" })}
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
              errors.yourName ? "border-red-500" : ""
            }`}
            placeholder="Your Name"
          />
          {errors.yourName && <span className="text-red-500 text-sm">{errors.yourName.message}</span>}
        </div>
        <div>
          <label htmlFor="your-email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="your-email"
            {...register("yourEmail", { 
              required: "Your email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address"
              }
            })}
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
              errors.yourEmail ? "border-red-500" : ""
            }`}
            placeholder="Your Email"
          />
          {errors.yourEmail && <span className="text-red-500 text-sm">{errors.yourEmail.message}</span>}
        </div>
        <div>
          <label htmlFor="friend-name" className="block text-sm font-medium text-gray-700">
            Friend's Name
          </label>
          <input
            type="text"
            id="friend-name"
            {...register("friendName", { required: "Friend's name is required" })}
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
              errors.friendName ? "border-red-500" : ""
            }`}
            placeholder="Friend's Name"
          />
          {errors.friendName && <span className="text-red-500 text-sm">{errors.friendName.message}</span>}
        </div>
        <div>
          <label htmlFor="friend-email" className="block text-sm font-medium text-gray-700">
            Friend's Email
          </label>
          <input
            type="email"
            id="friend-email"
            {...register("friendEmail", { 
              required: "Friend's email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address"
              }
            })}
            className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
              errors.friendEmail ? "border-red-500" : ""
            }`}
            placeholder="Friend's Email"
          />
          {errors.friendEmail && <span className="text-red-500 text-sm">{errors.friendEmail.message}</span>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReferralForm;

