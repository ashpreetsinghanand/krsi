import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./app/landingPage/About"; // Create this component
import Home from "./app/landingPage/Home"; // Your main page component
import ContactUs from "./app/landingPage/ContactUs";
import Feature from "./app/landingPage/Feature";
import Faq from "./app/landingPage/Faq";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
