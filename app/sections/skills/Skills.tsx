import skills from "@/context/skillsInfo";
import SkillCard from "@/components/SkillCard";
export default function Skills() {
    return (
        <div className="project-section w-full grid grid-cols-3 gap-[10px] justify-start items-start pt-5 overflow-y-scroll">
            {
                skills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        icon={skill.icon}
                        title={skill.title}
                        technologies={skill.technologies}
                        knowledgePercent={skill.knowledgePercent}
                    />
                ))
            }
        </div>
    )
}