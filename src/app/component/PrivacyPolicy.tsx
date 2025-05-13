// components/PrivacyPolicy.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Saver App - Privacy Policy</title>
        <meta name="description" content="Saver App Privacy Policy" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-black px-6 py-10 sm:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl font-display tracking-tight">
                Privacy Policy
              </h1>
              <div className="mt-4 h-px bg-gray-700 w-24 mx-auto" />
              <p className="mt-4 text-gray-300 font-light">
                Last updated: {currentDate}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-10 sm:px-12 sm:py-12">
            <div className="max-w-3xl mx-auto space-y-12">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  <span className="text-black">01.</span> Our Commitment
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Saver App is committed to protecting your personal information. Please refer to our Privacy Policy for details on how we collect, use, and protect your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  <span className="text-black">02.</span> Modifications to Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Saver App may update these Terms and Conditions from time to time to reflect changes in features or legal requirements. Notifications of updates will be shared within the app, and continued use of the app indicates acceptance of the revised terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  <span className="text-black">03.</span> Limitation of Liability
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  The app is provided as-is without warranties of any kind. Saver App will not be held liable for any damages, losses, or issues arising from the use of the app, including but not limited to food-related incidents, inaccurate recipe suggestions, or data loss.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  <span className="text-black">04.</span> Termination
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to suspend or terminate access to Saver App for users who violate these Terms and Conditions or engage in inappropriate, unsafe, or abusive behavior within the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  <span className="text-black">05.</span> Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions or concerns about these Terms and Conditions, please contact us at{' '}
                  <a 
                    href="mailto:support@saverapp.com" 
                    className="text-black hover:text-gray-700 font-medium underline underline-offset-4 decoration-1 transition-colors"
                  >
                    support@saverapp.com
                  </a>.
                </p>
              </section>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-black px-6 py-6 sm:px-12 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Saver App. All rights reserved.
              </p>
              <div className="mt-3 sm:mt-0">
                <Link href="/" className="inline-flex items-center text-white hover:text-gray-300 text-sm font-medium transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;