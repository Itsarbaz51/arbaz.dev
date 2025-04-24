import React from 'react';
import { motion } from 'framer-motion';

const WhatsappButton = () => {
  return (
    <motion.a
      href="https://wa.me/919649730196"
      target="_blank"
      className="fixed bottom-20 right-5 p-4 rounded-full bg-green-500 shadow-lg z-50"
      whileHover={{ scale: 1.1 }} // Animation on hover
      whileTap={{ scale: 0.95 }}  // Animation on tap
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img 
        src="https://img.icons8.com/ios-filled/30/ffffff/whatsapp.png" 
        alt="WhatsApp" 
      />
    </motion.a>
  );
};

export default WhatsappButton;
