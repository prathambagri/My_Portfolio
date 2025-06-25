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
                        I'm a passionate web developer with a strong background in front-end development. I have a keen ey
                        for detail and a love for creating user-friendly and visually appealing interfaces.
                    </p>
                    <p className="text-muted-foreground">
                        I'm a passionate web developer with a strong background in front-end development. I have a ke
                        ey for detail and a love for creating user-friendly and visually appealing interfaces.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get in Touch
                        </a>
                         <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
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
                                    creating responsive website and web application using 
                                    HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js
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
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    creating responsive website and web application using 
                                    HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js
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
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    creating responsive website and web application using 
                                    HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}