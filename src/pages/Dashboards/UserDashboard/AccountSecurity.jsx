import React, { useState } from 'react';

export default function AccountSecurity() {
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    newPasswordAgain: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    if (passwords.newPassword !== passwords.newPasswordAgain) {
      alert('New passwords do not match!');
      return;
    }
    if (!passwords.currentPassword || !passwords.newPassword) {
      alert('Please fill in all required fields.');
      return;
    }
    alert('Password changed successfully!');
    console.log('Password change request:', passwords);
    // Reset form
    setPasswords({
      currentPassword: '',
      newPassword: '',
      newPasswordAgain: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto  rounded-lg  p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-semibold mb-3">
            Account Security
          </h1>
          <p className="opacity-90 text-lg">
            You can change your account password below.
          </p>
        </div>

        {/* Password Form */}
        <div className="space-y-6">
          {/* Current Password */}
          <div className="form-group">
            <label htmlFor="currentPassword" className="block mb-2 font-bold text-[#1B1B1B] text-lg">
              Current Password
            </label>
            <div className="flex justify-center">
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={passwords.currentPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* New Password */}
          <div className="form-group">
            <label htmlFor="newPassword" className="block mb-2 font-bold text-[#1B1B1B] text-lg">
              New Password
            </label>
            <div className="flex justify-center">
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handleInputChange}
                className="w-full  px-4 py-3 border border-gray-300 rounded-md text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* New Password Again */}
          <div className="form-group">
            <label htmlFor="newPasswordAgain" className="block mb-2 font-bold text-[#1B1B1B] text-lg">
              New Password Again
            </label>
            <div className="flex justify-center">
              <input
                type="password"
                id="newPasswordAgain"
                name="newPasswordAgain"
                value={passwords.newPasswordAgain}
                onChange={handleInputChange}
                className="w-full  px-4 py-3 border border-gray-300 rounded-md text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleSaveChanges}
              className="w-full  py-3 px-4 text-white font-medium rounded-md transition-colors duration-200 hover:opacity-90"
              style={{ backgroundColor: '#00823A' }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}