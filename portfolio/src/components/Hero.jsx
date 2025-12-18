const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6"
    >
      <div className="max-w-3xl text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Hi, I’m Gopi Krishnan
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          A Computer Science student passionate about building clean,
          scalable, and user-friendly web applications.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
