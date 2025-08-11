import React, { useState } from 'react';
import { HiOutlineUpload } from 'react-icons/hi';

export default function ListPlateForSale() {
  const [formData, setFormData] = useState({
    registration: 'PL00V',
    price: '',
    vat: false,
    noPrice: false,
    description: '',
    keywords: '',
    email: ''
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Advert created successfully! You can now edit your listing at any time.');
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="  p-8 text-center">
          <h1 className="text-6xl font-semibold mb-3">Create Your Advert</h1>
          <p className="opacity-90 text-lg">
            Please complete your advert details below. You'll be able to edit your advert at any time once it is live.
          </p>
        </div>

        {/* Car Image Section */}
        <div className="relative h-96 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center overflow-hidden rounded-2xl">
          <img 
            src="https://i.postimg.cc/26ymYjTq/carimg.jpg" 
            alt="Car" 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-5 left-5 bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
            PL00V
          </div>
        </div>

        {/* Form Section */}
        <div className="p-10 max-w-2xl mx-auto">
          <div className="space-y-6">
            {/* Registration */}
            <div className="form-group">
              <label htmlFor="registration" className="block mb-2 font-bold text-[#1B1B1B] text-lg">
                Registration:
              </label>
              {/* <input
                type="text"
                id="registration"
                name="registration"
                value={formData.registration}
                onChange={handleInputChange}
                className="w-full p-4 py-4 border-2 border-gray-700 rounded-md text-base transition-all duration-300 bg-yellow-400 font-bold focus:outline-none focus:border-blue-500 focus:bg-white focus:-translate-y-1 focus:shadow-lg"
              /> */}


                {/* License Plate */}
          <div className="flex justify-center my-4">
            <div className="bg-[#fad549] w-full px-16 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] text-center">
              <span className="text-[#A6A6A6] font-bold text-5xl tracking-wider font-mycustom">
                P1J00V
              </span>
            </div>
          </div>

            </div>

            {/* Price */}
            <div className="form-group">
              <label htmlFor="price" className="block mb-2 font-bold text-[#1B1B1B] text-lg">
                Asking Price:
              </label>


<div className="relative flex-1">
  {/* Pound sign */}
  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 font-bold text-gray-600 z-10">
    £
  </span>

  {/* Price input with extra padding for VAT */}
  <input
    type="number"
    id="price"
    name="price"
    value={formData.price}
    onChange={handleInputChange}
    disabled={formData.noPrice}
    placeholder="0"
    className={`w-full pl-10 pr-24 py-4 border-2 border-gray-700 rounded-md text-base transition-all duration-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:-translate-y-1 focus:shadow-lg ${
      formData.noPrice ? "opacity-50 cursor-not-allowed" : ""
    }`}
  />

  {/* VAT inside input (right side) */}
  <div className="absolute inset-y-0 right-3 flex items-center space-x-2 text-gray-600">
    <input
      type="checkbox"
      id="vat"
      name="vat"
      checked={formData.vat}
      onChange={handleInputChange}
      disabled={formData.noPrice}
      className="appearance-none h-5 w-5 border-1 border-gray-700 rounded-full checked:bg-blue-500 checked:border-blue-500 transition-colors duration-200 cursor-pointer"
    />
    <label htmlFor="vat" className="whitespace-nowrap">
      + VAT
    </label>
  </div>
</div>



              <div className="mt-2 flex items-center space-x-2 text-gray-600 text-lg">
                <input
                  type="checkbox"
                  id="noPrice"
                  name="noPrice"
                  checked={formData.noPrice}
                  onChange={handleInputChange}
                  className="size-5"
                />
                <label htmlFor="noPrice">I'm not sure. Allow buyers to make me offers</label>
              </div>
            </div>

            {/* Description */}
            <div className="form-group">
              <label htmlFor="description" className="block mb-2 font-bold text-[#1B1B1B] text-lg">
                Description <span className="text-gray-500 font-normal text-sm">(optional)</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Add this to sell your vehicle to help it sell more quickly, but it is not compulsory on autotrader"
                className="w-full p-4      py-4 border-2 border-gray-700 rounded-md text-base transition-all duration-300 bg-gray-50 min-h-[100px] resize-y focus:outline-none focus:border-blue-500 focus:bg-white focus:-translate-y-1 focus:shadow-lg"
                rows={4}
              />
            </div>

            {/* Keywords */}
            <div className="form-group">
              <label htmlFor="keywords"className="block mb-2 font-bold text-[#1B1B1B] text-lg">
                Keywords <span className="text-gray-500 font-normal text-sm">(optional)</span>
              </label>
              <textarea
                id="keywords"
                name="keywords"
                value={formData.keywords}
                onChange={handleInputChange}
                placeholder="Enter keywords to help buyers find your advert e.g. Performance, leather, climate control, one owner, warranty"
                className="w-full p-4 py-4 border-2 border-gray-700 rounded-md text-base transition-all duration-300 bg-gray-50 min-h-[100px] resize-y focus:outline-none focus:border-blue-500 focus:bg-white focus:-translate-y-1 focus:shadow-lg"
                rows={4}
              />
            </div>

            {/* Photo Upload */}
 <div className="mb-4">

        {/* Preview */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4 p-4 rounded-2xl bg-white shadow-md border flex justify-center items-center">
          <img
            src={URL.createObjectURL(uploadedFiles[0])}
            alt="Preview"
            className=" max-h-60 rounded-md object-contain"
          />
        </div>
      )}


      <label className="block mb-1 font-medium text-[#1B1B1B]">
        Upload a photo <span className="text-gray-500 font-normal text-sm">(optional)</span>
      </label>
      <div className="relative">
        <input
          type="file"
          id="photoInput"
          accept="image/*"
          onChange={handleFileUpload}
          className="block w-full bg-white text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pl-3 pr-10 py-4 cursor-pointer border-2 border-gray-700 rounded-md"
          placeholder="Add photo"
        />
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
          <HiOutlineUpload size={20} />
        </span>
      </div>



    </div>





            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="block mb-2 font-bold text-[#1B1B1B] text-lg">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-4 py-4 border-2 border-gray-700 rounded-md text-base transition-all duration-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:bg-white focus:-translate-y-1 focus:shadow-lg"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#00823A] text-white py-5 px-6 rounded-xl text-xl font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wide mt-8 hover:-translate-y-1 hover:shadow-xl active:-translate-y-0"
            >
              Continue
            </button>
          </div>
        </div>



      </div>
    </div>
  );
}