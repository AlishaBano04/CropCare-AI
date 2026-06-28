import { useState } from "react";
import { Link } from "react-router-dom";

const diseases = [
  {
    id: "tomato-early-blight",
    name: "Tomato Early Blight",
    crop: "Tomato",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600",
  },
  {
    id: "tomato-late-blight",
    name: "Tomato Late Blight",
    crop: "Tomato",
    image:
      "https://images.unsplash.com/photo-1740621657754-1a65988d9e66?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: "potato-early-blight",
    name: "Potato Early Blight",
    crop: "Potato",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600",
  },
  {
    id: "corn-rust",
    name: "Corn Rust",
    crop: "Corn",
    image:
      "https://images.unsplash.com/photo-1511817354854-e361703ac368?q=80&w=1167&auto=format&fit=crop",
  },
  {
    id: "rice-blast",
    name: "Rice Blast",
    crop: "Rice",
    image:
      "https://images.unsplash.com/photo-1674974423490-05f3b30a83ab?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: "wheat-rust",
    name: "Wheat Rust",
    crop: "Wheat",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600",
  },
];

const DiseaseLibrary = () => {
  const [search, setSearch] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("All");

  const crops = ["All", "Tomato", "Potato", "Corn", "Rice", "Wheat"];

  const filteredDiseases = diseases.filter((disease) => {
    const matchesSearch = disease.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCrop = selectedCrop === "All" || disease.crop === selectedCrop;

    return matchesSearch && matchesCrop;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Disease Library
        </h1>

        <p className="text-center text-gray-500 text-sm mt-2 max-w-xl mx-auto">
          Explore crop diseases, symptoms, causes, prevention methods and
          treatment recommendations.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <input
          type="text"
          placeholder="🔍 Search diseases..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 px-4">
        {crops.map((crop) => (
          <button
            key={crop}
            onClick={() => setSelectedCrop(crop)}
            className={`px-4 py-1.5 text-sm rounded-full transition ${
              selectedCrop === crop
                ? "bg-green-600 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}>
            {crop}
          </button>
        ))}
      </div>

      {/* Disease Cards */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDiseases.map((disease) => (
            <div
              key={disease.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
              <img
                src={disease.image}
                alt={disease.name}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {disease.crop}
                </span>

                <h2 className="text-lg font-semibold mt-3 text-gray-800">
                  {disease.name}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  Learn symptoms, causes, prevention and treatment methods.
                </p>

                <Link
                  to={`/library/${disease.id}`}
                  className="inline-block mt-4 text-green-700 text-sm font-medium hover:text-green-900">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredDiseases.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-lg text-gray-500">No diseases found.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseaseLibrary;
