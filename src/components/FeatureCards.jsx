const FeatureCards = () => {
  const features = [
    {
      title: "Disease Detection",
      icon: "🦠",
      desc: "Identify crop diseases quickly using AI.",
    },
    {
      title: "Pest Control",
      icon: "🐛",
      desc: "Get smart pest management recommendations.",
    },
    {
      title: "Crop Advisory",
      icon: "🌾",
      desc: "Receive farming guidance and best practices.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-14">Key Features</h2>

      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <div className="text-5xl mb-4">{feature.icon}</div>

            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>

            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
