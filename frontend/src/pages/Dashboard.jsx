import { Link } from "react-router-dom";
import { Bot, Leaf, BookOpen, FileText, ArrowRight } from "lucide-react";

function Dashboard() {
  const cards = [
    {
      title: "AI Assistant",
      description: "Chat with CropCare AI for smart farming guidance.",
      icon: <Bot size={36} />,
      path: "/chat",
    },
    {
      title: "Disease Detection",
      description: "Upload leaf images and detect plant diseases.",
      icon: <Leaf size={36} />,
      path: "/detect",
    },
    {
      title: "Disease Library",
      description: "Browse diseases, symptoms and treatments.",
      icon: <BookOpen size={36} />,
      path: "/library",
    },
    {
      title: "My Reports",
      description: "View your previous scan reports.",
      icon: <FileText size={36} />,
      path: "/reports",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f9f4] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Welcome */}
        <div className="bg-gradient-to-r from-green-700 to-lime-600 rounded-3xl text-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold">Welcome Back 👋</h1>

          <p className="mt-3 text-green-100 max-w-2xl">
            Manage your crops with the power of AI. Detect diseases, chat with
            CropCare AI and explore the disease library.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition">
              <div className="text-green-600 mb-5">{card.icon}</div>

              <h2 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h2>

              <p className="text-gray-500 text-sm mt-2 leading-6">
                {card.description}
              </p>

              <div className="mt-6 flex items-center text-green-600 font-medium">
                Open
                <ArrowRight size={18} className="ml-2" />
              </div>
            </Link>
          ))}
        </div>

        {/* Farming Tip */}
        <div className="bg-white rounded-3xl p-6 mt-8 shadow">
          <h2 className="text-xl font-semibold text-green-700">
            🌾 Today's Farming Tip
          </h2>

          <p className="mt-3 text-gray-600 leading-7">
            Water crops early in the morning or late in the evening to reduce
            evaporation and improve water efficiency.
          </p>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl p-6 mt-8 shadow">
          <h2 className="text-xl font-semibold text-green-700">
            Recent Activity
          </h2>

          <div className="mt-5 border border-dashed border-gray-300 rounded-xl p-10 text-center text-gray-500">
            No recent scans available.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
