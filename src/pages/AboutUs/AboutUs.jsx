import React from 'react';

export default function AboutUs() {
    return (
        <section className="py-16 px-5 md:px-0 min-h-screen">
            <h1 className="text-center text-5xl font-bold text-gray-900">About Us</h1>
            <div className="max-w-6xl mx-auto space-y-5">
                {/* Hero Heading */}
                <h1 className="text-2xl  text-gray-600">
                    PlateExchange: Redefining The Trade
                </h1>

                {/* Sub-headline */}
                <p className="mt-3 text-lg text-slate-600 max-w-3xl">
                    Number plates aren’t just metal and letters — they’re personal, memorable, and often valuable. PlateExchange gives you the space to trade them directly, without brokers, commissions, or hassle.
                    Whether you're selling a crisp everyday plate or a rare custom piece, our platform gives you full control. List in minutes. Update any time. Get seen by buyers who actually care.
                    We’ve built a system that works hard behind the scenes — advanced search tools, real-time previews, flexible plans — all designed to support sellers, not siphon their profits.
                </p>

                {/* Left column */}
                <div className="space-y-6">
                    <h2 className="text-2xl  text-gray-600">What You Get</h2>
                    <ul className="space-y-3">
                        {[
                            'No commission – you keep 100% of the sale price',
                            'Advanced keyword search – match with real buyers',
                            'Secure messaging – direct communication, no spam',
                            'Plate viewer – see exactly how your design looks',
                            'Social & homepage placement – for maximum visibility',
                            'Cancel-anytime monthly plans – no strings attached',
                        ].map((item) => (
                            <li key={item} className="flex items-start">
                                <span className="text-indigo-500 font-bold text-xl mr-3">•</span>
                                <span className="text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                    <h2 className="text-2xl  text-gray-600">The Marketplace That Gets It</h2>
                    <p className="text-slate-600">
                        PlateExchange isn’t just another listing site — it’s a community for car lovers, investors, and creatives. Everyone here knows that a plate tells a story. Yours should stand out.                        </p>

                </div>

            </div>
        </section>
    );
}