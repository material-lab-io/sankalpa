export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sankalpa-light to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-sankalpa-dark text-center mb-8">
          Welcome to Sankalpa
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Connect with temples and deepen your spiritual journey
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-sankalpa-primary mb-4">
              Discover Temples
            </h2>
            <p className="text-gray-600">
              Search and explore temples near you
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-sankalpa-primary mb-4">
              Book Services
            </h2>
            <p className="text-gray-600">
              Book poojas, halls, and other services
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-sankalpa-primary mb-4">
              Join Community
            </h2>
            <p className="text-gray-600">
              Connect with devotees and participate in events
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}