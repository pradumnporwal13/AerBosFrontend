import React from 'react';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import AirPollutionFactors from './components/AirPollution';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Home from './components/Home';
import Contact from './components/Contact';
import Information from './components/Information'
import FloatingButton from "./components/FloatingButton"; 


const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Home />
      <Information/>
      <AirPollutionFactors />
      <Features />
      <AboutUs />
      <Contact />
      <FloatingButton/>
      <Footer />
    </ThemeProvider>
  );
};

export default App;




