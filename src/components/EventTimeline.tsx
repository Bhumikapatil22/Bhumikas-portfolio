import { Building2, Calendar } from "lucide-react";

function EventTimeline() {
  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-[#a22afd] to-white text-transparent bg-clip-text ">Experience</h2>
          <div className="max-w-4xl mx-auto reveal">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#a22afd] to-[#b14cfd]"></div>

              {/* Timeline items */}
              <div className="space-y-16">
                {/* Freelance Developer */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Left content */}
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                      <div className="p-6 backdrop-blur-sm bg-black/30 rounded-lg border border-[#260341] 
                         hover:border-[#af46ff]">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-[#a22afd]">Freelance Developer</h3>
                          <Calendar className="text-[#a22afd]" size={20} />
                        </div>
                        <p className="text-[#fbf6ff]   mb-4">Sep 2024 - Present</p>
                        <p className=" space-y-2">
                          Developed multiple full-stack projects for college clubs and the Training and Placement Department, enhancing functionality for a large user base.
                        </p>
                      </div>
                    </div>
                    {/* Timeline node */}
                    <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/3 flex flex-col items-center">
                      <div className="w-5 h-5 bg-[#a22afd] rounded-full border-4 border-black shadow-lg shadow-[#a22afd]"></div>
                      <div className="h-4 w-4 bg-gradient-to-r  absolute -right-4 md:block hidden"></div>
                    </div>
                  </div>
                </div>

                {/* R3 Systems */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Empty left side for desktop */}
                    <div className="md:w-1/2 hidden md:block"></div>
                    {/* Timeline node */}
                    <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/3 flex flex-col items-center">
                      <div className="w-5 h-5 bg-[#a22afd] rounded-full border-4 border-black shadow-lg shadow-[#a22afd]"></div>
                      <div className="h-4 w-4 bg-gradient-to-l  absolute -left-4 md:block hidden"></div>
                    </div>
                    {/* Right content */}
                    <div className="md:w-1/2 md:pl-8">
                      <div className="p-6 backdrop-blur-sm bg-black/30 rounded-lg border border-[#260341] 
                         hover:border-[#af46ff] ">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-[#a22afd]">Java Developer Intern</h3>
                          <Building2 className="text-[#a22afd]" size={20} />
                        </div>
                        <p className="text-[#fbf6ff]  mb-4">R3 SYSTEMS INDIA PVT. LTD. | Jul 2024</p>
                        <p className="space-y-2">
                        Gained expertise in Java, JDBC, Servlets, and Spring, developing scalable web applications and optimizing database performance.
                          </p>
                      </div>
                    </div>
                  </div>

                </div>
                {/* Freelance Developer */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Left content */}
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                      <div className="p-6 backdrop-blur-sm bg-black/30 rounded-lg border border-[#260341] 
                         hover:border-[#af46ff]">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-[#a22afd]">Technical Team Member</h3>
                          <Calendar className="text-[#a22afd]" size={20} />
                        </div>
                        <p className="text-[#fbf6ff]  mb-4">Sep 2024 - Present</p>
                        <p className="  space-y-2">
                          
                        </p>
                      </div>
                    </div>
                    {/* Timeline node */}
                    <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/3 flex flex-col items-center">
                      <div className="w-5 h-5 bg-[#a22afd] rounded-full border-4 border-black shadow-lg shadow-[#a22afd]"></div>
                      <div className="h-4 w-4 bg-gradient-to-r  absolute -right-4 md:block hidden"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default EventTimeline;