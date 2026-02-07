import React from 'react'
import { motion } from 'framer-motion'
import {
    Receipt,
    Package,
    Cpu,
    BarChart3,
    Settings,
    ArrowRight
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const services = [
    {
        icon: Receipt,
        title: 'Billing & Invoicing Systems',
        description: 'Custom billing software that handles invoicing, payment tracking, and financial reporting. Built to match your specific business workflow.',
        features: ['GST Compliant', 'Multi-currency', 'Automated Reminders']
    },
    {
        icon: Package,
        title: 'Inventory Management',
        description: 'Track stock levels, manage suppliers, and automate reordering. Real-time visibility across all your inventory operations.',
        features: ['Stock Alerts', 'Barcode Support', 'Supplier Management']
    },
    {
        icon: Cpu,
        title: 'Business Process Automation',
        description: 'Eliminate repetitive tasks and streamline operations. We automate workflows to save time and reduce human error.',
        features: ['Workflow Automation', 'Task Scheduling', 'Integration Ready']
    },
    {
        icon: BarChart3,
        title: 'Reporting & Analytics',
        description: 'Transform your data into actionable insights. Custom dashboards and reports that help you make informed decisions.',
        features: ['Custom Dashboards', 'Export Options', 'Real-time Data']
    },
    {
        icon: Settings,
        title: 'Maintenance & Support',
        description: 'Ongoing technical support and maintenance to keep your systems running smoothly. We are here when you need us.',
        features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring']
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
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

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#050508] relative">
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
                        What We Do
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto text-lg">
                        We build practical software solutions that help businesses operate more efficiently.
                        No unnecessary complexity—just tools that work.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full group hover:border-[rgba(212,175,55,0.3)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-6 h-6 text-[#050508]" />
                                    </div>
                                    <CardTitle className="group-hover:text-[#D4AF37] transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[rgba(255,255,255,0.6)] mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-[rgba(255,255,255,0.6)]">
                                                <ArrowRight className="w-3 h-3 mr-2 text-[#D4AF37]" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
