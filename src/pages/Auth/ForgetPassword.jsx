import React from "react";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ForgetPassword() {
    const [formData, setFormData] = useState({
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-5 md:px-0 py-16">
            <div className="w-full container mx-auto">
                <div className="max-w-xl mx-auto w-full">
                    <h1 className="text-center text-3xl font-bold text-gray-900 mb-4">Forgot Password</h1>
                    <p className="text-center text-[#9F9C96] mb-8">Please enter your Email to reset your password.</p>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                            />
                        </div>


                        <Link to="/verify-mail">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent
                       rounded-md font-medium text-white
                       bg-[#00823A]
                       focus:outline-none"
                            >
                                Get OTP
                            </button>
                        </Link>


                    </form>
                </div>
            </div>
        </div>
    );
}