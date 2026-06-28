import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ChatBox from "./pages/ChatBox";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DiseaseLibrary from "./pages/DiseaseLibrary";
import DiseaseDetails from "./pages/DiseaseDetails";
import Dashboard from "./pages/Dashboard";
import DetectDisease from "./pages/DetectDisease";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar on every page */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatBox />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/detect" element={<DetectDisease />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/library" element={<DiseaseLibrary />} />
          <Route path="/library/:diseaseId" element={<DiseaseDetails />} />
        </Routes>
      </main>

      {/* Footer on every page */}
      <Footer />
    </div>
  );
}

export default App;
