import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div 
      className="w-full flex justify-center items-center py-20 bg-black text-white"

    >
      <div className="max-w-4xl mx-auto p-8 bg-black rounded-2xl shadow-lg ml-10 border-0">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-accent  mb-6">
          About Me
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-300  leading-relaxed font-mono">
        Hi! I'm Nikhil Sai Jaddu, a tech enthusiast who loves turning ideas into powerful software. I specialize in building sleek UIs with React, crafting efficient backends with Node.js & Java, and optimizing databases with PostgreSQL & MongoDB.

        Currently pursuing my Master’s in Computer Science at Indiana University, I wear multiple hats—teaching C & Unix as an Associate Instructor, developing web solutions at Indiana Daily Student, and previously engineering systems for FedEx at Wipro.

        I build, I optimize, I innovate—one line of code at a time. 🚀

        </p>

        {/* Roles */}
        {/* <div className="mt-6 space-y-3 text-center">
          <p className="text-lg text-gray-400">
            🎓 **Master’s in Computer Science** at <span className="text-white">Indiana University</span>
          </p>
          <p className="text-lg text-gray-400">
            👨‍🏫 **Associate Instructor** - Teaching C & Unix
          </p>
          <p className="text-lg text-gray-400">
            💻 **Web Developer** - Indiana Daily Student
          </p>
          <p className="text-lg text-gray-400">
            🚀 **Ex-Software Engineer** at Wipro (FedEx)
          </p>
        </div> */}

        {/* Catchphrase */}
        {/* <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-white">
            "I build, I optimize, I innovate—one line of code at a time." 🚀
          </h3>
        </div> */}
      </div>
    </motion.div>
  );
};

export default AboutMe;
