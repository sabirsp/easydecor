import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface LazyLoaderProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number;
  once?: boolean;
  skeleton?: React.ReactNode;
  loading?: boolean;
}

export default function LazyLoader({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.1,
  once = true,
  skeleton,
  loading = false
}: LazyLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(!loading);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, once]);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 1000 + delay);
      return () => clearTimeout(timer);
    }
  }, [loading, delay]);

  const getAnimationVariants = () => {
    const distance = 50;
    
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  if (loading && !isLoaded && skeleton) {
    return (
      <div ref={ref} className={className}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {skeleton}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible && isLoaded ? "visible" : "hidden"}
      variants={getAnimationVariants()}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.25, 0.25, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}