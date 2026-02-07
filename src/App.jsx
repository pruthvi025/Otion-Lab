import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function App() {
    return (
        <div className="min-h-screen text-white" style={{ backgroundColor: '#050508' }}>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Projects />
                <Team />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
