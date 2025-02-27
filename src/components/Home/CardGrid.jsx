import { useState } from "react";
import { 
    FaGithub, FaExternalLinkAlt, FaServer, FaProjectDiagram, FaClock, FaReact, FaNodeJs, 
    FaDocker, FaDatabase, FaJava, FaAngular, FaJs, FaPython 
  } from "react-icons/fa";

  const Projects = [
    {
      id: 1,
      content: "Tour Management System",
      icon: [
        <FaReact className="text-blue-400 text-2xl"/>,
        <FaNodeJs className="text-green-400 text-2xl"/>,
        <FaDatabase className="text-yellow-500 text-2xl"/>,
        <FaDocker className= "text-blue-600 text-2xl"/>
     ],
      description: [
        "The Tour Management System is a cloud-native, secure, and high-performance travel booking platform built using React.js, Node.js, Express.js, and MongoDB, with Docker and Kubernetes for seamless deployment. ",
        "It ensures scalability and high availability through containerized microservices and Kubernetes auto-scaling.",
        "Robust security is implemented with JWT authentication, bcrypt encryption, and role-based access control (RBAC) to protect user data.", 
        "The system delivers a fast and seamless user experience, leveraging Redis caching, optimized MongoDB queries, and an interactive React.js frontend.",
        "Automated CI/CD pipelines (GitHub Actions/Jenkins) streamline deployments, reducing manual effort and improving development efficiency.",
        "Additionally, real-time monitoring with Prometheus and Grafana provides deep insights into system performance, ensuring proactive issue resolution and smooth operations."
      ],
      link: "your_tour_management_project_link",
      github: "your_tour_management_github_link",
      thumbnail: "src/assets/tourmanagement.jpeg",
    },
    {
      id: 2,
      content: "API System for Contact Management",
      description: [
        "Developed a scalable, open-source API framework in Node.js deployed on Amazon ECS, Fargate, and RDS.",
        "Optimized performance and reduced operational overhead."
      ],
      link: "your_api_project_link",
      github: "your_api_github_link",
      thumbnail: "src/assets/poc.jpeg",
    },
    {
      id: 3,
      content: "Gipher Go",
      description: [
        "Designed a dynamic website for fetching and displaying GIFs, leveraging HTML, CSS, Bootstrap 5, AngularJS, and TypeScript.",
        "Backend powered by Spring Boot (Java), MySQL, and MongoDB for efficient data storage."
      ],
      link: "your_gipher_project_link",
      github: "your_gipher_github_link",
      thumbnail: "src/assets/gipher.jpeg",
    },
    {
      id: 4,
      content: "Duclear - Time Tracker",
      description: [
        "A powerful time-tracking application built using modern technologies.",
        "Provides intuitive scheduling, productivity analytics, and seamless tracking features."
      ],
      link: "your_duclear_project_link",
      github: "your_duclear_github_link",
      thumbnail: "src/assets/timetracker.png",
    }
  ];
  

export default function CardGrid() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {Projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setSelectedCard(selectedCard === index ? null : index)}
            className={`relative bg-[#181818] text-white rounded-xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer 
              ${selectedCard === index ? "border-2 scale-105 h-auto" : "border border-transparent h-60"}
              hover:shadow-lg`}
          >
            {/* Image (No Overlap) */}
            <div className="relative w-full h-40">
              <img
                src={project.thumbnail}
                alt={project.content}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>

            {/* Project Info */}
            <div className="m-5 pb-2">
              <h3 className="text-lg font-semibold">{project.content}</h3>



              {/* Expandable Description */}
              {selectedCard === index && (
                <div className="mt-2 text-gray-400 text-sm space-y-2">
                  {project.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
              )}

            </div>
            

            {/* Buttons */}
            {selectedCard === index && (
              <div className="flex space-x-3 p-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 text-white px-3 py-2 rounded-full font-bold text-sm hover:bg-gray-700 transition"
                >
                  <FaGithub /> <span>GitHub</span>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-500 text-white px-3 py-2 rounded-full font-bold text-sm hover:bg-green-600 transition"
                >
                  <FaExternalLinkAlt /> <span>Live</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
