import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 shadow-md fixed top-0 left-0 z-50">
      {/* Logo Section */}
      <div className="ml-4">
        <Link href="/">
          <Image 
            src="https://drive.google.com/uc?export=view&id=1mGlajdYdPb9mP6sghwsNSTRzFAW_00eJ" 
            alt="TechGuru Logo" 
            width={50} 
            height={50}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex space-x-6 text-sm font-semibold mr-4">
        <Link href="/signin" className="text-white hover:text-blue-300 transition duration-300 ease-in-out">
          Sign In
        </Link>
        <Link href="/create-account" className="text-white hover:text-blue-300 transition duration-300 ease-in-out">
          Create Account
        </Link>
        <Link href="/bookings" className="text-white hover:text-blue-300 transition duration-300 ease-in-out">
          Bookings
        </Link>
      </nav>
    </header>
  );
};

export default Header;


