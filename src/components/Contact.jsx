import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone, Send, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassContainer } from '@/components/ui/glass-container'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        requirement: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const message = `Hi, I'm ${formData.name}.\n\nPhone: ${formData.phone}\n\nRequirement: ${formData.requirement}`
        const whatsappUrl = `https://wa.me/918262968845?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="py-24 bg-[#0a0a12] relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-[rgba(212,175,55,0.1)] text-[#D4AF37] border border-[rgba(212,175,55,0.2)] rounded-full">
                        Get In Touch
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                        Let's <span className="text-gradient">Talk</span>
                    </h2>
                    <p className="text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto text-lg">
                        Have a project in mind? We would love to discuss how we can help your business.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="font-heading text-2xl font-semibold mb-6 text-white">
                            Contact Information
                        </h3>
                        <p className="text-[rgba(255,255,255,0.6)] mb-8 leading-relaxed">
                            Reach out to us through any of these channels. We typically respond within 24 hours.
                        </p>

                        <div className="space-y-6">


                            {/* Email */}
                            <a
                                href="mailto:contact@softwaresolutions.com"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center group-hover:bg-[rgba(212,175,55,0.2)] transition-colors">
                                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <p className="text-sm text-[rgba(255,255,255,0.6)]">Email</p>
                                    <p className="font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                                        contact@softwaresolutions.com
                                    </p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+918262968845"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center group-hover:bg-[rgba(212,175,55,0.2)] transition-colors">
                                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <p className="text-sm text-[rgba(255,255,255,0.6)]">Phone</p>
                                    <p className="font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                                        +91 8262968845
                                    </p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#10101a] flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-[rgba(255,255,255,0.6)]" />
                                </div>
                                <div>
                                    <p className="text-sm text-[rgba(255,255,255,0.6)]">Location</p>
                                    <p className="font-medium text-white">Sangli, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <GlassContainer variant="gradient">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#050508] border border-[rgba(212,175,55,0.15)] rounded-lg text-white placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                                        placeholder="My Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#050508] border border-[rgba(212,175,55,0.15)] rounded-lg text-white placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                                        placeholder="+91 xxxxxxx"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="requirement" className="block text-sm font-medium mb-2 text-white">
                                        Your Requirement
                                    </label>
                                    <textarea
                                        id="requirement"
                                        name="requirement"
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-[#050508] border border-[rgba(212,175,55,0.15)] rounded-lg text-white placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none"
                                        placeholder="Briefly describe what you need..."
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full">
                                    <Send className="w-4 h-4 mr-2" />
                                    Send via WhatsApp
                                </Button>
                            </form>
                        </GlassContainer>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
