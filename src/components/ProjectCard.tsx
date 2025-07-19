import { ExternalLink, Globe, Github } from "lucide-react";
import { motion } from "framer-motion";
import { MagicCard } from "./ui/MagicCard";
import ShineBorder from "./ui/ShineBorder";
import { Badge } from "./ui/Badge";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  tech: string[];
  image: string;
  index: number;
  source?: string;
}

export default function ProjectCard({
  title,
  description,
  href,
  tech,
  image,
  index,
  source,
}: ProjectCardProps) {
  return (
    <MagicCard 
      className="cursor-pointer rounded-lg dark:shadow-2xl w-[45%] max-sm:w-full h-[310px] border-none !bg-transparent" 
      gradientColor="rgba(38, 38, 38, 0.4)"
    >
      <ShineBorder 
        className="border h-full w-full relative rounded-lg flex flex-col justify-center items-start md:shadow-xl !bg-transparent !pointer-events-none" 
        color={["#FF9933", "#FFFFFF", "#138808"]}
      >
        <div className="h-full w-full rounded-lg bg-white dark:bg-black p-3 flex flex-col justify-between text-black dark:text-white">
          {/* Logo */}
          <div className="px-0">
            <img src={image} alt="project-logo" width={30} height={30} />
          </div>
          
          {/* Title + Description */}
          <div className="px-0 mt-4 !pointer-events-auto">
            <a href={href || source} target="_blank" rel="noopener noreferrer" className="no-underline">
              <h1 className="text-xl text-black dark:text-white font-bold tracking-tight text-start whitespace-nowrap font-space">
                {title}
              </h1>
            </a>
            <p className="mt-2 text-sm dark:text-[#D1D5DB] text-gray-600 font-space">
              {description}
            </p>
          </div>
          
          {/* Tech Stack */}
          <div className="flex gap-1 px-0 mt-4 flex-wrap !pointer-events-auto">
            {tech.map((techItem, idx) => (
              <Badge 
                key={idx} 
                variant="outline" 
                className="text-[10px] dark:hover:!bg-white hover:!bg-black hover:!text-white dark:hover:!text-black !pointer-events-auto font-space"
              >
                {techItem}
              </Badge>
            ))}
          </div>
          
          {/* Links */}
          <div className="px-0 mt-3 !pointer-events-auto flex gap-1">
            {href && (
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Badge 
                  variant="solid" 
                  className="text-[10px] py-[3px] dark:hover:bg-gray-300 font-space"
                >
                  <Globe width={11} height={11} /> Website
                </Badge>
              </a>
            )}
            
            {source && (
              <a href={source} target="_blank" rel="noopener noreferrer">
                <Badge 
                  variant="solid" 
                  className="text-[10px] py-[3px] dark:hover:bg-gray-300 font-space"
                >
                  <Github width={11} height={11} /> Source
                </Badge>
              </a>
            )}
          </div>
        </div>
      </ShineBorder>
    </MagicCard>
  );
}
