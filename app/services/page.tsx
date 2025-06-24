export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-sankalpa-dark mb-8">
        Temple Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Book Pooja</h2>
          <p className="text-gray-600">Schedule your spiritual ceremonies</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Book Hall</h2>
          <p className="text-gray-600">Reserve halls for events</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Homa Services</h2>
          <p className="text-gray-600">Participate in sacred fire rituals</p>
        </div>
      </div>
    </div>
  )
}