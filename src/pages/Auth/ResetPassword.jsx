
import React from "react";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ResetPassword() {
    const [formData, setFormData] = useState({
        password: "",
        confirm_password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-5 md:px-0 py-16">
            <div className="w-full container mx-auto">
                <div className="max-w-xl mx-auto w-full">
                    <h1 className="text-center text-3xl font-bold text-gray-900 mb-4">Reset Password</h1>
                    <p className="text-center text-[#9F9C96] mb-8">Your password must be 8-10 character long.</p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                >
                                    {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm mb-2">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="confirm_password"
                                    value={formData.confirm_password}
                                    onChange={handleChange}
                                    placeholder="Enter your confirm password"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                >
                                    {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                                </button>
                            </div>
                        </div>

                        <Link to="/login">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent
                                rounded-md font-medium text-white
                                bg-[#00823A]
                                focus:outline-none"
                            >
                                Confirm
                            </button>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
}