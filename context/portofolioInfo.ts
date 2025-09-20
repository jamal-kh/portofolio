import IPersonalInfo from '@/interface/IPersonal';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

// The actual info object
const Info: IPersonalInfo = {
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