import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, User } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
    const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleMoreDropdown = () => setIsMoreDropdownOpen(!isMoreDropdownOpen);
    const toggleAvatarDropdown = () => setIsAvatarDropdownOpen(!isAvatarDropdownOpen);

    // Main menu items
    const mainMenuItems = [
        { path: "/", name: "Home", end: true },
        { path: "/sell-a-plate", name: "Sell a Plate" },
        { path: "/buy-a-plate", name: "Buy a Plate" },
        { path: "/plate-view", name: "Plate View" },
        { path: "/recently-sold", name: "Recently Sold" },
    ];

    // More dropdown items
    const moreMenuItems = [
        { path: "/guide-and-blog", name: "Guide & Blog" },
        { path: "/faq", name: "FAQ" },
        { path: "/Reviewsandtestimonials", name: "Reviews & Testimonials" },
        { path: "/contact-us", name: "Contact" },
        { path: "/privacy-policy", name: "Privacy Policy" },
        { path: "/terms-conditions", name: "Terms & Conditions" },
    ];

    // Combined items for mobile menu
    const mobileMenuItems = [...mainMenuItems, ...moreMenuItems];
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3c3d37] text-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="flex items-center">
                            <img src="/logo.png" alt="website logo" className="w-full h-full" />
                        </NavLink>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {mainMenuItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end={item.end}
                                    className={({ isActive }) =>
                                        `px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}

                            {/* More Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={toggleMoreDropdown}
                                    className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                                >
                                    More
                                    <ChevronDown className="ml-1 w-4 h-4" />
                                </button>

                                {isMoreDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                        {moreMenuItems.map((item) => (
                                            <NavLink
                                                key={item.path}
                                                to={item.path}
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 text-sm ${isActive
                                                        ? "bg-gray-100 font-medium text-gray-900"
                                                        : "text-gray-700 hover:bg-gray-100"
                                                    }`
                                                }
                                                onClick={toggleMoreDropdown}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Avatar Dropdown */}
                    <div className="hidden md:block relative">
                        <button
                            onClick={toggleAvatarDropdown}
                            className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 overflow-hidden border-2 border-yellow-400 hover:border-yellow-500"
                            aria-label="User menu"
                        >
                            <img
                                src="https://avatar.iran.liara.run/public/39"
                                alt="User Avatar"
                                className="w-full h-full object-cover"
                            />
                        </button>

                        {isAvatarDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <NavLink
                                    to="userdashboard"
                                    className={({ isActive }) =>
                                        `block px-4 py-2 text-sm ${isActive
                                            ? "bg-gray-300 font-medium text-gray-900"
                                            : "text-gray-600 hover:bg-gray-100"
                                        }`
                                    }
                                    onClick={toggleAvatarDropdown}
                                >
                                    Dashboard
                                </NavLink>
                                <button
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        navigate('/login')
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-yellow-400 p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700 rounded-lg mt-2">
                            {mobileMenuItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end={item.end}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 text-base font-medium ${isActive
                                            ? "text-yellow-400"
                                            : "text-white hover:text-yellow-400"
                                        }`
                                    }
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            <div className="pt-2">

                                <Link
                                    to="/login"
                                    className={({ isActive }) =>
                                        `block px-3 py-2 text-base font-medium ${isActive
                                            ? "text-yellow-400"
                                            : "text-white hover:text-yellow-400"
                                        }`
                                    }
                                    onClick={toggleMenu}
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}