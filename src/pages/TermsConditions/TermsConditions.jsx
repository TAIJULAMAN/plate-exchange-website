import React from 'react';

export default function TermsConditions() {
    const sections = [
        {
            title: '1. Introduction',
            content:
                'By using our website, you agree to these terms. Your statutory rights are not affected. These terms apply to all services provided by PlateExchange (“The Company”).',
        },
        {
            title: '2. Your Responsibility',
            bullets: [
                'Please make sure all details you provide are correct before submitting. We can’t be held responsible for mistakes you make.',
                'If we can’t publish your advert or provide a valuation (and it’s not your fault), we’ll refund you in full.',
            ],
        },
        {
            title: '3. No Commission',
            content: 'We don’t charge commission—​you keep 100 % of your selling price.',
        },
        {
            title: '4. Advertising Rules',
            bullets: [
                'You can edit your advert anytime, except for the registration number itself.',
                'You must own the number plate or have permission to sell/seek a valuation.',
                'All registrations must be displayed legally and spaced correctly (per UK DVLA rules).',
                'Registration numbers can’t make a vehicle look newer than it is.',
                'Adverts remain live until you ask us to remove them.',
                'Only one free trial per customer/registration.',
            ],
        },
        {
            title: '5. Payments & Cancellations',
            bullets: [
                'Payment is taken via major credit/debit cards.',
                'No partial refunds for adverts cancelled mid-billing period.',
                'You can cancel your advert anytime from your account or by contacting us.',
            ],
        },
        {
            title: '6. Number-Plate Valuations',
            bullets: [
                'Valuations are not for insurance, legal, or probate purposes.',
                'They’re based on our market research and are for guidance only.',
                'We do not verify transfer eligibility—that’s your responsibility.',
            ],
        },
        {
            title: '7. Physical Plates',
            bullets: [
                'We sell both UK road-legal plates and show plates (off-road use only).',
                'Show plates must not be used on public roads.',
                'For road-legal plates, DVLA-approved documents are required.',
            ],
        },
        {
            title: '8. Delivery',
            bullets: [
                'We deliver within the UK via Hermes; most orders arrive within 3 working days.',
                'Delays can happen, and we’re not liable for late deliveries.',
                'If your delivery address is wrong, we can’t be held responsible.',
            ],
        },
        {
            title: '9. Returns & Refunds',
            bullets: [
                'As plates are custom-made, we only accept returns if we made an error or the product is faulty.',
                'Items must be returned in original condition within 30 days.',
            ],
        },
        {
            title: '10. Copyright & Trademarks',
            bullets: [
                'All trademarks and logos belong to their respective owners.',
                'We’re not affiliated with any brand whose logo may appear on our site. If you want an image removed, contact us.',
            ],
        },
        {
            title: '11. Legal',
            content:
                'These terms are governed by English law. Any invalid part of these terms doesn’t affect the rest.',
        },
    ];

    return (
        <section className="min-h-screen py-16 px-5 md:px-0">
            <div className="container mx-auto">
                <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                    Terms & Conditions
                </h1>

                <div className="mt-10 space-y-10">
                    {sections.map((sec) => (
                        <article key={sec.title}>
                            <h2 className="text-xl font-semibold text-slate-800 mb-2">
                                {sec.title}
                            </h2>
                            {sec.content && (
                                <p className="text-slate-700 leading-relaxed">{sec.content}</p>
                            )}
                            {sec.bullets && (
                                <ul className="list-disc list-inside space-y-1 text-slate-700">
                                    {sec.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};