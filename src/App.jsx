import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Hero';
import AboutSection from './Components/About';
import ProjectsSection from './Components/Projects';
import EventsSection from './Components/Events';
import TeamSection from './Components/Team';
import ContactSection from './Components/Contact';
import Footer from './Components/Footer'
import Merchandise from './Components/Merchandise'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EventsSection />
          <TeamSection />
          <Merchandise />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

