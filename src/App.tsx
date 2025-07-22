import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GamificationProvider } from './context/GamificationContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import PrivateTours from './pages/PrivateTours';
import Safari from './pages/Safari';
import ShuttleService from './pages/ShuttleService';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <GamificationProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="private-tours" element={<PrivateTours />} />
            <Route path="safari" element={<Safari />} />
            <Route path="shuttle-service" element={<ShuttleService />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </GamificationProvider>
    </BrowserRouter>
  );
}

export default App;