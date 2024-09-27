"use client";
import { useState } from 'react';
import Image from 'next/image';

const CreateAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleCreateAccount = () => {
    console.log('Create account with:', { firstName, lastName, email, phone });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-r from-blue-50 via-white to-blue-50">

      {/* Padding for Header */}
      <div className="pt-24 pb-6 text-center"> {/* Increased padding to ensure header doesn’t overlap */}
        <h1 className="text-4xl font-bold mb-4 text-blue-900 animate-fadeIn">Create Your Account</h1>
        <p className="text-lg text-gray-700 mb-6 animate-fadeIn">
          Unlock exclusive benefits by joining our platform. Let's help you grow faster!
        </p>
      </div>

      {/* Input Form */}
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md animate-slideInUp mb-4"> 
        <div className="mb-4">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500"
          />
        </div>

        <button
          onClick={handleCreateAccount}
          className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition duration-300 shadow-lg mb-3"
        >
          Create Account
        </button>

        <div className="mt-1 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/signin" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>

      {/* Catchy Phrases and Image at the Bottom Left */}
      <div className="absolute bottom-1 left-1 z-0"> {/* Adjusted bottom and left positioning for better alignment */}
        <Image
          src="https://drive.google.com/uc?export=view&id=1DH6yZirv3nMnfwsqWXy5eb3iZcvylwEi"
          alt="Professional Illustration"
          width={300}
          height={400}
          className="rounded-lg opacity-90" /* Reduced size and added blur for a soft background effect */
        />
      </div>

      {/* Phrases Overlay */}
      
      
    </div>
  );
};

export default CreateAccount;
