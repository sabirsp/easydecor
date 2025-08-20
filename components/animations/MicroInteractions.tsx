import { motion } from 'motion/react';
import { useState } from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  loading?: boolean;
}

export function AnimatedButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
  loading = false
}: AnimatedButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-deep-green text-white hover:bg-opacity-90';
      case 'secondary':
        return 'border border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-white';
      case 'ghost':
        return 'text-deep-green hover:bg-deep-green hover:text-white';
      default:
        return 'bg-deep-green text-white hover:bg-opacity-90';
    }
  };

  return (
    <motion.button
      className={`
        relative px-6 py-3 rounded-lg font-medium transition-colors duration-200
        ${getVariantClasses()}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onTapStart={() => setIsPressed(true)}
      onTap={() => setIsPressed(false)}
      onTapCancel={() => setIsPressed(false)}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center"
          >
            <motion.div
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            Loading...
          </motion.div>
        ) : (
          <motion.span
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Ripple effect */}
      {isPressed && !disabled && (
        <motion.div
          className="absolute inset-0 bg-white rounded-lg"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ originX: 0.5, originY: 0.5 }}
        />
      )}
    </motion.button>
  );
}

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  shadowIntensity?: 'light' | 'medium' | 'strong';
}

export function HoverCard({
  children,
  className = '',
  hoverScale = 1.02,
  shadowIntensity = 'medium'
}: HoverCardProps) {
  const getShadowClass = () => {
    switch (shadowIntensity) {
      case 'light':
        return 'hover:shadow-md';
      case 'medium':
        return 'hover:shadow-lg';
      case 'strong':
        return 'hover:shadow-xl';
      default:
        return 'hover:shadow-lg';
    }
  };

  return (
    <motion.div
      className={`transition-all duration-300 ${getShadowClass()} ${className}`}
      whileHover={{ 
        scale: hoverScale,
        y: -2
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

export function FloatingElement({
  children,
  className = '',
  amplitude = 10,
  duration = 3,
  delay = 0
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude/2, amplitude/2, -amplitude/2]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
}

interface CounterAnimationProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function CounterAnimation({
  from,
  to,
  duration = 2,
  className = '',
  suffix = '',
  prefix = ''
}: CounterAnimationProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ value: from }}
        animate={{ value: to }}
        transition={{ duration, ease: "easeOut" }}
        onUpdate={(latest) => {
          const element = document.querySelector(`[data-counter="${to}"]`);
          if (element) {
            element.textContent = `${prefix}${Math.round(latest.value as number)}${suffix}`;
          }
        }}
        data-counter={to}
      >
        {prefix}{from}{suffix}
      </motion.span>
    </motion.span>
  );
}

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function Typewriter({
  text,
  speed = 50,
  className = '',
  onComplete
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onAnimationComplete={() => {
        let i = 0;
        const timer = setInterval(() => {
          setDisplayText(text.slice(0, i + 1));
          i++;
          if (i >= text.length) {
            clearInterval(timer);
            onComplete?.();
          }
        }, speed);
        return () => clearInterval(timer);
      }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.span>
  );
}