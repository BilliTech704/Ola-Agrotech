export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive solutions for your trading and branding needs</p>
        </div>

        <div className="space-y-12">
          {/* Agricultural Products Export */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">Exporting of Agricultural Products</h2>
            </div>
            <p className="text-gray-600 mb-6">
              We specialize in sourcing and exporting high-quality agricultural products from trusted African farms
              to international markets. Our expertise ensures compliance with global standards and timely delivery.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Our Products</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Cocoa beans and products</li>
                  <li>• Cashews and nuts</li>
                  <li>• Coffee and tea</li>
                  <li>• Cotton and textiles</li>
                  <li>• Fruits and vegetables</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Our Process</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Quality sourcing from farmers</li>
                  <li>• Rigorous quality control</li>
                  <li>• International certification</li>
                  <li>• Efficient logistics</li>
                  <li>• Market intelligence</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Brand Promotion Services */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">Brand Promotion Services</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Elevate your brand with our comprehensive promotion strategies. We combine traditional marketing
              with digital innovation to create compelling brand narratives that resonate with your target audience.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Our Services</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Brand strategy development</li>
                  <li>• Digital marketing campaigns</li>
                  <li>• Content creation</li>
                  <li>• Social media management</li>
                  <li>• Event marketing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Our Approach</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Market research and analysis</li>
                  <li>• Creative concept development</li>
                  <li>• Multi-channel execution</li>
                  <li>• Performance tracking</li>
                  <li>• Continuous optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industrial Goods Importation */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">Importation of Industrial Goods</h2>
            </div>
            <p className="text-gray-600 mb-6">
              We import a wide range of industrial goods and machinery, ensuring our clients have access to
              the latest technology and equipment needed for their operations. Our global network guarantees
              competitive pricing and reliable supply chains.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Product Categories</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Industrial machinery</li>
                  <li>• Construction equipment</li>
                  <li>• Electrical components</li>
                  <li>• Manufacturing tools</li>
                  <li>• Packaging materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Our Advantages</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Competitive pricing</li>
                  <li>• Quality assurance</li>
                  <li>• Customs clearance</li>
                  <li>• After-sales support</li>
                  <li>• Technical consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}