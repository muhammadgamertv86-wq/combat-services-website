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
    const trailLength = 20; // Number of trail segments
    const fadeIntervalRef = useRef(null);
    const lastMoveTimeRef = useRef(Date.now());

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Update last move time
            lastMoveTimeRef.current = Date.now();

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

        // Fade out trail gradually when not moving
        fadeIntervalRef.current = setInterval(() => {
            const timeSinceLastMove = Date.now() - lastMoveTimeRef.current;

            // If mouse hasn't moved for 100ms, start removing points from the end
            if (timeSinceLastMove > 100) {
                setTrailPoints(prev => {
                    if (prev.length === 0) return prev;
                    // Remove last point (oldest point at the end of the trail)
                    return prev.slice(0, -1);
                });
            }
        }, 50); // Remove one point every 50ms for smooth fade

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            if (fadeIntervalRef.current) {
                clearInterval(fadeIntervalRef.current);
            }
        };
    }, [cursorX, cursorY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Trail Line */}
            {trailPoints.length > 1 && (
                <svg className="absolute inset-0 w-full h-full">
                    <defs>
                        <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#eab308" stopOpacity="0" />
                            <stop offset="50%" stopColor="#eab308" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
                        </linearGradient>
                    </defs>
                    <path
                        d={`M ${trailPoints.map((p, i) => `${p.x},${p.y}`).join(' L ')}`}
                        stroke="url(#trailGradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={0.7}
                    />
                    {/* Glow effect */}
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
                </svg>
            )}
        </div>
    );
}
