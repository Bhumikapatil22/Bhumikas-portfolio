function Contact(){
    return(
        <>
        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto md:px-6">
            <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r  from-[#a22afd] to-white text-transparent bg-clip-text">Contact Me</h2>
            <div className="max-w-2xl mx-auto reveal">
              <form className="space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2  text-[#efd9ff] ">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-[#0c041294]  rounded-lg focus:ring-2 focus:ring-[#a21fff] outline-none border border-[#40006e]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2  text-[#efd9ff] ">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-[#0c041294]  rounded-lg focus:ring-2 focus:ring-[#a21fff] outline-none border border-[#40006e]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2  text-[#efd9ff] ">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-[#0c041294] rounded-lg focus:ring-2 focus:ring-[#a21fff] outline-none border border-[#40006e]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#efd9ff] to-[#ae44f9]  rounded-lg font-medium hover:opacity-90 transition-opacity text-black"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        </>
    )
}
export default Contact;