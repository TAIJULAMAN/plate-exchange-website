import React from 'react'
import { useState } from 'react'
import { Upload, Download, RotateCcw } from 'lucide-react'


export default function PlateView() {
    const [selectedView, setSelectedView] = useState('rear')
    // const [hideControlPoints, setHideControlPoints] = useState(false)
    // const [paymentsByPlate, setPaymentsByPlate] = useState(false)

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
        <div className="container mx-auto p-6 bg-white">
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Plate View</h1>
                <p className="text-sm text-gray-600">
                    Preview your customized vehicle plate views using AI for free & fast
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Image Section */}
                <div className="lg:col-span-2">
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                        <img
                            src="/black-mclaren-p1-oov.png"
                            alt="Car with number plate preview"
                            className="w-full h-64 md:h-80 object-cover"
                        />
                    </div>

                    {/* View Toggle Buttons */}
                    <div className="flex gap-2 mb-4">
                        <button
                            onClick={() => setSelectedView('rear')}
                            className={`px-6 py-2 rounded-full font-medium ${selectedView === 'rear'
                                ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            Rear
                        </button>
                        <button
                            onClick={() => setSelectedView('front')}
                            className={`px-6 py-2 rounded-full font-medium ${selectedView === 'front'
                                ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            Front
                        </button>
                    </div>
                </div>

                {/* Controls Section */}
                <div className="space-y-4">

                    {/* Action Buttons */}
                    <div className="space-y-2">
                        <button
                            onClick={handleResetPlate}
                            className="w-full bg-yellow-500 text-black font-medium"
                        >
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Reset Plate
                        </button>
                        <button
                            onClick={handleDownloadImage}
                            className="w-full bg-green-600 text-white font-medium"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download Image
                        </button>
                    </div>
                </div>
            </div>

            {/* Car Images Grid */}
            <div className="mt-8">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {carImages.map((car) => (
                        <div key={car.id} className="aspect-square">
                            {car.type === 'upload' ? (
                                <button
                                    onClick={handleImageUpload}
                                    className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-colors"
                                >
                                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                    <span className="text-xs text-gray-600 text-center px-2">
                                        Upload your car image
                                    </span>
                                </button>
                            ) : (
                                <button className="w-full h-full rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all">
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
