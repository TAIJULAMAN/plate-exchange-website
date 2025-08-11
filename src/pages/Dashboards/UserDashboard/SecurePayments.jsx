import React from 'react';

export default function SecurePayments() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto  p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-center font-semibold text-gray-900 mb-6 text-6xl">
            Secure Payments
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* What is escrow section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What is escrow?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Escrow is a secure payment method in which funds are held by a trusted third party until both the seller and buyer 
              are checked and verified, ensuring the safe completion of the transaction. This provides complete peace of mind 
              and protection for all parties involved.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              To facilitate secure escrow-style payments for our users, we have partnered with Trustap, a digital transaction 
              platform. Trustap safeguards users from potential scams when transacting with someone you don't know, offering:
            </p>
          </div>

          {/* Benefits List */}
          <div className="pl-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700 leading-relaxed">
                  Protection for buyers and sellers
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700 leading-relaxed">
                  Trustworthy transactions
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700 leading-relaxed">
                  Transparent process
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700 leading-relaxed">
                  Safe & secure payments
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700 leading-relaxed">
                  A fair and secure transaction for everyone involved
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}