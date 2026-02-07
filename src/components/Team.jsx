import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Mail, Phone, X, Briefcase, Award, Calendar } from 'lucide-react'

const team = [
    {
        name: 'Pruthviraj Thorbole',
        role: 'Lead Developer',
        description: 'Leads architecture decisions and ensures systems are built for reliability, scalability, and real-world use.',
        image: '/team/pruthviraj.jpg',
        linkedin: 'https://www.linkedin.com/in/pruthviraj-thorbole-b33370294',
        email: 'pruthvirajthorbole96@gmail.com',
        phone: '+91 8262968845',
        bio: 'Pruthviraj focuses on designing scalable business solutions and leading technical direction across projects. He ensures clean architecture, performance, and long-term maintainability.',
        expertise: [
            'Backend Development',
            'Full-Stack Development',
            'System Architecture',
            'Database Design',
            'API Development',
            'Project Leadership'
        ],
        projects: '20+ Projects Delivered',
    },
    {
        name: 'Soham Patil',
        role: 'Frontend Developer',
        description: 'Builds clean, responsive, and high-performance user interfaces with a strong focus on usability and modern UI standards.',
        image: '/team/soham.png',
        linkedin: 'https://www.linkedin.com/in/soham-patil-29b6a5287/',
        email: 'sohampatil200616@gmail.com',
        phone: '+91 9284582172',
        bio: 'Soham specializes in turning designs into smooth, interactive web experiences. He emphasizes performance, accessibility, and pixel-perfect UI implementation.',
        expertise: [
            'React.js',
            'JavaScript (ES6+)',
            'UI/UX Implementation',
            'Responsive Web Design',
            'Tailwind CSS / Bootstrap',
            'HTML5 & CSS3',
            'Performance Optimization'
        ],
        projects: '21+ Projects Delivered',
    },
    {
        name: 'Pruthviraj Patil',
        role: 'DevOps & Cloud Engineer',
        description: 'Manages cloud infrastructure, deployment pipelines, and system reliability for scalable applications.',
        image: '/team/pruthvi.jpeg',
        linkedin: 'https://www.linkedin.com/in/pruthviraj-s-patil-650762266/',
        email: 'mr.pruthviraj07@gmail.com',
        phone: '+91 9021868990',
        bio: 'Pruthviraj handles cloud architecture, CI/CD pipelines, and deployment automation. He ensures systems are secure, scalable, and production-ready.',
        expertise: [
            'Cloud Infrastructure (AWS)',
            'CI/CD Pipelines',
            'Docker & Containerization',
            'Server Management',
            'Deployment Automation',
            'Monitoring & Reliability'
        ],
        projects: '22+ Projects Delivered',
    },
];


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
}

