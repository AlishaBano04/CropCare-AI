function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div>
            <h2 className="text-2xl font-bold">🌱 CropCare AI</h2>
            <p className="mt-3 text-green-100">
              AI-powered farming assistant helping farmers make smarter
              decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>

            <ul className="space-y-2 text-green-100">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>

            <p className="text-green-100">support@cropcare.ai</p>

            <p className="text-green-100">Dehradun, Uttarakhand</p>
          </div>
        </div>

        <hr className="my-6 border-green-700" />

        <div className="text-center text-green-200">
          © 2026 CropCare AI. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
