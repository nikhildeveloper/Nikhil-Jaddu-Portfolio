import { FaReact,FaJava, FaDatabase, FaPython, FaLinux,FaNodeJs,FaGithub, FaDocker, FaSpotify,FaUsers,FaSearch,FaHandshake,FaLock , FaMicrophone,FaLanguage,FaFileDownload,FaEnvelope,FaPizzaSlice,FaShoppingCart,FaMoneyBillWave, FaUserShield, FaRobot,FaBluetooth,FaLightbulb,FaWifi, FaCuttlefish, FaJs, FaAngular, 
    FaHtml5, FaBootstrap, FaProductHunt, 
    FaJira, FaProjectDiagram, FaGitAlt, FaMicrosoft, FaFlask } from 'react-icons/fa'; // Import the necessary icons
import { SiPython,SiJavascript,SiMongodb, SiExpress, SiJira, SiRedux,SiAngular,SiGit,SiBitbucket,SiFlask,SiOpencv,SiKeras, SiTypescript, SiPostgresql, SiFirebase,  
     SiPostman, SiIntellijidea, SiJupyter, SiTailwindcss} from 'react-icons/si';

     import { InfiniteMovingCards } from '../ui/InfiniteCards';

import React from 'react'
     
function InfiniteSkills() {
    const skills = [
        {
          quote: "Programming Languages",
          name: "",
          title: (
            <div className="flex justify-center space-x-6 mt-8">
              <div className="flex flex-col items-center">
                <SiPython className="text-4xl text-blue-600" />
                <span className="text-sm text-white">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <SiJavascript className="text-4xl text-yellow-500" />
                <span className="text-sm text-white">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJava className="text-4xl text-red-600" />
                <span className="text-sm text-white">Java</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-4xl text-blue-400" />
                <span className="text-sm text-white">TypeScript</span>
              </div>
            </div>
          ),
        },
        {
          quote: "Web Development",
          name: "",
          title: (
            <div className="flex justify-center space-x-6 mt-8">
              <div className="flex flex-col items-center">
                <SiAngular className="text-4xl text-red-600" />
                <span className="text-sm text-white">Angular</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl text-blue-400" />
                <span className="text-sm text-white">React</span>
              </div>
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-4xl text-orange-600" />
                <span className="text-sm text-white">HTML5</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-4xl text-teal-400" />
                <span className="text-sm text-white">TailwindCSS</span>
              </div>
              
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-4xl text-green-500" />
                <span className="text-sm text-white">Node.js</span>
              </div>
            </div>
          ),
        },
        {
          quote: "Databases",
          name: "",
          title: (
            <div className="flex justify-center space-x-6 mt-8">
              <div className="flex flex-col items-center">
                <SiPostgresql className="text-4xl text-blue-500" />
                <span className="text-sm text-white">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-4xl text-green-500" />
                <span className="text-sm text-white">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <SiFirebase className="text-4xl text-yellow-500" />
                <span className="text-sm text-white">Firebase</span>
              </div>
            </div>
          ),
        },
        {
          quote: "Product Management",
          name: "",
          title: (
            <div className="flex justify-center space-x-6 mt-8">
              <div className="flex flex-col items-center">
                <FaProductHunt className="text-4xl text-red-500" />
                <span className="text-sm text-white">ProductHunt</span>
              </div>
              <div className="flex flex-col items-center">
                <SiJira className="text-4xl text-blue-600" />
                <span className="text-sm text-white">Jira</span>
              </div>
            </div>
          ),
        },
        {
          quote: "Other Tools",
          name: "",
          title: (
            <div className="flex justify-center space-x-6 mt-8">
              <div className="flex flex-col items-center">
                <SiGit className="text-4xl text-orange-600" />
                <span className="text-sm text-white">Git</span>
              </div>
              <div className="flex flex-col items-center">
                <FaGithub className="text-4xl text-white" />
                <span className="text-sm text-white">GitHub</span>
              </div>
              <div className="flex flex-col items-center">
                <FaMicrosoft className="text-4xl text-blue-700" />
                <span className="text-sm text-white">Microsoft</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPostman className="text-4xl text-orange-500" />
                <span className="text-sm text-white">Postman</span>
              </div>
              <div className="flex flex-col items-center">
                <SiIntellijidea className="text-4xl text-purple-600" />
                <span className="text-sm text-white">IntelliJ IDEA</span>
              </div>
              <div className="flex flex-col items-center">
                <SiJupyter className="text-4xl text-red-600" />
                <span className="text-sm text-white">Jupyter</span>
              </div>
            </div>
          ),
        },
      ];

       return (
        <div className="h-[30rem] flex flex-col antialiased bg-black dark:bg-grid-black justify-center relative overflow-hidden">
        <h2 className="ml-26 mb-10 text-3xl font-bold sm:text-4xl leading-tight bg-clip-text text-transparent bg-white">
         Technical Skills
        </h2>
        <InfiniteMovingCards items={skills} direction="right" speed="slow" />
      </div>
       )
     }
     
     export default InfiniteSkills