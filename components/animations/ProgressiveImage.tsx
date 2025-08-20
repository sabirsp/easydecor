import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  lowQualitySrc?: string;
  placeholder?: string;
  blurAmount?: number;
  loadingClassName?: string;
  onLoad?: () => void;
  priority?: boolean;
}

export default function ProgressiveImage({
  src,
  alt,
  className = '',
  lowQualitySrc,
  placeholder,
  blurAmount = 20,
  loadingClassName = '',
  onLoad,
  priority = false
}: ProgressiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc || placeholder || '');

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
      onLoad?.();
    };
    
    img.onerror = () => {
      setIsError(true);
      setIsLoading(false);
    };

    // Add a small delay for better UX unless it's priority
    const delay = priority ? 0 : 100;
    const timer = setTimeout(() => {
      img.src = src;
    }, delay);

    return () => {
      clearTimeout(timer);
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, priority]);

  if (isError) {
    return (
      <div className={`bg-warm-beige flex items-center justify-center ${className}`}>
        <div className="text-center text-muted-foreground p-8">
          <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Low quality image */}
      {(isLoading && currentSrc) && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ImageWithFallback
            src={currentSrc}
            alt={alt}
            className={`w-full h-full object-cover ${loadingClassName}`}
            style={{
              filter: `blur(${blurAmount}px)`,
              transform: 'scale(1.1)' // Prevent blur edges
            }}
          />
        </motion.div>
      )}

      {/* Loading shimmer effect */}
      {isLoading && !currentSrc && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-warm-beige via-light-grey to-warm-beige bg-[length:200px_100%]"
          animate={{
            backgroundPosition: [-200, 200]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear"
          }}
        />
      )}

      {/* High quality image */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ 
          duration: 0.6,
          ease: [0.25, 0.25, 0.25, 1]
        }}
      >
        <ImageWithFallback
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Loading indicator */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-3">
            <motion.div
              className="w-6 h-6 border-2 border-muted-gold border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}