// Team Member Info Popup Modal
function TeamModal({ member, isOpen, onClose }) {
    const [imageError, setImageError] = useState(false)

    if (!isOpen || !member) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        style={{ backgroundColor: 'rgba(5, 5, 8, 0.9)', backdropFilter: 'blur(8px)' }}
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
                            style={{
                                background: '#0a0a12',
                                border: '1px solid rgba(212, 175, 55, 0.2)',
                                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.1)'
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            {/* Header Section */}
                            <div className="p-8 pb-0">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                    {/* Profile Image */}
                                    <div
                                        className="w-28 h-28 rounded-full overflow-hidden border-3 flex-shrink-0"
                                        style={{ borderColor: '#D4AF37', borderWidth: '3px' }}
                                    >
                                        {!imageError ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-contain"
                                                onError={() => setImageError(true)}
                                            />
                                        ) : (
                                            <div
                                                className="w-full h-full flex items-center justify-center text-3xl font-bold"
                                                style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)', color: '#050508' }}
                                            >
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                        )}
                                    </div>

                                    {/* Name & Role */}
                                    <div className="text-center sm:text-left">
                                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-1">
                                            {member.name}
                                        </h2>
                                        <p className="text-lg font-medium mb-3" style={{ color: '#D4AF37' }}>
                                            {member.role}
                                        </p>

                                        {/* Quick Stats */}
                                        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                                            <span
                                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                                                style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37' }}
                                            >
                                                <Calendar className="w-3.5 h-3.5" />
                                                {member.experience}
                                            </span>
                                            <span
                                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                                                style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37' }}
                                            >
                                                <Award className="w-3.5 h-3.5" />
                                                {member.projects}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bio Section */}
                            <div className="p-8 pt-6">
                                <p
                                    className="text-base leading-relaxed mb-6"
                                    style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                                >
                                    {member.bio}
                                </p>

                                {/* Expertise */}
                                <div className="mb-6">
                                    <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                                        <Briefcase className="w-4 h-4" />
                                        Expertise
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {member.expertise.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 rounded-lg text-sm"
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    border: '1px solid rgba(212, 175, 55, 0.15)'
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full mb-6" style={{ background: 'rgba(212, 175, 55, 0.15)' }} />

                                {/* Contact Section */}
                                <div>
                                    <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                                        Get in Touch
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                                            style={{
                                                background: 'rgba(212, 175, 55, 0.1)',
                                                border: '1px solid rgba(212, 175, 55, 0.2)'
                                            }}
                                        >
                                            <Linkedin className="w-4 h-4" style={{ color: '#D4AF37' }} />
                                            <span className="text-sm text-white">LinkedIn</span>
                                        </a>
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                                            style={{
                                                background: 'rgba(212, 175, 55, 0.1)',
                                                border: '1px solid rgba(212, 175, 55, 0.2)'
                                            }}
                                        >
                                            <Mail className="w-4 h-4" style={{ color: '#D4AF37' }} />
                                            <span className="text-sm text-white">Email</span>
                                        </a>
                                        <a
                                            href={`https://wa.me/${member.phone.replace(/\+/g, '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                                            style={{
                                                background: 'rgba(212, 175, 55, 0.1)',
                                                border: '1px solid rgba(212, 175, 55, 0.2)'
                                            }}
                                        >
                                            <Phone className="w-4 h-4" style={{ color: '#D4AF37' }} />
                                            <span className="text-sm text-white">WhatsApp</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

// Team Card Component
function TeamCard({ member, onClick }) {
    const [isHovered, setIsHovered] = useState(false)
    const [imageError, setImageError] = useState(false)

    return (
        <motion.div
            variants={itemVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            className="group cursor-pointer"
        >
            <div
                className="h-full rounded-2xl p-6 transition-all duration-300"
                style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(212, 175, 55, 0.15)',
                    boxShadow: isHovered
                        ? '0 8px 32px rgba(212, 175, 55, 0.15), 0 0 0 1px rgba(212, 175, 55, 0.2)'
                        : '0 4px 16px rgba(0, 0, 0, 0.2)',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                }}
            >
                {/* Profile Image */}
                <div className="relative w-24 h-24 mx-auto mb-5">
                    <div
                        className="w-full h-full rounded-full overflow-hidden border-2 transition-all duration-300"
                        style={{
                            borderColor: isHovered ? '#D4AF37' : 'rgba(212, 175, 55, 0.3)',
                        }}
                    >
                        {!imageError ? (
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-contain"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <div
                                className="w-full h-full flex items-center justify-center text-2xl font-semibold"
                                style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)', color: '#050508' }}
                            >
                                {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                        )}
                    </div>
                </div>

                {/* Name */}
                <h3 className="font-heading text-lg font-semibold text-center mb-1 text-white">
                    {member.name}
                </h3>

                {/* Role */}
                <p
                    className="text-sm font-medium text-center mb-3"
                    style={{ color: '#D4AF37' }}
                >
                    {member.role}
                </p>

                {/* Description */}
                <p
                    className="text-sm text-center leading-relaxed mb-4"
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                    {member.description}
                </p>

                {/* Click to view more hint */}
                <p
                    className="text-xs text-center transition-opacity duration-300"
                    style={{
                        color: '#D4AF37',
                        opacity: isHovered ? 1 : 0.5
                    }}
                >
                    Click to view profile →
                </p>
            </div>
        </motion.div>
    )
}

export default function Team() {
    const [selectedMember, setSelectedMember] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCardClick = (member) => {
        setSelectedMember(member)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setTimeout(() => setSelectedMember(null), 300)
    }

    return (
        <>
            <section id="team" className="py-24 min-h-screen" style={{ background: '#050508' }}>
                <div className="max-w-7xl mx-auto px-6">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span
                            className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase rounded-full"
                            style={{
                                background: 'rgba(212, 175, 55, 0.1)',
                                color: '#D4AF37',
                                border: '1px solid rgba(212, 175, 55, 0.2)'
                            }}
                        >
                            Who We Are
                        </span>
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                            Our <span className="text-gradient">Team</span>
                        </h2>
                        <p
                            className="max-w-2xl mx-auto text-lg"
                            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        >
                            A focused group of professionals who take pride in building software that businesses can depend on.
                        </p>
                    </motion.div>

                    {/* Team Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {team.map((member, index) => (
                            <TeamCard
                                key={index}
                                member={member}
                                onClick={() => handleCardClick(member)}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team Member Popup Modal */}
            <TeamModal
                member={selectedMember}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    )
}
