import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './components/About'; // Correct path for About.js
import ServicePage from './pages/Servicepage'; // Importing the dynamic ServicePage component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* About page route */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:serviceName" element={<ServicePage />} /> {/* Dynamic service page route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
