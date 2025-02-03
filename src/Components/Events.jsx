export default function Events() {
  const events = [
    {
      date: "December 15, 2023",
      title: "IoT Workshop Series",
      description: "Hands-on workshop covering Arduino basics and sensor integration",
      buttonText: "Register Now",
      buttonColor: "blue"
    },
    {
      date: "January 5, 2024",
      title: "Tech Talk: Future of IoT",
      description: "Expert panel discussion on emerging IoT trends and technologies",
      buttonText: "Save Spot",
      buttonColor: "purple"
    },
    {
      date: "February 20, 2024",
      title: "IoT Hackathon 2024",
      description: "48-hour hackathon to build innovative IoT solutions",
      buttonText: "Join Team",
      buttonColor: "pink"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Upcoming Events</h2>
        <p className="text-gray-400 text-center mb-12">
          Join us for exciting workshops, seminars, and hackathons
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-16"> {/* Changed from space-y-12 */}
            {events.map((event, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 z-10" />
                
                <div className={`relative ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} md:w-5/12 bg-gray-800 rounded-lg p-6`}>
                  <span className="text-purple-400 text-sm">{event.date}</span>
                  <h3 className="text-xl font-semibold text-white mt-2">{event.title}</h3>
                  <p className="text-gray-400 mt-2">{event.description}</p>
                  <button className={`mt-4 px-6 py-2 bg-${event.buttonColor}-600 text-white rounded-full hover:bg-${event.buttonColor}-700 transition-colors duration-300`}>
                    {event.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

