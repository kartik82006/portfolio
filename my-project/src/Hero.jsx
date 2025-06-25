import React from "react";
import { animate, motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div 
    initial ={{height: "30%"}}
    animate={{height: "100%"}}
    transition={{duration:0.6, ease:"easeOut"}}
    className="flex flex-col h-screen w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <video 
      autoPlay
      loop
      muted
      className="w-full h-full object-cover rounded-lg">
        <source src="/bg_video2.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}