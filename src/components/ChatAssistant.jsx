function ChatAssistant() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-500 text-white py-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">🤖 CropCare AI Assistant</h1>

          <p className="mt-2 text-green-100">Your Smart Farming Companion</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Suggestion Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-green-700">🌿 Detect Disease</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-green-700">🌾 Crop Advice</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-green-700">💧 Irrigation Tips</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-green-700">🐛 Pest Control</h3>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-green-600 text-white p-5">
            <h2 className="font-semibold text-lg">CropCare Assistant</h2>
          </div>

          {/* Messages Area */}
          <div className="h-[500px] p-6 bg-gray-50">
            <div className="flex mb-4">
              <div className="bg-green-100 p-4 rounded-2xl max-w-md">
                👋 Hello! I am CropCare AI. How can I help you today?
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-green-600 text-white p-4 rounded-2xl max-w-md">
                Tell me about crop diseases.
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t flex gap-3">
            <input
              type="text"
              placeholder="Ask a farming question..."
              className="flex-1 border rounded-xl px-4 py-3 focus:outline-none"
            />

            <button className="bg-green-600 text-white px-6 rounded-xl hover:bg-green-700">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatAssistant;
