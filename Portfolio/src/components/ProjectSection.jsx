import { ArrowRight, ExternalLink, Github } from "lucide-react"
import React from "react"

const projects = [
    {
        id: 0,
        title: "Blog page",
        description: "This is a blog page using React and Tailwind",
        image:"/projects/Blogpage.png",
        tags: ["React","TailwindCSS","JavaScript"],
        demoUrl:"http://my-blog-111.netlify.app",
        githubUrl:"https://github.com/prathambagri/chai-aur-react/tree/main/12MegaBlog"
    },
    {
        id: 1,
        title: "Blog page",
        description: "This is a blog page using React and Tailwind",
        image:"/projects/Blogpage.png",
        tags: ["React","TailwindCSS","JavaScript"],
        demoUrl:"#http://my-blog-111.netlify.app", // remove the '#' from the url when you deploy the project
        githubUrl:"#https://github.com/prathambagri/chai-aur-react/tree/main/12MegaBlog" 
    },
    {
        id: 2,
        title: "Blog page",
        description: "This is a blog page using React and Tailwind",
        image:"/projects/Blogpage.png",
        tags: ["React","TailwindCSS","JavaScript"],
        demoUrl:"#http://my-blog-111.netlify.app",
        githubUrl:"#https://github.com/prathambagri/chai-aur-react/tree/main/12MegaBlog"
    },

]
export const ProjectSection =()=>{
    return <section id="projects"className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary"> Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects. Each project was a challenge to complete and I learned a lot from them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=>(
                    <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-45 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag,key)=>(
                                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.githubUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https://github.com/prathambagri">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}