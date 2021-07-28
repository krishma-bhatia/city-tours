import React from "react";
import Navbar from './components/Navbar/navbar';
import TourList from './components/TourList';
import Footer from './components/Footer/Footer.js';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.scss';

function App() {
  return (
    <div>
    <Navbar />
    <TourList />
    <About />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
