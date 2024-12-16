import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 5,
    ram: '2GB',
    storage: '25GB NVMe',
    features: ['1 vCPU Core', 'Unlimited Players', 'DDoS Protection', 'Instant Setup']
  },
  {
    name: 'Pro',
    price: 15,
    ram: '6GB',
    storage: '75GB NVMe',
    features: ['2 vCPU Cores', 'Unlimited Players', 'DDoS Protection', 'Instant Setup', 'Premium Support']
  },
  {
    name: 'Ultimate',
    price: 30,
    ram: '12GB',
    storage: '150GB NVMe',
    features: ['4 vCPU Cores', 'Unlimited Players', 'DDoS Protection', 'Instant Setup', 'Premium Support', 'Daily Backups']
  }
];

export default function Plans() {
  return (
    <div id="plans" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Select the perfect plan for your Minecraft server
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                  <span className="ml-1 text-xl text-gray-400">/month</span>
                </div>
                <p className="mt-4 text-gray-400">
                  {plan.ram} RAM<br />
                  {plan.storage}
                </p>
              </div>
              <div className="px-6 pt-6 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}