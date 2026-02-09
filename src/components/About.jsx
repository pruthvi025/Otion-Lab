import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function About() {
    const videoRef = useRef(null)
    const sectionRef = useRef(null)

    // Auto-play video when section comes into view
    useEffect(() => {
        const videoElement = videoRef.current
        const sectionElement = sectionRef.current

        if (!videoElement || !sectionElement) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Video is visible - auto play (muted for browser policy)
                        videoElement.muted = true
                        videoElement.play().catch((err) => {
                            console.log('Autoplay prevented:', err)
                        })
                    } else {
                        // Video is not visible - pause
                        videoElement.pause()
                    }
                })
            },
            {
                threshold: 0.3, // Trigger when 30% of section is visible
            }
        )

        observer.observe(sectionElement)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <section ref={sectionRef} id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#050508] relative overflow-hidden">
            {/* Subtle background glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%)'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                >
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-[10px] sm:text-xs font-medium tracking-wider uppercase bg-[rgba(212,175,55,0.1)] text-[#D4AF37] border border-[rgba(212,175,55,0.2)] rounded-full">
                        About Us
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
                        Discover <span className="text-gradient">Otion Lab</span>
                    </h2>
                    <p className="text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-0">
                        Watch our story and learn how we're transforming businesses with innovative software solutions.
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative max-w-5xl mx-auto px-0 sm:px-0"
                >
                    {/* Video Frame with elegant border */}
                    <div
                        className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
                        style={{
                            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.2)',
                        }}
                    >
                        {/* Golden accent border glow */}
                        <div
                            className="absolute -inset-[1px] rounded-2xl pointer-events-none"
                            style={{
                                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, transparent 50%, rgba(212, 175, 55, 0.1) 100%)',
                            }}
                        />

                        {/* Video Element - Auto-play, Loop, Muted, NO controls */}
                        <div className="relative aspect-video" style={{ background: 'linear-gradient(135deg, #0a0a12 0%, #1a1a25 50%, #0a0a12 100%)' }}>
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                loop
                                muted
                                playsInline
                                preload="auto"
                            >
                                <source src="/Video_Generation_Request_Fulfilled.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div
                        className="hidden sm:block absolute -bottom-4 -left-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full blur-2xl pointer-events-none"
                        style={{ background: 'rgba(212, 175, 55, 0.15)' }}
                    />
                    <div
                        className="hidden sm:block absolute -top-4 -right-4 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full blur-3xl pointer-events-none"
                        style={{ background: 'rgba(212, 175, 55, 0.1)' }}
                    />
                </motion.div>

                {/* Tagline below video */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg lg:text-xl text-[rgba(255,255,255,0.5)] font-light italic px-4 sm:px-0"
                >
                    "Building software that powers your business growth"
                </motion.p>
            </div>
        </section>
    )
}
