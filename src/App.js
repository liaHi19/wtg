import React from "react";

import { Contact, Top } from "./components/Main";
import { Header, Footer } from "./components/layout";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Top />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
