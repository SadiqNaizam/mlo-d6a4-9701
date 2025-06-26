import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

/**
 * Props for the AnimatedCartIcon component.
 */
interface AnimatedCartIconProps {
  /** The number of items currently in the cart. */
  itemCount: number;
  /** Optional click handler function. */
  onClick?: () => void;
}

/**
 * Animation variants for the jiggle effect using framer-motion.
 */
const pocketVariants: Variants = {
  // Base state
  stop: {
    scale: 1,
    rotate: 0,
  },
  // Animation state
  jiggle: {
    scale: [1, 1.25, 0.95, 1.15, 1],
    rotate: [0, -12, 12, -8, 8, 0],
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
    },
  },
};

/**
 * A custom cart icon stylized as Doraemon's 4D pocket.
 * It displays an item count and animates when new items are added to the cart.
 */
const AnimatedCartIcon: React.FC<AnimatedCartIconProps> = ({ itemCount = 0, onClick }) => {
  console.log('AnimatedCartIcon loaded');
  const controls = useAnimation();
  const prevItemCountRef = useRef(itemCount);

  // Trigger the jiggle animation when the item count increases.
  useEffect(() => {
    // We only want to animate when an item is added, not on initial load or when an item is removed.
    if (itemCount > prevItemCountRef.current) {
      // Start the 'jiggle' animation and then return to the 'stop' state.
      controls.start('jiggle').then(() => controls.start('stop'));
    }

    // Update the previous item count for the next render.
    prevItemCountRef.current = itemCount;
  }, [itemCount, controls]);

  return (
    <motion.button
      onClick={onClick}
      className="relative flex items-center justify-center w-20 h-16 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
      aria-label={`View shopping cart with ${itemCount} items`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      variants={pocketVariants}
      animate={controls}
      initial="stop"
    >
      {/* The 4D Pocket shape */}
      <div className="w-16 h-8 bg-slate-100 border-2 border-black rounded-t-xl absolute bottom-2 shadow-inner" />

      {/* Item count badge, only visible when there are items in the cart */}
      {itemCount > 0 && (
        <Badge
          variant="destructive"
          className="absolute top-1 right-1 z-10 h-6 w-6 flex items-center justify-center rounded-full text-sm font-bold pointer-events-none"
          aria-hidden="true" // Hide from screen readers as the button's aria-label provides the info
        >
          {itemCount > 99 ? '99+' : itemCount}
        </Badge>
      )}
    </motion.button>
  );
};

export default AnimatedCartIcon;