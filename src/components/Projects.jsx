import React from 'react'
import { motion } from 'framer-motion'
import { Building2, CheckCircle, IndianRupee } from 'lucide-react'
import { GlassContainer } from '@/components/ui/glass-container'

const projects = [
    {
        title: 'Retail Billing System',
        businessType: 'Retail Store Chain',
        problem: 'Manual billing process causing delays and errors. No unified system across 5 store locations.',
        solution: 'Developed a centralized POS system with real-time inventory sync, GST-compliant invoicing, and multi-location support.',
        result: '60% faster checkout, zero billing errors, complete visibility across all stores.',
        amount: '₹25,000',
        isPaid: true
    },
    {
        title: 'Warehouse Inventory Manager',
        businessType: 'Distribution Company',
        problem: 'Stock discrepancies and manual tracking leading to overselling and stockouts.',
        solution: 'Built a barcode-based inventory system with automated stock alerts and supplier order management.',
        result: 'Reduced stock discrepancies by 95%, automated reordering saved 15 hours/week.',
        amount: '₹30,000',
        isPaid: true
    },
    {
        title: 'Clinic Management Software',
        businessType: 'Multi-specialty Clinic',
        problem: 'Paper-based patient records, manual appointment scheduling, and billing chaos.',
        solution: 'Created an integrated clinic management system with patient records, appointment scheduling, and automated billing.',
        result: 'Digitized 5000+ patient records, reduced appointment no-shows by 40%.',
        amount: '₹50,000',
        isPaid: true
    },
    {
        title: 'Order Processing Automation',
        businessType: 'E-commerce Business',
        problem: 'Manual order processing from multiple sales channels causing delays and customer complaints.',
        solution: 'Developed automated order aggregation system integrating with major marketplaces and shipping providers.',
        result: 'Order processing time reduced from 2 hours to 15 minutes, 99% order accuracy.',
        amount: '₹45,000',
        isPaid: true
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-[#0a0a12] relative">
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
                        Our Work
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                        Recent <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto text-lg">
                        Real solutions we have built for real businesses.
                        Each project solved specific operational challenges.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <GlassContainer
                                variant="gradient"
                                className="h-full hover:scale-[1.02] transition-transform duration-300"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="font-heading text-xl font-semibold mb-1 text-white">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center text-sm text-[rgba(255,255,255,0.6)]">
                                            <Building2 className="w-4 h-4 mr-1.5" />
                                            {project.businessType}
                                        </div>
                                    </div>
                                    {project.isPaid && (
                                        <div className="flex items-center gap-1 px-3 py-1 bg-[rgba(212,175,55,0.1)] text-[#D4AF37] text-sm font-medium rounded-full">
                                            <IndianRupee className="w-3.5 h-3.5" />
                                            {project.amount}
                                        </div>
                                    )}
                                </div>

                                {/* Problem */}
                                <div className="mb-4">
                                    <h4 className="text-xs font-medium uppercase tracking-wider text-[rgba(255,255,255,0.4)] mb-1">
                                        Problem
                                    </h4>
                                    <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed">
                                        {project.problem}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div className="mb-4">
                                    <h4 className="text-xs font-medium uppercase tracking-wider text-[rgba(255,255,255,0.4)] mb-1">
                                        Solution
                                    </h4>
                                    <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>

                                {/* Result */}
                                <div className="pt-4 border-t border-[rgba(212,175,55,0.15)]">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                        <p className="text-sm font-medium text-[#D4AF37]">
                                            {project.result}
                                        </p>
                                    </div>
                                </div>
                            </GlassContainer>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
