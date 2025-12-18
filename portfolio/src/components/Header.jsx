const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-gray-800">
          Gopi Krishnan
        </h1>

        <nav className="space-x-6">
          <a href="#hero" className="text-gray-600 hover:text-black">
            Home
          </a>
          <a href="#projects" className="text-gray-600 hover:text-black">
            Projects
          </a>
          <a href="#skills" className="text-gray-600 hover:text-black">
            Skills
          </a>
          <a href="#contact" className="text-gray-600 hover:text-black">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
