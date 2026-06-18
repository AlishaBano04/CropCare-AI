const Chatbox = () => {
  return (
    <section className="bg-gray-50 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        AI Agricultural Assistant
      </h2>

      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="bg-green-600 text-white p-5 font-semibold text-lg">
          CropCare AI Assistant
        </div>

        <div className="p-6 h-80 overflow-y-auto">
          <div className="flex justify-end mb-4">
            <div className="bg-gray-200 px-5 py-3 rounded-2xl max-w-sm">
              My tomato leaves are turning yellow.
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-green-100 px-5 py-3 rounded-2xl max-w-sm">
              This may be caused by nutrient deficiency, overwatering, or fungal
              infection.
            </div>
          </div>
        </div>

        <div className="border-t p-5 flex gap-3">
          <input
            type="text"
            placeholder="Ask about your crop..."
            className="flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button className="bg-green-600 text-white px-6 rounded-xl hover:bg-green-700">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chatbox;
