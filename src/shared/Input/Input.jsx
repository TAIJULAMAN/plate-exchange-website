import { Search } from "lucide-react";
import React from "react";

const Input = ({
    placeholder,
    value,
    onChange,
    className = "",
    ...props
}) => {
    return (
        <div className="flex">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`flex-1 px-4 py-3 border border-2 border-gray-600 rounded-l-md text-center font-medium text-gray-700 ${className}`}
                {...props}
            />
            <button
                type="submit"
                className="bg-[#00823A] hover:bg-green-700 text-white px-6 py-3 rounded-r-md transition-colors duration-200 flex items-center justify-center"
            >
                <Search className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Input;
