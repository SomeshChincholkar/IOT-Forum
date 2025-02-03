import logo from '../assets/IOT_LOGO.png'

export default function Footer() {
    return (
<footer className="bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center">
                  <img src={logo} alt="IoT Forum Logo" className="h-8 w-8" />
                  <span className="ml-2 text-white text-lg font-semibold">IoT Forum</span>
                </div>
                <p className="mt-4 text-gray-400 text-sm">
                  By the students, for the students. A platform dedicated to exploring and sharing IoT knowledge.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {['Home', 'About Us', 'Projects', 'Resources'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">VIIT Campus</p>
                  <p className="text-gray-400 text-sm">Pune, Maharashtra</p>
                  <p className="text-gray-400 text-sm">Email: iot.forum@viit.ac.in</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-center text-gray-400 text-sm">
                © 2024 IoT Forum, VIIT. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
    );
  }
  
  