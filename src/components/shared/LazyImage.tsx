import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LazyImage({ src, alt, className = '' }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting)
    );

    const imgElement = document.createElement('img');
    if (isIntersecting) {
      imgElement.src = src;
      imgElement.onload = () => setIsLoaded(true);
    }

    return () => observer.disconnect();
  }, [src, isIntersecting]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      className={`relative overflow-hidden ${className}`}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {isIntersecting && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${isLoaded ? 'visible' : 'invisible'}`}
          loading="lazy"
        />
      )}
    </motion.div>
  );
}