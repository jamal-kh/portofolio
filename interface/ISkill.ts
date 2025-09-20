import { SVGProps } from "react";

export default interface ISkill {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>; 
  title: string;
  technologies: string[];
  knowledgePercent: number; 
}