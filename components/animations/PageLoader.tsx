import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
  duration?: number;
}

export default function PageLoader({ 
  isLoading, 
  onComplete,
  duration = 4000 
}: PageLoaderProps) {
  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ivory"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.8, 
              ease: [0.25, 0.25, 0.25, 0.75] 
            }
          }}
        >
          {/* Background pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #c9a96e 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, #3d5a5a 0%, transparent 50%),
                               radial-gradient(circle at 40% 40%, #d4c4a8 0%, transparent 50%)`,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 0.05,
              transition: { duration: 2, ease: "easeOut" }
            }}
          />

          {/* Main loader container */}
          <motion.div
            className="text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { 
                duration: 0.8, 
                ease: [0.25, 0.25, 0.25, 0.75] 
              }
            }}
          >
            {/* Logo/Brand name */}
            <motion.div
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { 
                  duration: 1, 
                  delay: 0.3,
                  ease: "easeOut" 
                }
              }}
            >
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-2">
                EasyDecor
              </h1>
              <motion.p 
                className="text-muted-foreground text-sm tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { 
                    duration: 0.8, 
                    delay: 0.8 
                  }
                }}
              >
                Redefining Spaces
              </motion.p>
            </motion.div>

            {/* Loading animation */}
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { 
                  duration: 0.6, 
                  delay: 1.2 
                }
              }}
            >
              {/* Elegant dot animation */}
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-muted-gold rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-48 h-1 bg-light-grey rounded-full overflow-hidden mx-auto"
              initial={{ opacity: 0, width: 0 }}
              animate={{ 
                opacity: 1, 
                width: 192, // 48 * 4 = 192px
                transition: { 
                  duration: 0.8, 
                  delay: 1.5 
                }
              }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-muted-gold to-deep-green"
                initial={{ width: 0 }}
                animate={{ 
                  width: "100%",
                  transition: { 
                    duration: duration / 1000 - 0.5, // Convert to seconds, minus exit time
                    delay: 1.8,
                    ease: "easeInOut" 
                  }
                }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="text-xs text-muted-foreground mt-4 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { 
                  duration: 0.6, 
                  delay: 2 
                }
              }}
            >
              Creating beautiful spaces
            </motion.p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 border border-muted-gold/20 rounded-full"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: 1, 
              rotate: 360,
              transition: { 
                duration: 3, 
                delay: 1,
                ease: "easeInOut" 
              }
            }}
          />
          
          <motion.div
            className="absolute bottom-10 right-10 w-16 h-16 border border-deep-green/20 rounded-full"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: 1, 
              rotate: -360,
              transition: { 
                duration: 4, 
                delay: 0.5,
                ease: "easeInOut" 
              }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
