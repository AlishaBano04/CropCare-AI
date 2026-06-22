function About() {
  return (
    <div className="min-h-screen bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800">
            About CropCare AI
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            CropCare AI is an intelligent farming assistant designed to help
            farmers detect crop diseases, receive treatment suggestions, and
            make informed agricultural decisions using Artificial Intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-5xl mb-4">🌿</div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              Disease Detection
            </h2>

            <p className="text-gray-600">
              Upload crop images and get instant disease analysis powered by AI.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-5xl mb-4">🤖</div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              AI Assistant
            </h2>

            <p className="text-gray-600">
              Ask farming-related questions and receive smart recommendations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-5xl mb-4">🌾</div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              Better Yield
            </h2>

            <p className="text-gray-600">
              Improve crop productivity through data-driven insights.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-white rounded-3xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-8">
            We aim to empower farmers with modern AI tools that simplify crop
            management, improve productivity, and reduce losses caused by plant
            diseases. CropCare AI bridges the gap between agriculture and
            technology to create a smarter future for farming.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
