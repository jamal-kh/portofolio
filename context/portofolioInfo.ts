import { SVGProps } from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
interface LinkItem {
    name: string;
    url: string;
    icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

interface PersonalInfo {
    fullName: string;
    jobs: string[];
    links: LinkItem[];
}

// The actual info object
const Info: PersonalInfo = {
    fullName: "Jamal Aldeen Khalil",
    jobs: [
        "Backend Developer",
        "Cybersecurity"
    ],
    links: [
        {
            name: "GitHub",
            url: "https://github.com/jamal-kh?tab=repositories",
            icon: FaGithub
        }, 
        {
            name: "LinkedIn",
            url: "https://github.com/jamal-kh?tab=repositories",
            icon: FaLinkedin
        }
    ]
};


export default Info;