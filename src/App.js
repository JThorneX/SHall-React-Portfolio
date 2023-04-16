import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Socials from "./components/Socials";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Socials />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
