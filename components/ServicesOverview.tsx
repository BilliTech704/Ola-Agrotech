import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      title: 'Agricultural Exports',
      description: 'Premium quality agricultural products sourced from trusted African farms and exported to global markets.',
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Brand Promotion',
      description: 'Comprehensive brand development and marketing strategies to elevate your business presence.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Industrial Imports',
      description: 'Reliable importation of industrial goods and machinery with competitive pricing and quality assurance.',
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'bg-purple-50 border-purple-200'
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive trading solutions tailored to meet your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className={`p-8 rounded-lg border-2 ${service.color} hover:shadow-lg transition duration-200`}>
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </div>
  )
}