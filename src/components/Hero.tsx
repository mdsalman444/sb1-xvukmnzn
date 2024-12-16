import React from 'react';
import { Server, Cpu, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
          alt="Minecraft background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Premium Minecraft Server Hosting
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Launch your Minecraft server in seconds with our high-performance VPS hosting. 
          Featuring DDoS protection, SSD storage, and 24/7 support.
        </p>
        <div className="mt-10">
          <button className="bg-green-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-600 transition-colors">
            Get Started Now
          </button>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex items-center space-x-4">
            <Server className="h-8 w-8 text-green-500" />
            <div>
              <h3 className="text-white font-semibold">Instant Setup</h3>
              <p className="text-gray-400">Deploy your server in seconds</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Cpu className="h-8 w-8 text-green-500" />
            <div>
              <h3 className="text-white font-semibold">High Performance</h3>
              <p className="text-gray-400">Premium hardware & NVMe SSDs</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="h-8 w-8 text-green-500" />
            <div>
              <h3 className="text-white font-semibold">Global Network</h3>
              <p className="text-gray-400">Multiple locations worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}