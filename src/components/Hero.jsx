import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative w-screen h-screen overflow-hidden bg-[#050508]">
            {/* FULL-SCREEN Background Video - 100vw × 100vh */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* Left side gradient overlay for text readability - covers left 50% */}
            <div
                className="absolute top-0 left-0 h-full z-[1]"
                style={{
                    width: '55%',
                    background: 'linear-gradient(90deg, #050508 0%, rgba(5,5,8,0.95) 40%, rgba(5,5,8,0.7) 70%, rgba(5,5,8,0.3) 85%, transparent 100%)'
                }}
            />

            {/* Subtle bottom gradient fade */}
            <div
                className="absolute bottom-0 left-0 right-0 z-[2]"
                style={{
                    height: '150px',
                    background: 'linear-gradient(0deg, #050508 0%, transparent 100%)'
                }}
            />

            {/* Film grain effect */}
            <div className="absolute inset-0 z-[3] film-grain pointer-events-none" />

            {/* FIXED LEFT CONTENT RAIL - Text Container */}
            <div className="absolute inset-0 z-10 flex items-center">
                {/* Left-locked content - 35-40% of viewport */}
                <div
                    className="h-full flex items-center pl-6 sm:pl-10 lg:pl-16 xl:pl-24"
                    style={{ width: '42%', minWidth: '320px', maxWidth: '580px' }}
                >
                    <div className="w-full">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="text-left"
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-[rgba(212,175,55,0.1)] text-[#D4AF37] border border-[rgba(212,175,55,0.2)] rounded-full">
                                Otion Lab - Software Solutions for Business
                            </span>
                        </motion.div>

                        {/* Headline - LEFT ALIGNED */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-left text-white"
                        >
                            We Build Software That{' '}
                            <span className="text-gradient">Powers Your Business</span>
                        </motion.h1>

                        {/* Description - LEFT ALIGNED */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                            className="text-base sm:text-lg lg:text-xl text-[rgba(255,255,255,0.6)] mb-8 leading-relaxed text-left"
                        >
                            Built to support your ambition, quietly powering progress every step of the way.
                        </motion.p>

                        {/* CTA Buttons - LEFT ALIGNED */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button size="lg" asChild>
                                <a href="#projects">
                                    View Projects
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href="#contact">Contact Us</a>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                    <ChevronDown className="w-6 h-6 text-[rgba(212,175,55,0.5)]" />
                </motion.div>
            </motion.div>
        </section>
    )
}
