import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
