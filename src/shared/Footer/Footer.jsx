import React from 'react'
export default function Footer() {
    const footerLinks = {
        ourService: [
            { name: "Sell your number plate", href: "#" },
            { name: "Buy a number plate", href: "#" },
            { name: "Get a number plate valuation", href: "#" }
        ],
        company: [
            { name: "About", href: "/about-us" },
            { name: "Contact Us", href: "/contact-us" }
        ],
        socialMedia: [
            { name: "Facebook", href: "#" },
            { name: "Instagram", href: "#" },
            { name: "Twitter", href: "#" }
        ],
        resources: [
            { name: "Tutorials", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Community", href: "#" },
            { name: "Privacy Policy", href: "#" }
        ]
    }

    return (
        <footer className="bg-[#3C3D37] text-white">
            {/* Header Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        The private numberplate marketplace
                    </h2>

                    <div className="flex flex-row md:flex-col gap-3">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full">
                            Sell A Plate
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-6 py-2 rounded-full">
                            Buy A Plate
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-600 mb-8"></div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
                    {/* Description */}
                    <div className="lg:col-span-2">
                        <p className="text-gray-300 leading-relaxed">
                            Discover a hassle-free way to buy or sell number plates. We connect trusted sellers with serious buyers on a secure, premium platform.
                        </p>
                    </div>

                    {/* Our Service */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Our Service</h3>
                        <ul className="space-y-2">
                            {footerLinks.ourService.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media & Resources Combined */}
                    <div className="space-y-6">
                        {/* Social Media */}
                        <div>
                            <h3 className="font-semibold text-white mb-4">Social Media</h3>
                            <ul className="space-y-2">
                                {footerLinks.socialMedia.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="font-semibold text-white mb-4">Resources</h3>
                            <ul className="space-y-2">
                                {footerLinks.resources.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="w-full h-px bg-gray-600 mb-6"></div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-yellow-500 text-sm">
                        © 2025 PlateExchange. Company number: 0245645
                    </p>
                </div>
            </div>
        </footer>
    )
}
