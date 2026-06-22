import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ChatBox from "./pages/ChatBox";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatBox />} />
    </Routes>
  );
}

export default App;
