import React from 'react';
import { Shield, Cpu, HardDrive, Clock, Server, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'DDoS Protection',
    description: '24/7 protection against DDoS attacks with our advanced mitigation system'
  },
  {
    icon: Cpu,
    title: 'High Performance',
    description: 'Premium hardware with latest-gen processors for optimal performance'
  },
  {
    icon: HardDrive,
    title: 'NVMe Storage',
    description: 'Lightning-fast NVMe SSDs for quick load times and smooth gameplay'
  },
  {
    icon: Clock,
    title: '99.9% Uptime',
    description: 'Guaranteed uptime with redundant infrastructure'
  },
  {
    icon: Server,
    title: 'Instant Setup',
    description: 'Get your server running in seconds with our automated deployment'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert support team available around the clock to help you'
  }
];

export default function Features() {
  return (
    <div id="features" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Premium Features
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Everything you need for a professional Minecraft server
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}