"use client";

const Bookings = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 pt-28">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-6 text-blue-800 animate-fadeIn text-center">
        Schedule Your Session with Us!
      </h1>

      {/* Subtitle */}
      <p className="text-center text-lg mb-10 text-gray-700 max-w-3xl leading-relaxed mx-auto">
        Unlock the power of expert consulting. Choose a time that works best for you and let us help you achieve your business goals.
      </p>

      {/* CTA: Professional Subtitle for Booking */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center animate-fadeIn">
        Book Your Consultation Today!
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-8">
        Select a convenient time from our calendar below to schedule your consultation with one of our experts.
      </p>

      {/* Calendly iFrame with Styled Container */}
      <div className="relative w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden mx-auto mb-16 hover:shadow-3xl transition-shadow duration-500">
        {/* Decorative Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none"></div>
        
        <div>
    <iframe
        src="https://calendly.com/victormagana"
        width="100%"      
        height="500px"    
        className="w-full h-full relative z-10 rounded-2xl"
    ></iframe>
</div>
</div>
      {/* Support Section */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md text-center transition-opacity duration-500 hover:opacity-90">
        <p className="text-gray-600 font-medium">
          Need help? Reach out to our support team at{" "}
          <a href="mailto:support@advisorgurus.com" className="text-blue-600 hover:underline">
            support@advisorgurus.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Bookings;
