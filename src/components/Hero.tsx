import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
function Hero() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      };   
    return (
        <>
            <section id="home" className="min-h-screen flex items-center justify-center relative">
                <div className="text-center space-y-6 animate-fadeIn backdrop-blur-sm p-8 rounded-lg">
                    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#a22afd] to-white text-transparent bg-clip-text">
                    {/* #DEACF5  */}
                    
                        Bhumika Patil
                    </h1>
                    <p className="text-xl md:text-2xl text-[#e7b4fe]">Computer Science Student & Developer</p>
                    <p className="text-lg text-[#ce8fff] max-w-2xl mx-auto px-4">
                        Passionate about creating elegant solutions to complex problems
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="https://github.com/Bhumikapatil22" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[#9715fa]">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/bhumika-patil-490aba25a/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[#9715fa]">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:bhumikapatil2204@gmail.com" className="p-2 hover:text-[#9715fa]">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
                <button
                    onClick={() => scrollToSection('about')}
                    className="absolute bottom-8 animate-bounce text-[#9715fa]"
                >
                    <ChevronDown size={32} />
                </button>
            </section>
        </>
    )
}
export default Hero;
