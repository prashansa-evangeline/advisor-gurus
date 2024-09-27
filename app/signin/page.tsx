"use client";
import { useState } from 'react';
import Image from 'next/image';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Sign in with', email, password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 via-white to-gray-100 p-4 relative">
      
      {/* Padding added to account for header overlap */}
      <div className="mt-20"> {/* Adjust `mt-20` based on header size */}
        {/* Sign-In Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl transition-transform hover:scale-105 hover:shadow-xl z-10">
          <h1 className="text-4xl font-bold text-center mb-4 text-blue-800">Welcome Back!</h1>
          <p className="text-center mb-6 text-gray-600">Sign in securely to access your personalized dashboard.</p>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-lg transition duration-300"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-lg transition duration-300"
            />
          </div>

          <button 
            className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-md hover:shadow-lg"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>

        {/* Catchy Line */}
        <p className="mt-6 text-gray-600 text-lg italic z-10 text-center">
          "Secure. Efficient. Fast. The easiest way to manage your account."
        </p>

        <p className="mt-4 text-gray-600 z-10 text-center">
          Don't have an account? <a href="/create-account" className="text-blue-600 hover:underline">Create one</a>
        </p>
      </div>

      {/* Bottom-Left Image with reduced blur */}
      <div className="absolute bottom-1 left-1 opacity-90 z-10">
        <Image 
          src="https://drive.google.com/uc?export=view&id=1iPOKw9U3wLzyacarUlAcIFGbg1NEHS1N"
          alt="Professional Sign-In"
          width={300}
          height={500}
          className="rounded-lg blur-none opacity-80"
        />
      </div>

      {/* Footer Section */}
      
    </div>
  );
};

export default SignIn;
