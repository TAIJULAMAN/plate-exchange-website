import React from "react";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FiCamera, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        gdc_no: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setProfileImage(null);
        setImagePreview(null);
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-5 md:px-0 py-16">
            <div className="w-full container mx-auto">
                <div className="max-w-xl mx-auto w-full">
                    <h1 className="text-center text-3xl font-bold text-gray-900 mb-2">
                        Create Account
                    </h1>
                    <p className="text-center text-[#9F9C96] mb-8">
                        Please enter your information to create account
                    </p>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-gray-900 font-bold text-lg mb-2">
                                First name
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                                className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-600 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-900 font-bold text-lg mb-2">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                                className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-600 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-900 font-bold text-lg mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-600 focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-900 font-bold text-lg mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-600 focus:outline-none pr-12"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                >
                                    {showPassword ? (
                                        <IoEyeOffOutline size={20} />
                                    ) : (
                                        <IoEyeOutline size={20} />
                                    )}
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
                                Sign Up
                            </button>
                        </Link>

                        <p className="text-center text-[#9F9C96] mt-5">
                            Already have an account?{" "}
                            <Link to="/login" className="text-[#00823A]">
                                Log In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}