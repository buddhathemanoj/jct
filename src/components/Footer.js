// components/Footer.js

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Footer Logo/Brand */}
        <div className="text-lg font-bold">
          <Link href="/">
           MyBrand
          </Link>
        </div>

        {/* Center: Footer Links */}
        <div className="space-x-6">
          <Link href="/about">
         About Us
          </Link>
          <Link href="/services">
           Services
          </Link>
          <Link href="/contact">
           Contact
          </Link>
          <Link href="/privacy-policy">
          Privacy Policy
          </Link>
        </div>

        {/* Right side: Copyright */}
        <div className="text-sm">
          &copy; {currentYear} MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
