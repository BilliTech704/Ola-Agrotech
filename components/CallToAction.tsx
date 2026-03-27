import Link from 'next/link'

export default function CallToAction() {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discover how Olanrewaju Trading Ltd can help you achieve your international trade goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
          >
            Get In Touch
          </Link>
          <Link
            href="/services"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-200"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  )
}