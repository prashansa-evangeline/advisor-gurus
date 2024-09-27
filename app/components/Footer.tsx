const Footer = () => {
    return (
      <footer className="w-full bg-gray-800 text-white p-6">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Advisor Gurus. All Rights Reserved.</p>
          </div>
  
          {/* Footer Links */}
          <div className="flex space-x-6">
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  