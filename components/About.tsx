export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
              <div className="w-60 h-60 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-6xl">
                👤
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Hello! I'm a Multi-disciplinary Professional
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate creative professional with expertise spanning design, development,
              and innovation. With a keen eye for detail and a love for solving complex problems,
              I bring ideas to life through elegant solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My diverse skill set allows me to approach projects from multiple angles, ensuring
              comprehensive and well-rounded results. Whether it's crafting beautiful user interfaces,
              writing clean code, or developing creative strategies, I'm always eager to take on new challenges.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not working on projects, you'll find me exploring new technologies,
              contributing to open-source, and continuously learning to stay at the cutting edge
              of my field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
