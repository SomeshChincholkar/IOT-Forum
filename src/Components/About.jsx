export default function AboutSection() {
  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Workshops" },
    { number: "20+", label: "Partners" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-2">About IoT Forum</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-500 mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To create a collaborative platform where students can explore, learn,
                and innovate in the field of Internet of Things, fostering a community
                of tech enthusiasts and future innovators.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-purple-500 mb-4">What We Do</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Organize workshops and seminars
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Facilitate project collaborations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Provide technical resources
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  {stat.number}
                </span>
                <span className="text-gray-400 mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

