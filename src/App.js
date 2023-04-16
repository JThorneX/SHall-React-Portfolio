import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
