import React, { useState } from 'react';

export default function MyProfile() {
     const [showDeleteModal, setShowDeleteModal] = useState(false);




       const handleDeleteAccount = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    alert('Account deletion process initiated.');
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };



  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Male',
    phoneNumber: '+56465463545',
    emailAddress: 'arralhani815@gmail.com'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    alert('Profile updated successfully!');
    console.log('Profile data saved:', formData);
  };



  return (
<div className="min-h-screen bg-gray-100 p-6">
  <div className="max-w-2xl mx-auto rounded-lg p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* First Name */}
      <div className="form-group">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Your first name"
          className="w-full px-4 py-3 border border-gray-700 rounded-md text-base bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Last Name */}
      <div className="form-group">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Your last name"
          className="w-full px-4 py-3 border border-gray-700 rounded-md text-base bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Gender */}
      <div className="form-group">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-700 rounded-md text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>
      </div>

      {/* Phone Number */}
      <div className="form-group">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Your phone number"
          className="w-full px-4 py-3 border border-gray-700 rounded-md text-base bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>

    {/* Email Address - Full Width */}
    <div className="form-group mt-6">
      <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-2">
        Email Address
      </label>
      <input
        type="email"
        id="emailAddress"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleInputChange}
        placeholder="Your email address"
        className="w-full px-4 py-3 border border-gray-700 rounded-md text-base bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    {/* Save Button */}
    <button
      onClick={handleSave}
      className="w-full mt-8 py-3 px-4 text-white font-medium rounded-md transition-colors duration-200 hover:opacity-90"
      style={{ backgroundColor: '#00823A' }}
    >
      Save Updated
    </button>

    {/* Footer Links */}
    <div className="flex justify-between items-center mt-6 text-sm">
      <span className="text-gray-600">Want to close your account entirely?</span>
      <button
        onClick={handleDeleteAccount}
        className="text-gray-700 underline hover:text-gray-900 transition-colors duration-200"
      >
        Want to delete your account?
      </button>
    </div>



{/* Delete Confirmation Modal */}
{showDeleteModal && (
  <div className="fixed inset-0 bg-white/30 backdrop-blur-xs flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
      <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">
        Confirm deleting your Account?
      </h2>
      
      <div className="flex gap-4">
        <button
          onClick={cancelDelete}
          className="flex-1 px-6 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
        >
          Cancel
        </button>
        <button
          onClick={confirmDelete}
          className="flex-1 px-6 py-3 text-white font-medium rounded-md transition-colors duration-200 hover:opacity-90"
          style={{ backgroundColor: '#00823A' }}
        >
          Yes, Confirm
        </button>
      </div>
    </div>
  </div>
)}



  </div>
</div>

  );
}