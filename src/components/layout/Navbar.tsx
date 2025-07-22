import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  
  const links = [
    { to: '/', label: 'Home' },
    { to: '/private-tours', label: 'Private Tours' },
    { to: '/safari', label: 'Safari' },
    { to: '/shuttle-service', label: 'Shuttle Service' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Compass className="w-8 h-8 text-amber-400 group-hover:text-amber-500" />
            </motion.div>
            <span className="text-xl font-semibold">TravelSA</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`
                  relative px-2 py-1 text-gray-700 hover:text-amber-500 transition-colors
                  ${location.pathname === to ? 'text-amber-500' : ''}
                `}
              >
                {label}
                {location.pathname === to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}