import React from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Top from "./components/Top";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Top />
      </main>
      <Footer />
    </div>
  );
};

export default App;
