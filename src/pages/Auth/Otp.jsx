
import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

export default function Otp() {
    const [code, setCode] = useState(new Array(5).fill(""));
    const navigate = useNavigate();

    const handleChange = (value, index) => {
        if (!isNaN(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Move to next input
            if (value && index < 4) {
                document.getElementById(`code-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            // Move to previous input on backspace
            document.getElementById(`code-${index - 1}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/reset-password");
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-5 md:px-0 py-16">
            <div className="w-full container mx-auto">
                <div className="max-w-xl mx-auto w-full">
                    <h1 className="text-center text-3xl font-bold text-gray-900 mb-4">Verification Code</h1>
                    <p className="text-center text-[#9F9C96] mb-8">
                        We have sent the verification code to your email
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex justify-between max-w-md mx-auto mb-8">
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`code-${index}`}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e.target.value, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className="w-14 h-14 text-2xl text-center text-gray-900 border border-gray-600 rounded-lg focus:outline-none"
                                />
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent
                       rounded-md font-medium text-white
                       bg-[#00823A]
                       focus:outline-none"
                        >
                            Verify Code
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
}