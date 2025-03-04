function Navigation(){
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      };   
    return(
        <>{/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50 border-b border-[#310550e7]">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-[#ab37fd]"></span>
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('home')} className="hover:text-[#b042ff] transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#b042ff] transition-colors">About</button>
                <button onClick={() => scrollToSection('skills')} className="hover:text-[#b042ff] transition-colors">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="hover:text-[#b042ff]  transition-colors">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#b042ff] transition-colors">Contact</button>
              </div>
            </div>
          </div>
        </nav></>
    )
}
export default Navigation;