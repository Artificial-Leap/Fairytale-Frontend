import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Generator from "./Generator";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<Generator />} />
      </Routes>
    </Router>
  );
}

export default App;
