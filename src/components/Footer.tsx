function Footer(){
    return(
        <>
         {/* Footer */}
         <footer className="py-8 border-t border-cyan-500/20 backdrop-blur-sm bg-black/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-cyan-400">© 2024 John Doe. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#home" className="text-cyan-100 hover:text-cyan-400 transition-colors">Home</a>
                <a href="#about" className="text-cyan-100 hover:text-cyan-400 transition-colors">About</a>
                <a href="#projects" className="text-cyan-100 hover:text-cyan-400 transition-colors">Projects</a>
                <a href="#contact" className="text-cyan-100 hover:text-cyan-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
        </>
    )
}
export default Footer;