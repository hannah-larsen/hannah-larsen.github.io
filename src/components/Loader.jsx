"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-darkg flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="bg-lightg w-20 h-20 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
