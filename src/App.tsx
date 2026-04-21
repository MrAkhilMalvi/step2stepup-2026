import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Founder from "./pages/Founder";
import Connect from "./pages/Connect";
import Donate from "./pages/Donate";
import DonorManifesto from "./pages/DonorManifesto";
import Events from "./pages/Events";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/events" element={<Events />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/manifesto" element={<DonorManifesto />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;