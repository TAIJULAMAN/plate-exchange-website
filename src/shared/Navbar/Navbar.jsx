import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleMoreDropdown = () => {
        setIsMoreDropdownOpen(!isMoreDropdownOpen);
    };
    return (
        <nav className="bg-gray-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            <img src="/logo.png" alt="website logo" className="w-full h-full" />
                            {/* <div className="ml-1 w-16 h-1 bg-yellow-400 rounded-full"></div> */}
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a
                                href="#"
                                className="text-yellow-400 hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                Sell a Plate
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                Buy a Plate
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                Plate View
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                Recently Sold
                            </a>

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
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            About Us
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Contact
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            FAQ
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Terms & Conditions
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Login Button */}
                    <div className="hidden md:block">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                            Login
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-yellow-400 p-2"
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
                            <a
                                href="#"
                                className="text-yellow-400 block px-3 py-2 text-base font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
                            >
                                Sell a Plate
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
                            >
                                Buy a Plate
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
                            >
                                Plate View
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
                            >
                                Recently Sold
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
                            >
                                About Us
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
                            >
                                Contact
                            </a>
                            <div className="pt-2">
                                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm font-medium">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>

    )
}