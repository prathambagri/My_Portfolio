import { AboutMe } from "../components/AboutMe"
import { ContactSaction } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectSection"
import { SkillsSection } from "../components/SkillsSection"
import { ThemeToggle } from "../components/ThemeToggle"
import {StarBackground} from "@/components/StarBackground"
export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme tooggle */}
    <ThemeToggle/>
        {/* Background Effect */}
    <StarBackground/>
        {/* NavBar */}
    <Navbar/>
        {/* Main Content */}
    <main>
        <HeroSection />

        <SkillsSection/>
        
        <ProjectSection/>
        
        <AboutMe/>
        
        <ContactSaction/>
        
    </main>
        {/* Footer */}
        <Footer/>
    </div>
    )
}