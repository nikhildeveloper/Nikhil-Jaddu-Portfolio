import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#222222] text-white py-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Footer Text */}
        <p className="text-center text-white text-sm md:text-base">
          Made with 💙 by <span className="text-accent font-semibold">Nikhil Sai Jaddu</span> 
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/nikhildeveloper" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition duration-300">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/nikhildeveloper" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition duration-300">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="mailto:njaddu@iu.edu" className="text-white hover:text-white transition duration-300">
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
