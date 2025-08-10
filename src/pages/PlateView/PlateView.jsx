import React from 'react'
import { useState } from 'react'
import { Upload, Download, RotateCcw } from 'lucide-react'

export default function PlateView() {
    const [selectedView, setSelectedView] = useState('rear')
    const [hideControlPoints, setHideControlPoints] = useState(false)

    const carImages = [
        { id: 'upload', type: 'upload', src: null },
        { id: 1, type: 'image', src: '/silver-car-rear.png' },
        { id: 2, type: 'image', src: '/red-sports-car-side.png' },
        { id: 3, type: 'image', src: '/black-porsche-front.png' },
        { id: 4, type: 'image', src: '/black-porsche-side.png' },
        { id: 5, type: 'image', src: '/white-sports-car-front.png' }
    ]

    const handleImageUpload = () => {
        console.log('Upload image clicked')
    }

    const handleResetPlate = () => {
        console.log('Reset plate clicked')
    }

    const handleDownloadImage = () => {
        console.log('Download image clicked')
    }

    return (
        <div className="container mx-auto p-6 min-h-screen font-manrope my-12">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-6xl font-medium text-gray-900 mb-6">Plate View</h1>
                <p className="text-gray-900">
                    Preview your customised number plate before listing it for sale & buy
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Image Section - Takes 2/3 of the width */}
                <div className="lg:col-span-2">
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-sm mb-6">
                        <img
                            src="/black-mclaren-p1-oov.png"
                            alt="Car with number plate preview"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                </div>

                {/* Controls Section - Takes 1/3 of the width */}
                <div className="space-y-6">
                    {/* License Plate Display */}
         

                    <div className="bg-[#fad549] px-6 py-2 rounded shadow-[inset_0_-2px_2px_rgba(0,0,0,0.2)] text-center">
  <span className="text-black font-bold text-5xl tracking-wider font-mycustom">
     P1J00V
  </span>
</div>

                    {/* View Toggle Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => setSelectedView('rear')}
                            className={`flex-1 px-4 py-2 rounded-full font-semibold text-2xl ${selectedView === 'rear'
                                ? 'bg-yellow-400 text-black'
                                : 'bg-white text-gray-700 border border-gray-300'
                                }`}
                        >
                            Rear
                        </button>
                        <button
                            onClick={() => setSelectedView('front')}
                            className={`flex-1 px-4 py-2 rounded-full font-semibold text-2xl ${selectedView === 'front'
                                ? 'bg-yellow-400 text-black'
                                : 'bg-white text-gray-700 border border-gray-300'
                                }`}
                        >
                            Front
                        </button>
                    </div>

                    {/* Hide Control Points Checkbox */}
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id="hideControlPoints"
                            checked={hideControlPoints}
                            onChange={(e) => setHideControlPoints(e.target.checked)}
                            className="size-5 text-blue-600 rounded"
                        />
                        <label htmlFor="hideControlPoints" className="text-xl font-medium text-gray-700">
                            Hide corner control points
                        </label>
                    </div>

                    {/* Brightness Slider */}
                    <div className="space-y-2">
                        <label className="text-xl text-gray-700 font-medium">
                            Brightness for plate
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            defaultValue="50"
                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button
                            onClick={handleResetPlate}
                            className="w-full font-bold text-3xl bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors"
                        >
                           
                            <span>Reset Plate</span>
                        </button>
                        <button
                            onClick={handleDownloadImage}
                            className="w-full font-bold text-3xl bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors"
                        >
                           
                            <span>Download Image</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Car Images Grid */}
            <div className="mt-12">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {carImages.map((car) => (
                        <div key={car.id} className="aspect-[4/3]">
                            {car.type === 'upload' ? (
                                <button
                                    onClick={handleImageUpload}
                                    className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-colors bg-white"
                                >
                                    <Upload className="size-12 text-gray-900 mb-1" />
                                    <span className="text-xl text-gray-900 text-center px-2">
                                        Upload your car image
                                    </span>
                                </button>
                            ) : (
                                <button className="w-full h-full rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-400 transition-all bg-white shadow-sm">
                                    <img
                                        src={car.src || "/placeholder.svg"}
                                        alt={`Car view ${car.id}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}