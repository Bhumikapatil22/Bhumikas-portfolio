import { skills } from "../data/skills";
function Skills()
{
    return(
        <>
         {/* Skills Section */}
                <section id="skills" className="py-20">
                  <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-[#a22afd] to-white text-transparent bg-clip-text ">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                      {skills.map((skill, index) => (
                        <div 
                          key={index}
                          className="flex flex-col items-center p-6 backdrop-blur-sm bg-black/30 rounded-lg hover:bg-[rgb(12,1,21)] transition-colors reveal"
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
                          <span className="text-center text-[#ebd0ff]">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
        </>
    )
}
export default Skills;