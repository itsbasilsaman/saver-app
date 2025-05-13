// app/contact/page.tsx
import Head from 'next/head';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Saver App</title>
        <meta name="description" content="Contact Saver App for any questions or concerns" />
      </Head>

      <main className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We are here to help and answer any questions you might have.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Column - Contact Info & Terms */}
            <div className="space-y-8">
              {/* Contact Information Card */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-800 p-2 rounded-lg mr-4">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">niema.kw@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-800 p-2 rounded-lg mr-4">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white">+965 9446 5699</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-800 p-2 rounded-lg mr-4">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Office Hours</p>
                      <p className="text-white">Mon-Sun (24/7 KST)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-800 p-2 rounded-lg mr-4">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">Kuwait City, Kuwait</p>
                      <p className="text-white mt-1">السرة</p>
                      <p className="text-white">قطعة ٣</p>
                      <p className="text-white">شارع ١٣</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms Section */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-6">Privacy Commitment</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Saver App is committed to protecting your personal information. Please refer to our Privacy Policy for details on how we collect, use, and protect your data.
                </p>

                <h3 className="text-2xl font-semibold text-white mb-6">Modifications to Terms</h3>
                <p className="text-gray-300 leading-relaxed">
                  Saver App may update these Terms and Conditions from time to time to reflect changes in features or legal requirements. Notifications of updates will be shared within the app, and continued use of the app indicates acceptance of the revised terms.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg">
              <h2 className="text-3xl font-semibold text-white mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 px-6 rounded-lg hover:bg-gray-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 font-medium text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;