// components/Footer.js

import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <Link href="/">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">Home</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">About Us</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">Services</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/affiliate">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">Affiliate Program</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul>
              <li className="mb-2">
                <Link href="/course">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">Internship Program</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/course">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">Ambassador Program</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/course">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">Web Development</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/course">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">App Development</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/course">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">Online Courses</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/privacy-policy">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">Privacy Policy</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/terms">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">Terms & Conditions</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/chat">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">Live Chat</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/faq">
                  <span className="hover:text-pink-500 transition duration-300 cursor-pointer">FAQ</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
