'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function AuraCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring physics for the cursor movement
    const springConfig = { damping: 25, stiffness: 500, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Trail points state
    const [trailPoints, setTrailPoints] = useState([]);
    const [showTrail, setShowTrail] = useState(true);
    const trailLength = 20; // Number of trail segments
    const fadeTimeoutRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Show trail when moving
            setShowTrail(true);

            // Clear existing timeout
            if (fadeTimeoutRef.current) {
                clearTimeout(fadeTimeoutRef.current);
            }

            // Set new timeout to hide trail after 1 second
            fadeTimeoutRef.current = setTimeout(() => {
                setShowTrail(false);
                setTrailPoints([]);
            }, 1000);

            // Add new point to trail
            setTrailPoints(prev => {
                const newPoint = {
                    x: e.clientX,
                    y: e.clientY,
                    id: Date.now() + Math.random()
                };
                const updated = [newPoint, ...prev];
                return updated.slice(0, trailLength);
            });
        };

        const handleMouseOver = (e) => {
            // Check if hovering over interactive elements
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            if (fadeTimeoutRef.current) {
                clearTimeout(fadeTimeoutRef.current);
            }
        };
    }, [cursorX, cursorY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Trail Line */}
            {showTrail && (
                <svg className="absolute inset-0 w-full h-full">
                    <defs>
                        <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#eab308" stopOpacity="0" />
                            <stop offset="50%" stopColor="#eab308" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
                        </linearGradient>
                    </defs>
                    {trailPoints.length > 1 && (
                        <path
                            d={`M ${trailPoints.map((p, i) => `${p.x},${p.y}`).join(' L ')}`}
                            stroke="url(#trailGradient)"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity={0.7}
                        />
                    )}
                    {/* Glow effect */}
                    {trailPoints.length > 1 && (
                        <path
                            d={`M ${trailPoints.map((p, i) => `${p.x},${p.y}`).join(' L ')}`}
                            stroke="#eab308"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity={0.3}
                            filter="blur(4px)"
                        />
                    )}
                </svg>
            )}
        </div>
    );
}
