const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🌱</span>
          <h1 className="text-2xl font-bold text-green-700">CropCare</h1>
        </div>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-green-600 transition">
            Home
          </a>

          <a href="/" className="hover:text-green-600 transition">
            About
          </a>

          <a href="/" className="hover:text-green-600 transition">
            Contact
          </a>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
            Login
          </button>

          <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-lg">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
