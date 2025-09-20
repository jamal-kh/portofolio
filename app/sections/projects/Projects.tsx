
import ProjectCard from "@/components/ProjectCard";
import projects from "@/context/projectsInfo";
import './style.css'
export default function Projects() {
    return (
        <div className="project-section grid grid-cols-3 gap-[10px] justify-start items-start pt-5 overflow-y-scroll">
            {
                projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        desc={project.desc}
                        codeLink={project.codeLink} />
                ))
            }
        </div>
    )
}