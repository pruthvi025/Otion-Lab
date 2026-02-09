import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#team', label: 'Team' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={cn(
                "fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl",
                "bg-[#0a0a12] backdrop-blur-xl border border-[rgba(212,175,55,0.15)] rounded-2xl transition-all duration-300",
                isScrolled && "shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            )}
        >
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo + Navigation Links together on the left */}
                <div className="flex items-center">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <span className="font-heading text-xl font-bold text-gradient">
                            Otion Lab
                        </span>
                    </a>

                    {/* Desktop Navigation - Right of logo with spacing */}
                    <div className="hidden md:flex items-center gap-8 ml-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-[rgba(255,255,255,0.6)] hover:text-[#D4AF37] transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA Button - Far right */}
                <div className="hidden md:block">
                    <Button asChild>
                        <a href="#contact">Contact Us</a>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden border-t border-[rgba(212,175,55,0.15)]"
                >
                    <div className="flex flex-col gap-4 px-6 py-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-[rgba(255,255,255,0.6)] hover:text-[#D4AF37] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button asChild className="mt-2">
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                                Contact Us
                            </a>
                        </Button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}
