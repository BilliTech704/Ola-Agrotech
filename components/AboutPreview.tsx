import Link from 'next/link'

export default function AboutPreview() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Olanrewaju Trading Ltd</h2>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience in international trade, Olanrewaju Trading Ltd has established
              itself as a leading force in connecting African markets with global opportunities. Our commitment
              to excellence, integrity, and innovation drives everything we do.
            </p>
            <p className="text-gray-600 mb-8">
              We specialize in agricultural exports, brand promotion services, and industrial goods importation,
              providing comprehensive solutions that help our clients succeed in competitive global markets.
            </p>
            <Link
              href="/about"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-200"
            >
              Learn More About Us
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}