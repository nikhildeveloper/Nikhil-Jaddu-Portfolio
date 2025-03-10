import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    // <motion.div 
    //   className="w-full flex justify-center items-center py-12 px-4 sm:px-8 bg-black text-white"
    // >
    //   <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 bg-black rounded-2xl shadow-lg border-0">
        
    //     {/* Title */}
    //     <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-6 text-center md:text-left">
    //       About Me
    //     </h2>

    //     {/* Description */}
    //     <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-mono text-center md:text-left">
    //       Hi! I'm <span className="text-white font-semibold">Nikhil Sai Jaddu</span>, a tech enthusiast who loves turning ideas into powerful software. 
    //       I specialize in building sleek UIs with <span className="text-white font-semibold">React</span>, crafting efficient backends with 
    //       <span className="text-white font-semibold"> Node.js & Java</span>, and optimizing databases with 
    //       <span className="text-white font-semibold"> PostgreSQL & MongoDB</span>.

    //       <br /><br />

    //       Currently pursuing my <span className="text-white font-semibold">Master’s in Computer Science</span> at Indiana University, I wear multiple hats—
    //       teaching <span className="text-white font-semibold">C & Unix</span> as an Associate Instructor, developing web solutions at 
    //       <span className="text-white font-semibold"> Indiana Daily Student</span>, and previously engineering systems for <span className="text-white font-semibold">FedEx</span> at Wipro.

    //       <br /><br />
          
    //       I build, I optimize, I innovate—one line of code at a time. 🚀
    //     </p>

    //   </div>
    // </motion.div>
    <motion.div 
  className="w-full flex justify-center items-center py-12 px-4 sm:px-8 bg-black text-white"
>
  <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-black rounded-2xl shadow-lg border-0">
    
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-6 text-center md:text-left">
      About Me
    </h2>

    {/* Description */}
    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-mono text-center md:text-left">
      Hi! I'm <span className="text-white font-semibold">Nikhil Sai Jaddu</span>, a tech enthusiast who loves turning ideas into powerful software. 
 

      <br /><br />
      
      
       
      I'm a Full Stack Developer with 2+ years of experience in <span className="text-white font-semibold">React.js, Angular, Java, Spring Boot, and Node.js, </span>specializing in developing scalable, high-performance web applications. Extensive expertise in <span className="text-white font-semibold">microservices architecture, API development, and database optimization</span> along with hands-on experience in cloud technologies. Proficient in CI/CD pipeline implementation, system performance optimization, and delivering seamless user experiences for enterprise-scale applications.
{/* 

      I specialize in building sleek UIs with <span className="text-white font-semibold">React</span>, crafting efficient backends with 
      <span className="text-white font-semibold"> Node.js & Java</span>, and optimizing databases with 
      <span className="text-white font-semibold"> PostgreSQL & MongoDB</span>. */}

      <br /><br />

      Currently pursuing my <span className="text-white font-semibold">Master’s in Computer Science</span> at Indiana University, I wear multiple hats—
      teaching <span className="text-white font-semibold">C & Unix , Network Programming</span> as an Associate Instructor, developing web solutions at 
      <span className="text-white font-semibold"> Indiana Daily Student</span>, and previously engineering systems for <span className="text-white font-semibold">FedEx</span> at Wipro.
    </p>

  </div>
</motion.div>

  );
};

export default AboutMe;
