import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    //  const user = useSelector();
    //  const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <section className="flex items-center justify-center min-h-screen px-5 md:px-0 py-16">
            <div className="w-full container mx-auto">
                <div className="mb-5 text-center space-y-2">
                    <h1 className="text-5xl font-bold text-gray-900 text-center">
                        Log in to your account
                    </h1>
                    <p>Don't have an account? <Link to="/sign-up" className="font-medium text-gray-600 underline">Register here</Link></p>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-5 max-w-xl mx-auto">
                    {/* Email */}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-bold mb-2 text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent
                       rounded-md font-medium text-white
                       bg-[#00823A]
                       focus:outline-none"
                    >
                        Log In
                    </button>

                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                defaultChecked
                            />
                            <label htmlFor="remember" className="text-sm text-gray-700 cursor-pointer">
                                Remember password
                            </label>
                        </div>

                        <Link to="/forget-password" className="text-sm text-gray-600 hover:text-gray-800 underline">
                            Forgot password?
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}