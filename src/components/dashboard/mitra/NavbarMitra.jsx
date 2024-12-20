import { useState, useEffect, useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import mitraData from '../../../assets/user/mitraData.json';
import Notifikasi from '../PopNotifikasi';

const NavbarMitra = ({ showSearchBar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown for detecting outside clicks

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);

    // Mark all notifications as read
    setUnreadNotifications(prevState => prevState.map(() => false));
  };

  // State for unread notifications
  const [unreadNotifications, setUnreadNotifications] = useState([true, true, true, true]);

  // Mark notification as read when clicked
  const markAsRead = (index) => {
    setUnreadNotifications(prevState => {
      const updatedNotifications = [...prevState];
      updatedNotifications[index] = false;
      return updatedNotifications;
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="ml-[280px] fixed top-0 left-0 right-0 m-5 mx-10 bg-white p-3 shadow-md rounded-md flex items-center justify-between z-50">
      {showSearchBar && (
        <div className="flex items-center bg-gray-100 rounded-lg p-2 shadow-sm w-full max-w-xs">
          <div className="bg-[#45c517] p-2 rounded-lg">
            <FaSearch className="text-white" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 bg-transparent outline-none text-gray-600 placeholder-gray-400"
          />
        </div>
      )}

      {!showSearchBar && (
        <h1 className='text-xl font-semibold'>Welcome, {mitraData.name}!</h1>
      )}

      <ul className="flex items-center gap-5">
        {/* Notification icon with dropdown */}
        <div className="relative">
          <button
            onClick={toggleNotification}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="gray"
              className="cursor-pointer"
            >
              <path d="M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V18H18V10ZM20 18.6667L20.4 19.2C20.5657 19.4209 20.5209 19.7343 20.3 19.9C20.2135 19.9649 20.1082 20 20 20H4C3.72386 20 3.5 19.7761 3.5 19.5C3.5 19.3918 3.53509 19.2865 3.6 19.2L4 18.6667V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z" />
            </svg>
            {/* Unread notification indicator */}
            {unreadNotifications.some(status => status) && (
              <div className="absolute top-3 left-3   translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-red-500 rounded-full" />
            )}
          </button>

          {/* Notification dropdown */}
          <div
          className={`absolute top-12 left-2 mt-2 w-72 z-1 transition-all duration-300 ${showNotification ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <Notifikasi markAsRead={markAsRead} unreadNotifications={unreadNotifications} />
          </div>
        </div>


        {/* Dropdown menu */}
        <div className="flex items-center gap-2 relative" ref={dropdownRef}>
          <div className="border-2 border-[#45c517] rounded-full">
            <img
              src={mitraData.profile_picture}
              alt=""
              className="min-w-5 h-5 object-cover rounded-full"
            />
          </div>

          <div className='flex items-center gap-3'>
            <div>
              <h1>{mitraData.name}</h1>
              <h1 className="text-xs">{mitraData.location}</h1>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={toggleDropdown}
              className="cursor-pointer"
            >
              <path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </div>

          {/* Dropdown profile */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-12 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1">
                <li>
                  <Link
                    to="/profile"
                    className="block w-full px-4 py-2 hover:bg-[#45c517] hover:text-white cursor-pointer"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block w-full px-4 py-2 hover:bg-[#45c517] hover:text-white cursor-pointer"
                  >
                    Help & Support
                  </a>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block w-full px-4 py-2 hover:bg-[#45c517] hover:text-white cursor-pointer text-red-600"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}

        </div>
      </ul>
    </nav>
  );
};

export default NavbarMitra;