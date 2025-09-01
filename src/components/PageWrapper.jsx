// src/components/PageWrapper.jsx
"use client"; // És bona pràctica marcar-lo com a client si embolcalla components de client

// ✅ Importació corregida
import { motion } from '@/lib/motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

// Ja no necessitem el template.js, podem tornar a posar la lògica aquí
// si fem servir AnimatePresence al layout. Per simplicitat, mantenim aquest wrapper
// per a les animacions de cada pàgina.
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;