import { useState } from "react";
import { Upload, ScanSearch, RotateCcw } from "lucide-react";

function DetectDisease() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(false);
  };

  const handleAnalyze = () => {
    if (!image) return;
    setResult(true);
  };

  const handleReset = () => {
    setImage(null);
    setPreview(null);
    setResult(false);
  };

  return (
    <div className="min-h-screen bg-[#f7faf5] py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-green-700">
            Disease Detection
          </h1>

          <p className="text-gray-600 mt-2">
            Upload a clear image of a crop leaf and let CropCare AI detect the
            disease.
          </p>
        </div>

        {/* Upload Section */}

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <label
            htmlFor="image"
            className="border-2 border-dashed border-green-300 rounded-2xl h-72 flex flex-col justify-center items-center cursor-pointer hover:border-green-600 transition">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-64 h-64 object-cover rounded-xl"
              />
            ) : (
              <>
                <Upload size={60} className="text-green-600 mb-4" />

                <h2 className="text-xl font-semibold">Upload Leaf Image</h2>

                <p className="text-gray-500 mt-2">
                  Click here to browse your image
                </p>

                <p className="text-sm text-gray-400 mt-3">JPG • JPEG • PNG</p>
              </>
            )}
          </label>

          <input
            id="image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImage}
          />

          <div className="flex justify-center mt-8">
            <button
              onClick={handleAnalyze}
              disabled={!image}
              className={`px-8 py-3 rounded-xl text-white flex items-center gap-2 transition ${
                image
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}>
              <ScanSearch size={20} />
              Analyze Image
            </button>
          </div>
        </div>

        {/* Result */}

        {result && (
          <div className="mt-10 space-y-6">
            {/* Prediction */}

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Prediction Result
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-xl p-5">
                  <p className="text-gray-500 text-sm">Disease</p>

                  <h3 className="font-bold text-lg mt-2">
                    Tomato Early Blight
                  </h3>
                </div>

                <div className="bg-green-50 rounded-xl p-5">
                  <p className="text-gray-500 text-sm">Confidence</p>

                  <h3 className="font-bold text-lg mt-2">96%</h3>
                </div>

                <div className="bg-green-50 rounded-xl p-5">
                  <p className="text-gray-500 text-sm">Status</p>

                  <h3 className="font-bold text-lg mt-2 text-green-600">
                    Disease Detected
                  </h3>
                </div>
              </div>
            </div>

            {/* Information */}

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="font-semibold text-green-700 mb-4">Symptoms</h2>

                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Yellow spots</li>
                  <li>• Brown lesions</li>
                  <li>• Dry leaves</li>
                  <li>• Leaf damage</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="font-semibold text-green-700 mb-4">Treatment</h2>

                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Remove infected leaves</li>
                  <li>• Copper fungicide</li>
                  <li>• Mancozeb spray</li>
                  <li>• Proper irrigation</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="font-semibold text-green-700 mb-4">
                  Prevention
                </h2>

                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Avoid overwatering</li>
                  <li>• Improve airflow</li>
                  <li>• Inspect crops weekly</li>
                  <li>• Remove infected plants</li>
                </ul>
              </div>
            </div>

            {/* Reset */}

            <div className="flex justify-center">
              <button
                onClick={handleReset}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl flex items-center gap-2">
                <RotateCcw size={18} />
                Scan Another Image
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetectDisease;
