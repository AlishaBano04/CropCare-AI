const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            AI Powered Agriculture
          </span>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">
            Smart Farming
            <span className="text-green-600"> With AI</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Get instant recommendations for crop diseases, pest management and
            farming practices using artificial intelligence.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-green-600 text-white px-7 py-3 rounded-xl shadow-lg hover:bg-green-700">
              Talk to CropCare AI
            </button>

            <button className="border border-green-600 px-7 py-3 rounded-xl hover:bg-green-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-green-300 flex items-center justify-center text-8xl shadow-2xl">
            🌱
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
