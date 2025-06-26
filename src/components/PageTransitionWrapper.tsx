import React from 'react';
import { motion } from 'framer-motion';

/**
 * Note on usage:
 * This component provides the animation definitions for page transitions.
 * For it to work correctly, including exit animations, its parent must handle
 * the animation lifecycle using <AnimatePresence> from framer-motion.
 * The parent component (typically handling routing in App.tsx) is responsible
 * for setting a unique `key` on this wrapper, which is usually derived
 * from `react-router-dom`'s `location.pathname`.
 *
 * Example structure (for context, not to be implemented here):
 * <AnimatePresence mode="wait">
 *   <Routes location={location} key={location.pathname}>
 *     <Route path="/" element={
 *       <PageTransitionWrapper>
 *         <HomePage />
 *       </PageTransitionWrapper>
 *     } />
 *     // ... other routes
 *   </Routes>
 * </AnimatePresence>
 */

interface PageTransitionWrapperProps {
  children: React.ReactNode;
  transitionType?: 'door' | 'slide';
}

const doorVariants = {
  initial: {
    clipPath: 'circle(0% at 50% 50%)',
  },
  animate: {
    clipPath: 'circle(150% at 50% 50%)',
  },
  exit: {
    clipPath: 'circle(0% at 50% 50%)',
  },
};

const slideVariants = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: '-100%',
    opacity: 0,
  },
};

const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({
  children,
  transitionType = 'door',
}) => {
  console.log('PageTransitionWrapper loaded');
  const variants = transitionType === 'door' ? doorVariants : slideVariants;

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;