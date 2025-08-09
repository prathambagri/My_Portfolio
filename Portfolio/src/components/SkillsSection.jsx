import { useState } from "react"
import {cn} from "@/lib/utils"

const skills = [
    // Frontend
  { name: "HTML/CSS", level: 60, category: "frontend" ,logo: '/tech_logo/html.png' },
  { name: "JavaScript", level: 50, category: "frontend" ,logo: '/tech_logo/javascript.png' },
  { name: "React", level: 50, category: "frontend" ,logo: '/tech_logo/reactjs.png'},
//   { name: "TypeScript", level: 85, category: "frontend" ,logo: '/tech_logo/typescript.png'},
  { name: "Tailwind CSS", level: 60, category: "frontend" ,logo: '/tech_logo/tailwindcss.png'},
//   { name: "Next.js", level: 80, category: "frontend" ,logo: '/tech_logo/nextjs.png'},

    // languages
  { name: "JAVA", level: 60, category: "Programming Languages" ,logo: '/tech_logo/java.png'},
  { name: "C", level: 60, category: "Programming Languages" ,logo: '/tech_logo/c.png'},
  { name: "PYTHON", level: 50, category: "Programming Languages" ,logo: '/tech_logo/python.png'},

  // Backend
//   { name: "Node.js", level: 80, category: "backend" ,logo: '/tech_logo/nodejs.png'},
//   { name: "Express", level: 75, category: "backend" ,logo: '/tech_logo/express.png'},
//   { name: "MongoDB", level: 70, category: "backend" ,logo: '/tech_logo/mongodb.png'},
//   { name: "PostgreSQL", level: 65, category: "backend" ,logo: '/tech_logo/postgre.png'},
//   { name: "GraphQL", level: 60, category: "backend" ,logo: '/tech_logo/.png'},

  // Tools
  { name: "GitHub", level: 90, category: "tools" ,logo: '/tech_logo/github.png'},
//   { name: "Docker", level: 70, category: "tools" ,logo: '/tech_logo/html.png'},
//   { name: "Figma", level: 85, category: "tools" ,logo: '/tech_logo/html.png'},
  { name: "VS Code", level: 95, category: "tools" ,logo: '/tech_logo/vscode.png'},
  { name: "Netlify", level: 95, category: "tools" ,logo: '/tech_logo/netlify.png'},
]

const categories = ["all","frontend","Programming Languages","tools"]
export const SkillsSection =()=>{
const [activeCategory,setActiveCategory]=useState("all");

const filteredSkills = skills.filter((skills)=>activeCategory==="all"||skills.category===activeCategory);
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="cointainer mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button 
                    key={key} 
                    onClick={()=>setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory===category?"bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}>
                        {category}
                    </button>
                ))}
            </div>
            {/* skill item */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skills,key)=>(
                    // <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    //     <div className="text-left mb-4">
                    //         <h3 className="font-semibold text-lg">{skills.name}</h3>

                    //         <img src={skills.logo} className="w-6 h-6 sm:w-8 sm:h-8"/>

                    //     </div>
                        
                    //     <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    //     <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    //     style={{width:skills.level + "%"}}
                    //     />
                    //     </div>
                    //     <div className="text-right mt-1">
                    //         <span className="text-sm text-muted-foreground">{skills.level}%</span>
                    //     </div>
                    // </div>

                    <div
                    key={skills.name}
                    className="flex items-center justify-center space-x-2 border-2 border-gray-700 rounded-lg py-2 px-2 sm:py-2 sm:px-2 text-center bg-card shadow-xs card-hover p-6"
                    >
                    <img
                        src={skills.logo}
                        alt={`${skills.name} logo`}
                        className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-muted-foreground text-xs sm:text-sm ">
                        {skills.name}
                    </span>
                </div>
                ))}
            </div>
        </div>
    </section>
}