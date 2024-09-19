// import { useState } from "react";

import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";

import "./App.css";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTopFab from "./components/scroll/ScrollToTopFab";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header1 />
        <Header2 />
        <Header3 />
      </header>
      <Hero />
      <Main />
      <ScrollToTopFab />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
