"use client";
import Link from 'next/link';
import Image from 'next/image';

const GetStarted = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-900 py-10">
      <div className="text-center pt-28 animate-fadeIn"> {/* Increased top padding */}
        <h2 className="text-5xl font-extrabold mb-10 text-blue-900">About Advisor Gurus</h2>
      </div>

      {/* Mission, Services, and Approach Section */}
      <div className="flex flex-col md:flex-row justify-center gap-16 px-6 md:px-0">
        {/* Our Mission */}
        <div className="flex flex-col items-center max-w-xs animate-slideInUp">
          <Image
            src="https://drive.google.com/uc?export=view&id=1mGlajdYdPb9mP6sghwsNSTRzFAW_00eJ"
            alt="Our Mission"
            width={200}
            height={150}
            className="rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-2xl font-bold mt-6 text-blue-700">Our Mission</h3>
          <p className="text-center mt-4 text-gray-600">
            At Advisor Gurus, our mission is to help businesses thrive. We provide tailored consulting services to meet the unique needs of every client. Our goal is to exceed expectations with top-notch results.
          </p>
        </div>

        {/* Our Services */}
        <div className="flex flex-col items-center max-w-xs animate-slideInUp">
          <Image
            src="https://drive.google.com/uc?export=view&id=1mGlajdYdPb9mP6sghwsNSTRzFAW_00eJ"
            alt="Our Services"
            width={200}
            height={150}
            className="rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-2xl font-bold mt-6 text-blue-700">Our Services</h3>
          <p className="text-center mt-4 text-gray-600">
            We offer a variety of services, from project management to personal finance and marketing. Our expertise spans across agile, Scrum, and Kanban frameworks.
          </p>
        </div>

        {/* Our Approach */}
        <div className="flex flex-col items-center max-w-xs animate-slideInUp">
          <Image
            src="https://drive.google.com/uc?export=view&id=1mGlajdYdPb9mP6sghwsNSTRzFAW_00eJ"
            alt="Our Approach"
            width={200}
            height={150}
            className="rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-2xl font-bold mt-6 text-blue-700">Our Approach</h3>
          <p className="text-center mt-4 text-gray-600">
            Our approach is collaborative, transparent, and results-driven. We work closely with clients to understand their challenges and offer custom solutions for success.
          </p>
        </div>
      </div>

      {/* Create Account Section at the Bottom */}
      <div className="flex flex-col items-center justify-center py-10 mt-16 bg-blue-50 shadow-lg rounded-lg animate-fadeInUp">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Create Your Account</h1>
        <p className="text-center text-lg text-gray-700 mb-6">
          Join our platform today to unlock all of our business consulting services!
        </p>

        {/* Link to Create Account page */}
        <Link href="/create-account">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
