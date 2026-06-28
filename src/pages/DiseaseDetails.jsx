import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CircleCheck,
  TriangleAlert,
  ShieldCheck,
  Pill,
  Lightbulb,
} from "lucide-react";

const diseaseData = {
  "tomato-early-blight": {
    name: "Tomato Early Blight",
    image:
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=1200",
    description:
      "Early blight is a fungal disease affecting tomato plants, causing leaf spots and reduced yield.",

    symptoms: [
      "Brown spots on leaves",
      "Yellow halo around spots",
      "Premature leaf drop",
    ],

    causes: ["Alternaria fungus", "Warm humid weather", "Poor air circulation"],

    prevention: [
      "Crop rotation",
      "Remove infected leaves",
      "Avoid overhead watering",
    ],

    treatment: [
      "Apply fungicide",
      "Use resistant varieties",
      "Monitor regularly",
    ],
  },
};

function DiseaseDetails() {
  const { diseaseId } = useParams();

  const disease = diseaseData[diseaseId];

  if (!disease) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-red-500">Disease Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faf7] py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/library"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 font-medium mb-6 transition">
          <ArrowLeft size={18} />
          Back to Library
        </Link>

        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
          <div className="flex justify-center">
            <img
              src={disease.image}
              alt={disease.name}
              className="w-full max-w-sm h-56 md:h-64 object-cover rounded-2xl shadow-md"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mt-8">
            {disease.name}
          </h1>

          <p className="text-gray-600 text-center max-w-3xl mx-auto mt-4 leading-7">
            {disease.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {/* Symptoms */}

            <div className="bg-green-50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-green-700 mb-5">
                Symptoms
              </h2>

              <ul className="space-y-3">
                {disease.symptoms.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700">
                    <CircleCheck
                      size={18}
                      className="text-green-600 flex-shrink-0"
                    />

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Causes */}

            <div className="bg-yellow-50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-yellow-700 mb-5">
                Causes
              </h2>

              <ul className="space-y-3">
                {disease.causes.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700">
                    <TriangleAlert
                      size={18}
                      className="text-yellow-600 flex-shrink-0"
                    />

                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Prevention */}

            <div className="bg-blue-50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-blue-700 mb-5">
                Prevention
              </h2>

              <ul className="space-y-3">
                {disease.prevention.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700">
                    <ShieldCheck
                      size={18}
                      className="text-blue-600 flex-shrink-0"
                    />

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment */}

            <div className="bg-red-50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-red-700 mb-5">
                Treatment
              </h2>

              <ul className="space-y-3">
                {disease.treatment.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700">
                    <Pill size={18} className="text-red-600 flex-shrink-0" />

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Tip */}

          <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <Lightbulb
                size={24}
                className="text-yellow-500 mt-1 flex-shrink-0"
              />

              <div>
                <h3 className="font-semibold text-green-700 mb-2">Pro Tip</h3>

                <p className="text-gray-600 leading-7">
                  Early detection and proper crop management can significantly
                  reduce disease spread and improve crop yield. Regularly
                  inspect your crops and remove infected leaves immediately to
                  prevent further infection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiseaseDetails;
