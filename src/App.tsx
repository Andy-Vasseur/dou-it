// Imports
import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";

// Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-w-screen max-w-screen min-h-screen max-h-screen font-poppins bg-navbg">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

// Exports
export default App;
