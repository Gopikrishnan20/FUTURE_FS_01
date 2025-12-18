const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Frontend */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-700">
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Node.js</li>
              <li>Python</li>
              <li>REST APIs</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Git & GitHub</li>
              <li>Linux</li>
              <li>VS Code</li>
              <li>Basic Docker</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
