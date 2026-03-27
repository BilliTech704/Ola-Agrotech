export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Olanrewaju Trading Ltd</h1>
          <p className="text-xl text-gray-600">Your trusted partner in global trade and brand excellence</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To bridge global markets by providing exceptional agricultural exports, innovative brand promotion services,
              and reliable industrial goods importation, fostering sustainable trade relationships worldwide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading trading company in Africa, recognized for excellence in agricultural commerce,
              brand development, and industrial solutions that drive economic growth and innovation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Integrity and transparency</li>
              <li>• Quality and innovation</li>
              <li>• Customer satisfaction</li>
              <li>• Sustainable practices</li>
              <li>• Global partnerships</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-600">Over 15 years of experience in international trade and brand management.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600">Established partnerships across Africa, Europe, and Asia.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous quality control for all products and services.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge solutions for modern business challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}