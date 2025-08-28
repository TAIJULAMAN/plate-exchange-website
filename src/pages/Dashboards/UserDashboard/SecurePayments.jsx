// components/SecurePayments.jsx
import React, { useEffect, useRef, useState } from "react";
import { useCreatePaymentSecureMutation } from "../../../Redux/api/PaymentApis/securePaymentApi";

export default function SecurePayments() {
  const [createPaymentSecure, { data, isLoading, error }] =
    useCreatePaymentSecureMutation();

  const retryCount = useRef(0);
  const maxRetries = 5;

  const [redirectUrl, setRedirectUrl] = useState(null);
  const [countdown, setCountdown] = useState(5);

  const handleCreatePayment = async () => {
    try {
      const response = await createPaymentSecure().unwrap();
      console.log("Secure Payment Response:", response);

      if (response?.url) {
        // open in new tab
        const newWindow = window.open(response.url, "_blank");

        if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
          // popup blocked → fallback to countdown redirect
          setRedirectUrl(response.url);
        }
      }
    } catch (err) {
      console.error("Error creating secure payment:", err);
    }
  };

  // Handle API response from Redux
  useEffect(() => {
    if (data?.data?.onboardingUrl) {
      const onboardingUrl = data.data.onboardingUrl;

      if (typeof onboardingUrl === "string") {
        const newWindow = window.open(onboardingUrl, "_blank");

        if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
          setRedirectUrl(onboardingUrl); // fallback
        }
      } else if (
        typeof onboardingUrl === "object" &&
        (onboardingUrl.card_payments === "inactive" ||
          onboardingUrl.transfers === "inactive")
      ) {
        if (retryCount.current < maxRetries) {
          retryCount.current += 1;
          console.warn(`Retrying API call... attempt ${retryCount.current}`);
          createPaymentSecure();
        } else {
          console.error("Max retries reached. Onboarding not ready yet.");
        }
      }
    }
  }, [data, createPaymentSecure]);

  // Countdown effect for fallback redirect
  useEffect(() => {
    if (redirectUrl && countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    } else if (redirectUrl && countdown === 0) {
      window.location.href = redirectUrl; // redirect current tab
    }
  }, [redirectUrl, countdown]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow rounded-lg">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-center font-semibold text-gray-900 mb-6 text-4xl">
            Secure Payments
          </h1>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleCreatePayment}
            disabled={isLoading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isLoading ? "Processing..." : "Create Secure Payment"}
          </button>
        </div>

        {/* Countdown fallback */}
        {redirectUrl && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded text-center">
            <h3 className="font-semibold text-yellow-800 mb-2">
              Redirect blocked by popup blocker
            </h3>
            <p className="text-yellow-700">
              Redirecting in {countdown} seconds...
            </p>
            <button
              onClick={() => (window.location.href = redirectUrl)}
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Redirect Now
            </button>
          </div>
        )}

        {/* Show API response */}
        {data && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
            <h3 className="font-semibold text-green-800 mb-2">Response:</h3>
            <pre className="text-sm text-green-900">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
            <h3 className="font-semibold text-red-800 mb-2">Error:</h3>
            <pre className="text-sm text-red-900">
              {JSON.stringify(error, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
