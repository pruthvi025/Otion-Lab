import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const footerLinks = {
    company: [
        { label: 'About Us', href: '#' },
        { label: 'Our Team', href: '#team' },
        { label: 'Careers', href: '#' },
    ],
    services: [
        { label: 'Billing Systems', href: '#services' },
        { label: 'Inventory Management', href: '#services' },
        { label: 'Process Automation', href: '#services' },
        { label: 'Reporting Solutions', href: '#services' },
    ],
    projects: [
        { label: 'Retail Billing', href: '#projects' },
        { label: 'Inventory Manager', href: '#projects' },
        { label: 'Clinic Software', href: '#projects' },
        { label: 'Order Automation', href: '#projects' },
    ],
    contact: [
        { label: 'WhatsApp', href: 'https://wa.me/918262968845' },
        { label: 'Email', href: 'mailto:contact@softwaresolutions.com' },
        { label: 'Phone', href: 'tel:+918262968845' },
    ],
}

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#050508] border-t border-[rgba(212,175,55,0.15)]">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <a href="#" className="inline-block mb-4">
                            <span className="font-heading text-2xl font-bold text-gradient">
                                Otion Lab
                            </span>
                        </a>
                        <p className="text-[rgba(255,255,255,0.6)] leading-relaxed max-w-sm mb-6">
                            Building reliable software solutions for small and mid-scale businesses.
                            Custom billing, inventory, automation, and reporting systems.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://wa.me/918262968845"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-[#10101a] flex items-center justify-center hover:bg-[rgba(212,175,55,0.2)] hover:text-[#D4AF37] transition-colors text-[rgba(255,255,255,0.6)]"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:contact@softwaresolutions.com"
                                className="w-10 h-10 rounded-lg bg-[#10101a] flex items-center justify-center hover:bg-[rgba(212,175,55,0.2)] hover:text-[#D4AF37] transition-colors text-[rgba(255,255,255,0.6)]"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4 text-[#D4AF37]">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4 text-[#D4AF37]">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Links */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4 text-[#D4AF37]">Contact</h4>
                        <ul className="space-y-3">
                            {footerLinks.contact.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-[rgba(212,175,55,0.15)]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-[rgba(255,255,255,0.6)]">
                            © {currentYear} Otion Lab. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-sm text-[rgba(255,255,255,0.6)] hover:text-[#D4AF37] transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-[rgba(255,255,255,0.6)] hover:text-[#D4AF37] transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
