import IPersonalInfo from '@/interface/IPersonal';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

// The actual info object
const Info: IPersonalInfo = {
    fullName: "Jamal Aldeen Khalil",
    jobs: [
        "Fullstack Developer",

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
    ],
    cv: {
        name: "jamal_aldeen_khalil.pdf",
        url: 'jamal_aldeen_khalil.pdf'
    },
};


export default Info;