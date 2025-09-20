import { IconType } from "react-icons";

interface ILinkItem {
    name: string;
    url: string;
    icon: IconType;
    
}

interface IPersonalInfo {
    fullName: string;
    jobs: string[];
    links: ILinkItem[];
    cv: {
        name: string,
        url: string
    };
}

export default IPersonalInfo;