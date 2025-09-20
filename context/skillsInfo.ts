import ISkill from "@/interface/ISkill";
import { FaDatabase, FaGithub, FaLaptopCode, FaServer } from "react-icons/fa6";

const skills: ISkill[] = [
  {
    icon: FaLaptopCode ,
    title: "Frontend",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js"],
    knowledgePercent: 90,
  },
  {
    icon: FaServer,
    title: "Backend",
    technologies: ["JavaScript", "TypeScript", "Node.js", "Python (Telegram Bots)"],
    knowledgePercent: 85,
  },
  {
    icon: FaDatabase,
    title: "Databases",
    technologies: ["MongoDB", "MySQL"],
    knowledgePercent: 75,
  },
  {
    icon: FaGithub,
    title: "Version Control",
    technologies: ["Git", "GitHub"],
    knowledgePercent: 85,
  },
];

export default skills;
