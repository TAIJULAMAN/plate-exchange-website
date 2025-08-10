import React from 'react';

export default function PrivacyPolicy() {
    const sections = [
        {
            title: '1. Information We Collect',
            points: [
                'Name, gender, date of birth',
                'Website activity and browsing history',
                'Contact details (phone, email)',
                'Purchase history and payment details (securely processed)',
                'Device and IP address information',
                'Social-media handles (if publicly shared)',
            ],
        },
        {
            title: '2. How We Use Your Data',
            points: [
                'Process and deliver your orders',
                'Comply with legal obligations',
                'Send you marketing (you can unsubscribe anytime)',
            ],
        },
        {
            title: '3. Sharing Your Data',
            points: [
                'We never sell your data',
                'Only shared with trusted service providers (e.g., payment processors, marketing platforms) under strict confidentiality',
            ],
        },
        {
            title: '4. Your Rights',
            points: [
                'Access the personal data we hold about you',
                'Ask us to correct or delete your data',
                'We may ask for proof of identity before making any changes',
            ],
        },
        {
            title: '5. Data Security & Storage',
            points: [
                'We use secure technology (HTTPS encryption) and password-protected systems',
                'We keep your data only as long as needed for business or legal reasons',
            ],
        },
    ];

    return (
        <div className="min-h-screen py-16 px-5 md:px-0">
            <div className="container mx-auto">
                {/* Page header */}
                <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                    Privacy Policy
                </h1>
               

                {/* Intro */}
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    This policy explains what personal information we collect, how we use it, and the rights you have over it.
                </p>

                {/* Sections */}
                <div className="mt-10 space-y-10">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="text-xl font-semibold text-slate-800 mb-3">
                                {section.title}
                            </h2>
                            <ul className="space-y-2 list-disc list-inside text-slate-700">
                                {section.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                {/* Contact */}
                <section className="mt-12">
                    <h2 className="text-xl font-semibold text-slate-800 mb-3">
                        6. Contact Us
                    </h2>
                    <p className="text-slate-700">
                        If you have any questions about this Privacy Policy, please reach out to us at{' '}
                        <a
                            href="mailto:support@plateexchange.com"
                            className="text-indigo-600 hover:underline"
                        >
                            support@plateexchange.com
                        </a>.
                    </p>
                </section>
            </div>
        </div>
    );
};