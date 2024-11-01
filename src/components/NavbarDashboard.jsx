import { Link } from 'react-router-dom';

const NavbarDashboard = () => {
    return (
        <nav className="fixed mb-5 top-0 p-3 bg-white shadow-md w-full">
            <div className="flex items-center px-5">
                {/* Kiri */}
                {/* Logo */}
                <Link to="/homepage" className="py-1 pr-10 flex gap-2 hover:scale-110 transition duration-300">
                    <span className="text-2xl font-bold text-[#00712D]">
                        Care<span className="text-[#D5ED9F]">Bites</span>
                    </span>
                </Link>

                {/* Kanan */}
                <div className='flex justify-between  items-center w-full  '>
                    {/* Search Bar - Center */}
                    <div className="flex-grow mx-5 flex">
                        <div className="flex items-center border border-[#00712D] rounded-full p-1 max-w-sm w-full">
                            <input
                                type="text"
                                placeholder="Search"
                                className="text-md bg-transparent outline-none px-4 flex-grow text-gray-700 placeholder-gray-400"
                            />
                            <svg
                                className="w-5 h-5 text-[#00712D] mx-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 4a7 7 0 107 7 7 7 0 00-7-7zM21 21l-4.35-4.35"
                                />
                            </svg>
                        </div>
                    </div>


                    {/* Profil dan Notifikasi - Right */}
                    <div className="flex items-center gap-4">
                        {/* Notification Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" className="bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                        </svg>

                        {/* Profile Section */}
                        <div className="flex items-center gap-4">
                            {/* Profile Picture */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>

                            <div className="text-sm">
                                <h1 className="font-bold text-[#00712D]">Chilli Pari</h1>
                                <h2 className="text-gray-500">Malang, Indonesia</h2>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavbarDashboard;
