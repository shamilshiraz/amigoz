import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

function Card({ title, description, image, color, i }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

    return (
        <div ref={container} className="h-[100vh] flex items-center justify-center sticky top-0">
            <div
                className="relative text-black h-[60vh] w-[90vw] sm:w-[60vw] border border-black rounded-full flex flex-col justify-center items-center"
                style={{ backgroundColor: color, top: `calc(${i * 25}px)` }}
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 rounded-full overflow-hidden"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: scale, // Apply scaling effect to the background
                    }}
                />
                {/* Text Overlay */}
                <div className="relative z-10 text-center px-4 text-white">
                    <p className="text-2xl sm:text-4xl font-bold">{title}</p>
                    {description && (
                        <p className="text-lg sm:text-xl mt-4">{description}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
