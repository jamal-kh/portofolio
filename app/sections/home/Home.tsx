import Info from "@/context/portofolioInfo";
import Link from "next/link";
import "./style.css"

export default function Home() {
    return (
        <div className="flex w-full h-full justify-between flex-col items-center ">
            <div className=" flex flex-col w-full h-full text-center items-center justify-center" >
                <h1 className="text-4xl md:text-3xl sm:text-2xl">{Info.fullName}</h1>

                <div className="flex items-center justify-center">
                    <p className="text-[14px] whitespace-nowrap">{Info.jobs.join(" - ")}</p>
                </div>

                <a
                    href={Info.cv.url}
                    download={Info.cv.name}
                    className="download-cv-btn"
                >
                    Download CV
                </a>
            </div>

            <div className="flex gap-4 mt-4 w-[100%] justify-end">
                {Info.links.map((link, index) => {
                    const Icon = link.icon; 
                    return (
                        <Link
                            key={index}
                            href={link.url}
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            <Icon size={20} strokeWidth={2} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
