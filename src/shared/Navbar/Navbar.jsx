import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleMoreDropdown = () => setIsMoreDropdownOpen(!isMoreDropdownOpen);

    // Main menu items
    const mainMenuItems = [
        { path: "/", name: "Home", end: true },
        { path: "/sell-a-plate", name: "Sell a Plate" },
        { path: "/buy", name: "Buy a Plate" },
        { path: "/plate-view", name: "Plate View" },
        { path: "/recently-sold", name: "Recently Sold" },
    ];

    // More dropdown items
    const moreMenuItems = [
        { path: "/guide-and-blog", name: "Guide & Blog" },
        { path: "/faq", name: "FAQ" },
        { path: "/Reviewsandtestimonials", name: "Reviews & Testimonials" },
        { path: "/contact", name: "Contact" },
        { path: "/terms", name: "Terms & Conditions" },
    ];

    // Combined items for mobile menu
    const mobileMenuItems = [...mainMenuItems, ...moreMenuItems];

    return (
        <nav className="bg-[#3c3d37] text-white shadow-lg">
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
                                        `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                            isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
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
                                                    `block px-4 py-2 text-sm ${
                                                        isActive 
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

                    {/* Login Button */}
                    <div className="hidden md:block">
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive 
                                        ? "bg-yellow-500 text-gray-900" 
                                        : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                                }`
                            }
                        >
                            Login
                        </NavLink>
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

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700 rounded-lg mt-2">
                            {mobileMenuItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end={item.end}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 text-base font-medium ${
                                            isActive 
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
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        `w-full block px-4 py-2 rounded-md text-sm font-medium text-center ${
                                            isActive
                                                ? "bg-yellow-500 text-gray-900"
                                                : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                                        }`
                                    }
                                    onClick={toggleMenu}
                                >
                                    Login
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}