import { Link } from "react-router-dom";
import { ArrowRight, Bot, ScanSearch, BookOpen } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
          <div>
            <span className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              🌱 AI Powered Smart Agriculture
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Smart Farming
              <br />
              <span className="text-green-600">Powered by AI</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              CropCare helps farmers detect crop diseases, chat with an AI
              assistant, and explore a disease library to improve crop health
              and increase productivity.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/chat"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition shadow-lg">
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/library"
                className="border border-green-600 text-green-700 hover:bg-green-50 px-6 py-3 rounded-xl transition">
                Explore Library
              </Link>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h2 className="text-3xl font-bold text-green-600">150+</h2>
                <p className="text-gray-500 mt-1">Diseases</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-green-600">24/7</h2>
                <p className="text-gray-500 mt-1">AI Support</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-green-600">10+</h2>
                <p className="text-gray-500 mt-1">Crops</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&auto=format&fit=crop&q=80"
              alt="Agriculture"
              className="w-full max-w-lg rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-5">
              <Bot className="text-green-600" size={28} />
            </div>

            <h3 className="text-xl font-semibold">AI Chat Assistant</h3>

            <p className="text-gray-600 mt-3">
              Ask farming questions anytime and receive AI-powered guidance in
              seconds.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-5">
              <ScanSearch className="text-green-600" size={28} />
            </div>

            <h3 className="text-xl font-semibold">Disease Detection</h3>

            <p className="text-gray-600 mt-3">
              Upload crop images and let AI identify diseases with treatment
              recommendations.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-5">
              <BookOpen className="text-green-600" size={28} />
            </div>

            <h3 className="text-xl font-semibold">Disease Library</h3>

            <p className="text-gray-600 mt-3">
              Explore symptoms, causes, prevention methods, and treatments for
              various crop diseases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
