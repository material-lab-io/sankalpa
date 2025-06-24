export default function TemplesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-sankalpa-dark mb-8">
        Discover Temples
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Temple Name</h2>
          <p className="text-gray-600">Temple description and location</p>
        </div>
      </div>
    </div>
  )
}