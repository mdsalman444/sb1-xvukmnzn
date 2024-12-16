import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Locations from './components/Locations';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Plans />
      <Locations />
      <Features />
    </div>
  );
}

export default App;