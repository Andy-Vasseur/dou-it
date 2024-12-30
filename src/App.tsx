// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

// Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-w-screen max-w-screen min-h-screen max-h-screen font-poppins bg-navbg">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

// Exports
export default App;
