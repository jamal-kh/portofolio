import IPersonalInfo from '@/interface/IPersonal';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

// The actual info object
const Info: IPersonalInfo = {
    fullName: "Jamal Aldeen Khalil",
    jobs: [
        "Fullstack Developer",
        "Flutter Developer"
    ],
    links: [
        {
            name: "GitHub",
            url: "https://github.com/jamal-kh",
            icon: FaGithub
        }, 
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/jamalaldeen-khalil-559b5b1b9/",
            icon: FaLinkedin
        }
    ],
    cv: {
        name: "jamal_aldeen_khalil.pdf",
        url: 'jamal_aldeen_khalil.pdf'
    },
};


export default Info;