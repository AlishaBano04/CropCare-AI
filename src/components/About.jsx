import {
  ScanSearch,
  Bot,
  TrendingUp,
  Target,
  ShieldCheck,
  Leaf,
  HeartHandshake,
  Heart,
} from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-green-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Small Badge */}

        <div className="flex justify-center">
          <span className="flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
            🌱 About CropCare AI
          </span>
        </div>

        {/* Heading */}

        <div className="text-center mt-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Empowering Farmers
            <br />
            <span className="text-green-600">Through AI & Innovation</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            CropCare AI is an intelligent farming assistant designed to help
            farmers detect crop diseases, receive treatment suggestions and make
            informed agricultural decisions using Artificial Intelligence.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {/* Card 1 */}

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
              <ScanSearch size={34} className="text-green-600" />
            </div>

            <h2 className="text-2xl font-bold mt-7">Disease Detection</h2>

            <div className="w-14 h-1 bg-green-600 rounded-full mt-3"></div>

            <p className="mt-5 text-gray-600 leading-8">
              Upload crop images and receive instant disease predictions powered
              by advanced AI models with treatment suggestions.
            </p>
          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
              <Bot size={34} className="text-green-600" />
            </div>

            <h2 className="text-2xl font-bold mt-7">AI Assistant</h2>

            <div className="w-14 h-1 bg-green-600 rounded-full mt-3"></div>

            <p className="mt-5 text-gray-600 leading-8">
              Ask farming-related questions anytime and receive reliable,
              personalized recommendations from CropCare AI.
            </p>
          </div>

          {/* Card 3 */}

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
              <TrendingUp size={34} className="text-green-600" />
            </div>

            <h2 className="text-2xl font-bold mt-7">Better Yield</h2>

            <div className="w-14 h-1 bg-green-600 rounded-full mt-3"></div>

            <p className="mt-5 text-gray-600 leading-8">
              Improve crop productivity using AI-powered insights, preventive
              measures and smart farming practices.
            </p>
          </div>
        </div>
        {/* Mission Section */}

        <div className="grid lg:grid-cols-2 gap-14 items-center mt-24">
          {/* Left */}

          <div>
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Our Mission
            </span>

            <h2 className="text-4xl font-bold mt-6 text-gray-900">
              Bringing Artificial Intelligence
              <span className="text-green-600"> to Every Farmer</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Agriculture is the backbone of our country, yet many farmers
              struggle with crop diseases, low productivity and delayed expert
              advice.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              CropCare AI bridges this gap by combining modern Artificial
              Intelligence with agriculture, making expert farming guidance
              accessible anytime and anywhere.
            </p>

            <div className="space-y-5 mt-8">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Target className="text-green-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Smart Decision Making</h3>

                  <p className="text-gray-600 text-sm">
                    AI-powered crop recommendations.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <ShieldCheck className="text-green-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Early Disease Detection</h3>

                  <p className="text-gray-600 text-sm">
                    Reduce crop losses before they spread.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Leaf className="text-green-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Sustainable Farming</h3>

                  <p className="text-gray-600 text-sm">
                    Better crops with healthier farming practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}

          <div>
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900"
              alt="CropCare"
              className="rounded-3xl shadow-2xl w-full h-[520px] object-cover"
            />
          </div>
        </div>

        {/* Bottom Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-24">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
              <HeartHandshake className="text-green-600" size={34} />
            </div>

            <h3 className="text-2xl font-bold mt-6">Helping Farmers</h3>

            <p className="mt-4 text-gray-600 leading-8">
              We believe technology should be simple and accessible for every
              farmer regardless of experience or location.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
              <Heart className="text-green-600" size={34} />
            </div>

            <h3 className="text-2xl font-bold mt-6">Built With Passion</h3>

            <p className="mt-4 text-gray-600 leading-8">
              CropCare AI combines Artificial Intelligence and modern web
              technologies to make farming smarter, easier and more efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
