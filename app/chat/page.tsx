export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-sankalpa-dark mb-8">
        Ask Anything
      </h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">
            Get instant answers to your questions about temples, rituals, and more.
          </p>
          <div className="border rounded-lg p-4 h-96 mb-4 bg-gray-50">
            <p className="text-center text-gray-500">Chat interface coming soon...</p>
          </div>
          <input
            type="text"
            placeholder="Type your question..."
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
      </div>
    </div>
  )
}