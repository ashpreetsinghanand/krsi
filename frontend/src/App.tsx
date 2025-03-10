import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./app/landingPage/About"; // Create this component
import Home from "./app/landingPage/Home"; // Your main page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
