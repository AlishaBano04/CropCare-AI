function ChatAssistant() {
  return (
    <div className="h-[calc(100vh-90px)] bg-gray-100 p-3">
      <div className="max-w-5xl mx-auto h-full bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b px-5 py-3">
          <h1 className="text-lg font-semibold text-green-700">
            CropCare AI Assistant
          </h1>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-5">
          {/* AI Message */}
          <div className="mb-4">
            <div className="inline-block bg-white border border-gray-200 px-4 py-2 rounded-2xl shadow-sm text-sm text-gray-800">
              👋 Hello! How can I help you today?
            </div>
          </div>

          {/* User Message */}
          <div className="flex justify-end mb-4">
            <div className="bg-green-600 text-white px-4 py-2 rounded-2xl text-sm max-w-md">
              Tell me about crop diseases.
            </div>
          </div>

          {/* AI Response */}
          <div className="mb-4">
            <div className="inline-block bg-white border border-gray-200 px-4 py-2 rounded-2xl shadow-sm text-sm text-gray-800 max-w-xl">
              Crop diseases can reduce crop yield and quality. Early detection
              and proper treatment help farmers protect their crops.
            </div>
          </div>
        </div>

        {/* Fixed Input */}
        <div className="border-t bg-white p-3">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask your farming question..."
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatAssistant;
