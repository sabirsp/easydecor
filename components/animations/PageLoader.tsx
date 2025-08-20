import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageLoaderProps {
  isLoading?: boolean;
  onComplete?: () => void;
  duration?: number;
  showLogo?: boolean;
}

export default function PageLoader({
  isLoading = true,
  onComplete,
  duration = 4000, // Increased default duration
  showLogo = true
}: PageLoaderProps) {
  const [stage, setStage] = useState<'loading' | 'revealing' | 'complete'>('loading');

  useEffect(() => {
    if (!isLoading) return;

    // Stage 1: Loading with logo and dots (0-75% of duration)
    const timer1 = setTimeout(() => {
      setStage('revealing');
    }, duration * 0.75); // 3 seconds for loading

    // Stage 2: Complete (at 100% of duration)
    const timer2 = setTimeout(() => {
      setStage('complete');
      onComplete?.();
    }, duration); // 4 seconds total

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isLoading, duration, onComplete]);

  if (!isLoading || stage === 'complete') {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-ivory"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="#c9a96e" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="text-center">
          {showLogo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="mb-12"
            >
              {/* EasyDecor Logo */}
              <div className="relative">
                <motion.h1 
                  className="text-5xl font-serif text-charcoal mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  EasyDecor
                </motion.h1>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-transparent via-muted-gold to-transparent mx-auto w-48"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1.0 }}
                />
              </div>
            </motion.div>
          )}

          {/* Loading Animation */}
          <div className="relative">
            {stage === 'loading' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex flex-col items-center space-y-8"
              >
                {/* Loading dots */}
                <div className="flex items-center justify-center space-x-3">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <motion.div
                      key={index}
                      className="w-2 h-2 bg-muted-gold rounded-full"
                      animate={{
                        scale: [0.8, 1.4, 0.8],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Loading text */}
                <motion.p
                  className="text-muted-foreground text-base tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0, duration: 0.6 }}
                >
                  Crafting your experience...
                </motion.p>
              </motion.div>
            )}

            {stage === 'revealing' && (
              <motion.div
                className="flex flex-col items-center space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.p
                  className="text-muted-foreground text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Redefining Spaces
                </motion.p>
                
                {/* Final loading indicator */}
                <motion.div
                  className="w-16 h-1 bg-muted-gold rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="h-full bg-deep-green rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Revealing Animation - Smoother curtain effect */}
        {stage === 'revealing' && (
          <>
            <motion.div
              className="absolute inset-x-0 top-0 h-1/2 bg-ivory origin-top"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="absolute inset-x-0 bottom-0 h-1/2 bg-ivory origin-bottom"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}