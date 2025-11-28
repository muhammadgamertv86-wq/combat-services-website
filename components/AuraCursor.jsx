'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function AuraCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring physics for the cursor movement
    const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Particles state
    const [particles, setParticles] = useState([]);
    const particleId = useRef(0);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Spawn sprinkles randomly on movement
            if (Math.random() > 0.7) {
                const id = particleId.current++;
                const newParticle = {
                    id,
                    x: e.clientX,
                    y: e.clientY,
                    size: Math.random() * 3 + 2,
                    color: Math.random() > 0.6 ? '#eab308' : '#ffffff', // Gold or White
                    angle: Math.random() * 360,
                    distance: Math.random() * 30 + 10
                };

                setParticles(prev => {
                    const updated = [...prev, newParticle];
                    if (updated.length > 30) return updated.slice(-30); // Limit max particles
                    return updated;
                });

                // Cleanup particle after animation
                setTimeout(() => {
                    setParticles(prev => prev.filter(p => p.id !== id));
                }, 800);
            }
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
        };
    }, [cursorX, cursorY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Main Cursor Follower */}
            <motion.div
                style={{ x: cursorXSpring, y: cursorYSpring }}
                className="fixed top-0 left-0"
            >
                <div className={`relative -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovering ? 'scale-150' : 'scale-100'}`}>
                    {/* Core White Dot */}
                    <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.9)] z-20 relative" />

                    {/* Gold Aura Glow */}
                    <div className="absolute inset-0 w-full h-full bg-gold-400 rounded-full opacity-60 blur-md animate-pulse z-10" />

                    {/* Outer Ring */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-gold-500/30 rounded-full transition-all duration-500 ${isHovering ? 'w-12 h-12 border-gold-400/60 bg-gold-500/5' : ''}`} />
                </div>
            </motion.div>

            {/* Sprinkles Particles */}
            {particles.map(p => (
                <div
                    key={p.id}
                    className="absolute rounded-full animate-sprinkle"
                    style={{
                        left: p.x,
                        top: p.y,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        '--tx': `${Math.cos(p.angle * Math.PI / 180) * p.distance}px`,
                        '--ty': `${Math.sin(p.angle * Math.PI / 180) * p.distance}px`,
                        boxShadow: `0 0 ${p.size * 2}px ${p.color}`
                    }}
                />
            ))}

            <style jsx global>{`
        @keyframes sprinkle {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0); opacity: 0; }
        }
        .animate-sprinkle {
          animation: sprinkle 0.8s ease-out forwards;
        }
      `}</style>
        </div>
    );
}
