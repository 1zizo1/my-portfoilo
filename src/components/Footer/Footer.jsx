import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="text-2xl font-bold">MyApp</div>
          <p className="text-gray-400 text-sm text-center md:text-left">
            Your go-to platform for amazing products and services.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">To-Do list</Link></li>
            <li><Link to="/hero" className="hover:text-gray-300">Hero</Link></li>
            <li><Link to="/Gallary" className="hover:text-gray-300">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="font-semibold">Contact Us</h4>
          <p className="text-gray-400">1234 Street Name, City, State</p>
          <p className="text-gray-400">Email: info@myapp.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}
