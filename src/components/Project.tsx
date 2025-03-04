import { projects } from '../data/projects';
import { Github, ExternalLink } from 'lucide-react';
function Project(){
    return(
        <>
        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-[#a22afd] to-white text-transparent bg-clip-text ">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm bg-black/30 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-[#260341] reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold ">{project.name}</h3>
                    <p className="text-[#efd9ff] ">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-[#0d0017]  text-[#efd9ff] rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4 pt-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-[#efd9ff] hover:text-[#960bfa]  transition-colors"
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-[#efd9ff]  hover:text-[#960bfa] transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        </>
    )
}
export default Project;