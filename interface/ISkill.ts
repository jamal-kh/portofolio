import { IconType } from "react-icons";

export default interface ISkill {
  icon: IconType; 
  title: string;
  technologies: string[];
  knowledgePercent: number; 
}