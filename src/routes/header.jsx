import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa"
import { MdLogout } from 'react-icons/md';
import logo from '/vite.svg'; // Add your logo to `public` or `src/assets`

const AppHeader = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
                <img src={logo} alt="POS Logo" className="w-10 h-10 rounded" />
                <h1 className="text-2xl font-semibold tracking-wide">SalesPOS</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-sm">
                <Link to="/" className="hover:text-blue-400 transition">Dashboard</Link>
                <Link to="/contacts" className="hover:text-blue-400 transition">Contacts</Link>
                <Link to="/sales" className="hover:text-blue-400 transition">Sales</Link>
            </nav>

            {/* User Section */}
            <div className="flex items-center space-x-4">
                <FaUserCircle className="text-xl" />
                <span className="text-sm font-medium">Melvin Parra</span>
                <button className="flex items-center text-sm hover:text-red-400 transition">
                    <MdLogout className="mr-1" />
                    Logout
                </button>
            </div>
        </header>
    );
};

export default AppHeader;
