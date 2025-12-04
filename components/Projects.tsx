export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "🛒",
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "✅",
      link: "#",
      github: "#",
    },
    {
      title: "Design System",
      description: "Comprehensive UI component library with accessibility-first approach and extensive documentation.",
      tags: ["React", "Storybook", "Figma", "CSS-in-JS"],
      image: "🎨",
      link: "#",
      github: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics platform with interactive visualizations and customizable reporting.",
      tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
      image: "📊",
      link: "#",
      github: "#",
    },
    {
      title: "Mobile App Design",
      description: "Modern mobile app design with intuitive UX and seamless user experience.",
      tags: ["Figma", "UI/UX", "Prototyping", "Mobile"],
      image: "📱",
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description: "Custom portfolio website with animations, dark mode, and responsive design.",
      tags: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
      image: "🌐",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-7xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    View Project →
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-600 dark:text-gray-400 hover:underline font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
