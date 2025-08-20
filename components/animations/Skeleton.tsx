import { motion } from 'motion/react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card' | 'image';
  lines?: number;
  height?: string | number;
  width?: string | number;
}

export function Skeleton({ 
  className = '', 
  variant = 'rectangular',
  lines = 1,
  height,
  width
}: SkeletonProps) {
  const shimmerAnimation = {
    backgroundPosition: [-200, 200],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "linear"
    }
  };

  const baseClasses = "bg-gradient-to-r from-warm-beige via-light-grey to-warm-beige bg-[length:200px_100%] animate-pulse rounded";

  const getVariantClasses = () => {
    switch (variant) {
      case 'text':
        return 'h-4 rounded';
      case 'circular':
        return 'rounded-full aspect-square';
      case 'rectangular':
        return 'rounded-lg';
      case 'card':
        return 'rounded-xl';
      case 'image':
        return 'rounded-lg aspect-video';
      default:
        return 'rounded';
    }
  };

  const getSize = () => {
    const styles: React.CSSProperties = {};
    if (height) styles.height = typeof height === 'number' ? `${height}px` : height;
    if (width) styles.width = typeof width === 'number' ? `${width}px` : width;
    return styles;
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            className={`${baseClasses} ${getVariantClasses()}`}
            style={{
              ...getSize(),
              width: index === lines - 1 ? '75%' : '100%'
            }}
            animate={shimmerAnimation}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      style={getSize()}
      animate={shimmerAnimation}
    />
  );
}

// Pre-built skeleton components
export function TextSkeleton({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return <Skeleton variant="text" lines={lines} className={className} />;
}

export function ImageSkeleton({ className = '' }: { className?: string }) {
  return <Skeleton variant="image" className={`w-full ${className}`} />;
}

export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`p-6 border rounded-xl bg-card ${className}`}>
      <div className="space-y-4">
        <ImageSkeleton className="h-48" />
        <div className="space-y-2">
          <Skeleton variant="text" width="60%" />
          <TextSkeleton lines={2} />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton variant="circular" width={40} height={40} />
          <div className="flex-1">
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="text" width="60%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceCardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`p-8 bg-card rounded-xl border ${className}`}>
      <div className="space-y-4">
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton variant="text" width="70%" height={24} />
        <TextSkeleton lines={3} />
        <Skeleton variant="rectangular" width="50%" height={20} />
      </div>
    </div>
  );
}

export function TestimonialSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`p-6 bg-card rounded-xl border ${className}`}>
      <div className="space-y-4">
        <TextSkeleton lines={3} />
        <div className="flex items-center space-x-4">
          <Skeleton variant="circular" width={48} height={48} />
          <div className="flex-1">
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="text" width="60%" />
          </div>
        </div>
      </div>
    </div>
  );
}