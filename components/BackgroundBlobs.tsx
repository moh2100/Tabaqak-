import React from 'react';
import { motion } from 'framer-motion';

const BackgroundBlobs: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Blob 1 - Top Left */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className="absolute top-0 -left-40 w-96 h-96 bg-brand-200/20 rounded-full blur-[100px] opacity-50 mix-blend-multiply"
            />

            {/* Blob 2 - Bottom Right */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-200/20 rounded-full blur-[100px] opacity-50 mix-blend-multiply"
            />

            {/* Blob 3 - Center */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/10 rounded-full blur-[120px] opacity-30 mix-blend-multiply"
            />
        </div>
    );
};

export default BackgroundBlobs;
