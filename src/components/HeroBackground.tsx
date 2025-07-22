import React from 'react';

export default function HeroBackground() {
  return (
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}