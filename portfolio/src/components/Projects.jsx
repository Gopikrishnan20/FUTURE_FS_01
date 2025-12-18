const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center mb-8">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Project 1 */}
          <div className="border rounded-lg p-5 bg-white">
            <h3 className="text-xl font-semibold mb-2">
              Personal Portfolio Website
            </h3>
            <p className="text-gray-600 mb-4">
              A full-stack personal portfolio website built using React and
              Node.js to showcase skills, projects, and achievements.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm border px-3 py-1 rounded-full">
                React
              </span>
              <span className="text-sm border px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="text-sm border px-3 py-1 rounded-full">
                Node.js
              </span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border rounded-lg p-5 bg-white">
            <h3 className="text-xl font-semibold mb-2">
              Full Stack Web Application
            </h3>
            <p className="text-gray-600 mb-4">
              A web application with a React frontend and Node.js backend,
              featuring REST API integration and database connectivity.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm border px-3 py-1 rounded-full">
                React
              </span>
              <span className="text-sm border px-3 py-1 rounded-full">
                Express.js
              </span>
              <span className="text-sm border px-3 py-1 rounded-full">
                MongoDB
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
