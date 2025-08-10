import React from 'react'
import { Heart, Share2, Facebook, Twitter, MessageCircle } from 'lucide-react'

export default function PlateDetails() {

    const similarPlates = [
        { plate: 'F4 BLE', price: '£571', status: 'sold' },
        { plate: 'VEE66', price: '£657', status: 'sold' },
        { plate: 'J4 EWE', price: '£576', status: 'sold' },
        { plate: 'G5 564', price: '', status: 'sold' },
        { plate: 'P4 REE', price: '£587', status: 'sold' },
        { plate: 'F4 RLF', price: '£745', status: 'sold' },
        { plate: 'T6 KSN', price: '£545', status: 'sold' },
        { plate: 'F4 SDF', price: '£667', status: 'sold' },
        { plate: 'G6 RLF', price: '£642', status: 'sold' },
        { plate: 'F4 RLF', price: '£554', status: 'sold' }
    ]

    return (
<div className='container mx-auto my-10'>
            <div className="max-w-4xl mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="   text-3xl md:text-6xl font-medium text-gray-900 mb-6">Number Plate Details</h1>
                <p className="text-gray-900">
                    View complete information about your number plate, including format, value, and listing status.
                </p>
            </div>

            {/* Main Image */}
            <div className="relative mb-8">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                    <img
                        src="/black-mclaren-p1-oov.png"
                        alt="Car with number plate P1 00V"
                        className="w-full h-96 object-cover"
                    />
                    <button className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all">
                        <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Plate Display and Details */}
            <div className="text-center mb-8">
                {/* License Plate */}
<div className='flex justify-center my-4'>
                        <div className="bg-[#fad549] max-w-2xs px-16 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] text-center">
  <span className="text-black font-bold text-5xl tracking-wider font-mycustom">
     P1J00V
  </span>
</div>
</div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 mb-6">
                    <button className="flex items-center uppercase gap-2 px-4 py-2 hover:bg-gray-200 rounded-md text-xl border text-gray-700 transition-colors">
                        <img src="https://i.ibb.co.com/35Gdvj1M/image.png" alt="asdf" className='size-8' />
                        VERY RESPONSIVE
                    </button>
                         <button className="flex items-center uppercase gap-2 px-4 py-2 hover:bg-gray-200 rounded-md text-xl border text-gray-700 transition-colors">
                        <img src="https://i.ibb.co.com/LdvtTXjj/image.png" alt="asdf" className='size-8' />
                        HIGHLY USEFUL
                    </button>
                </div>

                {/* Price */}
                <div className="mb-4 font-medium">
                    <span className="text-xl text-gray-800 mr-2">Asking Price</span>
                    <span className="text-xl text-gray-800">£643</span>
                </div>

                {/* Share Buttons */}
                <div className="flex justify-center items-center gap-3 mb-6 text-xl text-gray-800 font-medium">
                    <span className=" mr-2">Share Advert:</span>
                    <button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                        <Facebook className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                        <Twitter className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                        <MessageCircle className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 bg-gray-400 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors">
                        <Share2 className="w-4 h-4 text-white" />
                    </button>
                </div>

                {/* Buy Now Button */}
                <div className='flex justify-center my-4'>
                        <div className="bg-[#00823A] max-w-2xl px-12 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] text-center font-sans">
  <span className="text-white font-bold text-5xl tracking-wider">
     Buy Now
  </span>
</div>
</div>
            </div>

            {/* Plate Details Section */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Plate Details:</h3>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Asking Price:</span>
                        <span className="font-medium">£643</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Date Advert Placed:</span>
                        <span className="font-medium">3rd July 2020</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Seller Name:</span>
                        <span className="font-medium">John F ⭐⭐⭐⭐⭐</span>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        <strong>Reg Issue Date:</strong> The registration can be assigned to vehicles 
                        registered on or after 1st September 2001
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">
                        <strong>Keywords for this number plate:</strong> pool, p1, 00v, poov
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">
                        <strong>Description:</strong> Looking to stand out? Meet P41T 00V – a bold, 
                        cheeky, and unforgettable number plate that says it all without 
                        you're driving a brand-up hatchback, a supercharged saloon, or a 
                        street monster that turns heads, this plate makes bold.
                    </p>
                </div>
            </div>


        </div>

                    {/* Similar Plates Section */}




            <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 ">Similar Plates:</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {similarPlates.map((item, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                           <div className="bg-[#fad549] w-full px-3 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] mb-3 inline-block">
  <span className="text-black font-bold text-sm tracking-wider font-mycustom">
    {item.plate}
  </span>
</div>

                            <div className="text-xl">
                                {item.status === 'sold' && (
                                    <>
                                        <span className=" ">Sold</span>
                                        {item.price && (
                                            <>
                                                <span className=" mx-1 ">for</span>
                                                <span className=" ">{item.price}</span>
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
</div>
    )
}