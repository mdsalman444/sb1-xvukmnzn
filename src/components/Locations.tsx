import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  {
    country: 'United States',
    city: 'New York',
    ping: '< 20ms',
    flag: '🇺🇸'
  },
  {
    country: 'Germany',
    city: 'Frankfurt',
    ping: '< 25ms',
    flag: '🇩🇪'
  },
  {
    country: 'Singapore',
    city: 'Singapore',
    ping: '< 30ms',
    flag: '🇸🇬'
  },
  {
    country: 'India',
    city: 'Mumbai',
    ping: '< 35ms',
    flag: '🇮🇳'
  }
];

export default function Locations() {
  return (
    <div id="locations" className="bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Global Server Locations
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Choose from multiple locations worldwide for the best gaming experience
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <div key={location.country} className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <span className="text-4xl">{location.flag}</span>
                <MapPin className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{location.country}</h3>
              <p className="mt-2 text-gray-400">{location.city}</p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500 text-white">
                Ping: {location.ping}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}