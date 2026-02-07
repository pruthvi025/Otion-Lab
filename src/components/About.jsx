import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export default function About() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false) // Sound ON by default
    const videoRef = useRef(null)
    const sectionRef = useRef(null)
    const hasUserInteracted = useRef(false)

    // Track user interaction to enable sound (browsers require user gesture)
    useEffect(() => {
        const handleInteraction = () => {
            hasUserInteracted.current = true
            // Try to unmute if video is playing
            if (videoRef.current && isPlaying) {
                videoRef.current.muted = false
                setIsMuted(false)
            }
        }

        // Listen for any user interaction
        document.addEventListener('click', handleInteraction, { once: true })
        document.addEventListener('scroll', handleInteraction, { once: true })
        document.addEventListener('touchstart', handleInteraction, { once: true })

        return () => {
            document.removeEventListener('click', handleInteraction)
            document.removeEventListener('scroll', handleInteraction)
            document.removeEventListener('touchstart', handleInteraction)
        }
    }, [isPlaying])

    // Auto-play video when section comes into view
    useEffect(() => {
        const videoElement = videoRef.current
        const sectionElement = sectionRef.current

        if (!videoElement || !sectionElement) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Try to play with sound first
                        videoElement.muted = false
                        videoElement.play().then(() => {
                            setIsPlaying(true)
                            setIsMuted(false)
                        }).catch((error) => {
                            // If autoplay with sound fails, try muted
                            console.log('Autoplay with sound prevented, trying muted:', error)
                            videoElement.muted = true
                            setIsMuted(true)
                            videoElement.play().then(() => {
                                setIsPlaying(true)
                            }).catch((err) => {
                                console.log('Autoplay completely prevented:', err)
                            })
                        })
                    } else {
                        // Section is not visible - pause video
                        videoElement.pause()
                        setIsPlaying(false)
                    }
                })
            },
            {
                threshold: 0.5, // Trigger when 50% of section is visible
            }
        )

        observer.observe(sectionElement)

        return () => {
            observer.disconnect()
        }
    }, [])

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const handleVideoEnd = () => {
        setIsPlaying(false)
    }

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

                        {/* Video Element */}
                        <div className="relative aspect-video" style={{ background: 'linear-gradient(135deg, #0a0a12 0%, #1a1a25 50%, #0a0a12 100%)' }}>
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                muted={isMuted}
                                playsInline
                                preload="metadata"
                                onEnded={handleVideoEnd}
                            >
                                <source src="/Video_Generation_Request_Fulfilled.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Play Button Overlay - Shows when paused */}
                            {!isPlaying && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] cursor-pointer"
                                    onClick={togglePlay}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center"
                                        style={{
                                            background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                                            boxShadow: '0 10px 40px rgba(212, 175, 55, 0.4)',
                                        }}
                                    >
                                        <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#050508] ml-0.5 sm:ml-1" fill="#050508" />
                                    </motion.div>
                                    <motion.div
                                        className="absolute bottom-3 sm:bottom-4 md:bottom-6 text-xs sm:text-sm font-medium text-white/80"
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        Click to play
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* Video Controls - Shows when playing */}
                            {isPlaying && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent"
                                >
                                    <div className="flex items-center justify-between">
                                        <button
                                            onClick={togglePlay}
                                            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.25)] active:bg-[rgba(255,255,255,0.3)] transition-colors"
                                        >
                                            <Pause className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                                        </button>
                                        <button
                                            onClick={toggleMute}
                                            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.25)] active:bg-[rgba(255,255,255,0.3)] transition-colors"
                                        >
                                            {isMuted ? (
                                                <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                                            ) : (
                                                <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
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
