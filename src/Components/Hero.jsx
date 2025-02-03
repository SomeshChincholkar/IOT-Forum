import { Link } from 'react-router-dom';
import CircuitAnimation from './circuit-animation';
import logo from '../assets/IOT_LOGO.png'

export default function HeroSection() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000510] via-[#001233] to-[#001845] scroll-mt-16 overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <CircuitAnimation />
      </div>

      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-24 h-24 mb-8 mt-8 sm:mt-0">
          <img 
            src={logo} 
            alt="IoT Forum Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="text-center backdrop-blur-sm bg-black/30 p-8 rounded-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
            IoT Forum
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            By the Students, for the Students
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Exploring the future of connected technology through innovation,
            collaboration, and learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center backdrop-blur-sm"
            >
              Explore Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <Link
              to="/join"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

