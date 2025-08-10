import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <section className="flex items-center justify-center min-h-screen px-5 md:px-0 py-16">
            <div className="w-full container mx-auto">
                <div className="mb-5 text-center space-y-2">
                    <h1 className="text-5xl font-bold text-gray-900 text-center">
                        Log in to your account
                    </h1>
                    <p>Don't have an account? <a href="#" className="font-medium text-gray-600 underline">Register here</a></p>
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
                            className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm"
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
                            className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent
                       rounded-md shadow-sm text-sm font-medium text-white
                       bg-[#00823A]
                       focus:outline-none"
                    >
                        Log in
                    </button>

                    <div className="flex items-center justify-between w-full max-w-md mx-auto p-4">
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

                        <Link to="/" className="text-sm text-gray-600 hover:text-gray-800 underline">
                            Forgot password?
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}