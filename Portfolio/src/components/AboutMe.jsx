import { Briefcase, Code, User } from "lucide-react"

export const AboutMe =()=>{
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3>Passionate Web Developer</h3>
                    <p className="text-muted-foreground">
                        I'm a passionate and creative developer with a keen interest in building impactful digital experiences. 
                        My journey in tech started out of curiosity and quickly turned into a deep love for coding and problem-solving.
                    </p>
                    <p className="text-muted-foreground">
                        I enjoy working with modern web technologies, exploring new frameworks, and continuously learning to stay ahead 
                        in this fast-paced industry and I'm always eager to tackle new challenges, connect with like-minded 
                        individuals, and contribute to exciting projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get in Touch
                        </a>
                         <a href="https://pratham-cv.tiiny.site" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-5 w-5 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    creating interactive, user-friendly web apps with React, JavaScript, 
                                    and a focus on clean, maintainable code.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-5 w-5 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">User Experience</h4>
                                <p className="text-muted-foreground">
                                    I focus on creating seamless user experiences, making sure every 
                                    interaction is smooth, responsive, and enjoyable.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-5 w-5 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Work Experience</h4>
                                <p className="text-muted-foreground">
                                    While I may not have professional experience yet, I am passionate about 
                                    learning, quick to adapt, and excited to start my journey in the tech industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}