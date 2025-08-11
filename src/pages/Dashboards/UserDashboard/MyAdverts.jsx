import React, { useState } from 'react';
import { Eye, Edit, BarChart3, X } from 'lucide-react';

export default function MyAdverts() {
  const [adverts] = useState([
    {
      id: 1,
      plateNumber: 'S88JHSE',
      price: '£635',
      date: '26 June 2025'
    },
    {
      id: 2,
      plateNumber: 'S88 HSE',
      price: '£635',
      date: '26 June 2025'
    },
    {
      id: 3,
      plateNumber: 'S88 HSE',
      price: '£635',
      date: '26 June 2025'
    },
    {
      id: 4,
      plateNumber: 'S88 HSE',
      price: '£635',
      date: '26 June 2025'
    }
  ]);

  const handleView = (advertId) => {
    alert(`Viewing advert ${advertId}`);
  };

  const handleEdit = (advertId) => {
    alert(`Editing advert ${advertId}`);
  };

  const handleStats = (advertId) => {
    alert(`Viewing stats for advert ${advertId}`);
  };

  const handleDelete = (advertId) => {
    if (window.confirm('Are you sure you want to delete this advert?')) {
      alert(`Deleting advert ${advertId}`);
    }
  };

  const handleListNewPlate = () => {
    alert('Redirecting to list new plate...');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-center font-semibold text-gray-900 mb-6 text-6xl">
            My Adverts
          </h1>
          
          {/* Active Adverts Section */}
          <div className="mb-6">
            <h2 className="text-lg mb-2 block font-medium text-[#1B1B1B]">
              Active Adverts
            </h2>
            <p className="text-lg mb-2 block font-medium text-[#1B1B1B]">
              Premium Monthly (£497 Per Month)
            </p>
          </div>
        </div>

 


 {/* Adverts List */}
<div className="space-y-4 mb-8">
  {adverts.map((advert) => (
    <div
      key={advert.id}
      className="p-4 sm:p-6 bg-white rounded-lg shadow-[2px_2px_8px_rgba(0,0,0,0.20)] hover:shadow-[6px_6px_14px_rgba(0,0,0,0.2)] transition-shadow duration-200"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        {/* License Plate */}
        <div className="bg-[#fad549] px-6 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] font-mycustom text-center sm:text-left">
          <span className="text-black font-bold text-xl tracking-wider text-mycustom">
            {advert.plateNumber}
          </span>
        </div>

        {/* Price + Date + Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-4">
          
          {/* Price */}
          <div className="text-center sm:text-left">
            <div className="text-[#00823A] font-medium text-xl">
              {advert.price}
            </div>
          </div>

          {/* Date */}
          <div className="text-center sm:text-left">
            <div className="text-gray-600 text-sm">
              {advert.date}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <button
              onClick={() => handleView(advert.id)}
              className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              title="View"
            >
              <Eye className="w-4 h-4 text-gray-600" />
            </button>

            <button
              onClick={() => handleEdit(advert.id)}
              className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              title="Edit"
            >
              <Edit className="w-4 h-4 text-gray-600" />
            </button>

            <button
              onClick={() => handleStats(advert.id)}
              className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              title="Statistics"
            >
              <BarChart3 className="w-4 h-4 text-gray-600" />
            </button>

            <button
              onClick={() => handleDelete(advert.id)}
              className="p-2 border border-gray-300 rounded hover:bg-red-50 hover:border-red-300 transition-colors"
              title="Delete"
            >
              <X className="w-4 h-4 text-gray-600 hover:text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>




        {/* Add New Plate Button */}
        <div className="flex justify-center">
          <button
            onClick={handleListNewPlate}
            className="w-full bg-white py-3 px-6 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors duration-200"
          >
            +List a new plate for sale
          </button>
        </div>
      </div>
    </div>
  );
}