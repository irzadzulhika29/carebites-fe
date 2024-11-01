import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-3 bg-white shadow-md">
      <div className="flex justify-between items-center px-5">
        {/* Logo */}
        <Link to="/" className="hover:scale-110 transition duration-300 text-2xl text-[#00712D] font-bold">
          Care<span className="text-[#D5ED9F]">Bites</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-[#00712D]">
          <Link 
            to="/" 
            className="hover:bg-[#00712D] hover:text-[#D5ED9F] px-4 py-2 rounded-full transition duration-300"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="hover:bg-[#00712D] hover:text-[#D5ED9F] px-4 py-2 rounded-full transition duration-300"
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="hover:bg-[#00712D] hover:text-[#D5ED9F] px-4 py-2 rounded-full transition duration-300"
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className="hover:bg-[#00712D] hover:text-[#D5ED9F] px-4 py-2 rounded-full transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
