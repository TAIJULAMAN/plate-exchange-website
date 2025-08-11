import React, { useState } from 'react';
import { MessageCircle, Heart } from 'lucide-react';

export default function SavedAdverts() {
  const [savedAdverts, setSavedAdverts] = useState([
    {
      id: 1,
      plateNumber: 'S88JHSE',
      price: '£635',
      status: 'Available',
      isFavorited: true
    },
    {
      id: 2,
      plateNumber: 'S88 HSE',
      price: '£635',
      status: 'Sold',
      isFavorited: true
    },
    {
      id: 3,
      plateNumber: 'S88 HSE',
      price: '£635',
      status: 'Available',
      isFavorited: true
    },
    {
      id: 4,
      plateNumber: 'S88 HSE',
      price: '£635',
      status: 'Sold',
      isFavorited: true
    },
    {
      id: 5,
      plateNumber: 'S88 HSE',
      price: '£635',
      status: 'Available',
      isFavorited: true
    },
    {
      id: 6,
      plateNumber: 'S88 HSE',
      price: '£635',
      status: 'Available',
      isFavorited: true
    }
  ]);

  const handleContact = (advertId) => {
    alert(`Contacting seller for advert ${advertId}`);
  };

  const toggleFavorite = (advertId) => {
    setSavedAdverts(prev => 
      prev.map(advert => 
        advert.id === advertId 
          ? { ...advert, isFavorited: !advert.isFavorited }
          : advert
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-center font-semibold text-gray-900 mb-6 text-6xl">
            Saved Adverts
          </h1>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b border-gray-200">
            <div className="text-sm font-medium text-gray-700">Number Plate</div>
            <div className="text-sm font-medium text-gray-700">Price</div>
            <div className="text-sm font-medium text-gray-700">Status</div>
            <div className="text-sm font-medium text-gray-700">Contact Seller</div>
            <div className="text-sm font-medium text-gray-700"></div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-200">
            {savedAdverts.map((advert) => (
              <div 
                key={advert.id}
                className="grid grid-cols-5 gap-4 p-4 items-center hover:bg-gray-50 transition-colors"
              >
                {/* License Plate */}
                <div className="bg-[#fad549] px-4 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] w-fit">
                  <span className="text-black font-bold text-lg tracking-wider font-mycustom">
                    {advert.plateNumber}
                  </span>
                </div>

                {/* Price */}
                <div className="text-gray-900 font-medium">
                  {advert.price}
                </div>

                {/* Status */}
                <div className={`text-sm font-medium ${
                  advert.status === 'Available' 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}>
                  {advert.status}
                </div>

                {/* Contact Seller Button */}
                <div>
                  <button
                    onClick={() => handleContact(advert.id)}
                    className="flex items-center gap-2 px-4 py-2 border border-blue-300 rounded-full text-blue-600 hover:bg-blue-50 transition-colors text-sm"
                    disabled={advert.status === 'Sold'}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {advert.status === 'Sold' ? 'Sold' : 'Chat'}
                  </button>
                </div>

                {/* Favorite Heart */}
                <div className="flex justify-center">
                  <button
                    onClick={() => toggleFavorite(advert.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Heart 
                      className={`w-5 h-5 ${
                        advert.isFavorited 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State (if no saved adverts) */}
        {savedAdverts.length === 0 && (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No saved adverts</h3>
            <p className="text-gray-500">Start browsing plates to save your favorites here.</p>
          </div>
        )}
      </div>
    </div>
  );
}