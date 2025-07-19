import { Code, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';
import { useState } from 'react';
import { Badge } from './ui/Badge';

interface ProjectsProps {
  isDark: boolean;
}

const projects = [
  {
    title: "TaskIQ – Smart Task Management",
    description: "Full-stack task manager with JWT auth, real-time email alerts, and responsive UI using Flask, React.js, and Supabase.",
    href: "https://github.com/Scriptzstarling/TaskIQ",
    source: "https://github.com/Scriptzstarling/TaskIQ",
    tech: ["React.js", "Tailwind CSS", "Flask", "Supabase", "SendGrid"],
    image: "TaskIQ.webp"
  },
  {
    title: "JobHive",
    description: "Simple frontend job board interface built using HTML, CSS, and JavaScript with modern design patterns.",
    href: "https://github.com/Scriptzstarling/JobHive",
    source: "https://github.com/Scriptzstarling/JobHive",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "JobHive.webp"
  },
  {
    title: "Spectra News",
    description: "News fetching website using HTML, CSS, JavaScript and News API integration with real-time updates.",
    href: "https://github.com/Scriptzstarling/Spectra-News",
    source: "https://github.com/Scriptzstarling/Spectra-News",
    tech: ["HTML", "CSS", "JavaScript", "NEWS API"],
    image: "SpectraNews.webp"
  },
  {
    title: "AutoSpectra",
    description: "Frontend-only ML concept UI built using basic HTML, CSS, and JavaScript with interactive elements.",
    href: "https://github.com/Scriptzstarling/AutoSpectra",
    source: "https://github.com/Scriptzstarling/AutoSpectra",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "AutoSpectra.webp"
  },
  {
    title: "Cheesy Delight",
    description: "Full-stack food delivery web app for a pizza brand with order management and user authentication.",
    href: "https://github.com/Scriptzstarling/CheesyDelight",
    source: "https://github.com/Scriptzstarling/CheesyDelight",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "CheesyDelight.webp"
  },
  {
    title: "City Dine Recommendation",
    description: "Data-driven restaurant recommender based on user location using machine learning algorithms.",
    href: "https://github.com/Scriptzstarling/City-Dine-Recommendation",
    source: "https://github.com/Scriptzstarling/City-Dine-Recommendation",
    tech: ["Python", "Jupyter Notebook", "Pandas", "Numpy", "Scikit-learn", "Matplotlib"],
    image: "CityDine.webp"
  },
  {
    title: "Uber Analysis Dashboard",
    description: "Interactive Power BI dashboard for Uber ride data with comprehensive analytics and insights.",
    href: "https://github.com/Scriptzstarling/Uber-Analysis-Dashboard",
    source: "https://github.com/Scriptzstarling/Uber-Analysis-Dashboard",
    tech: ["Power BI", "SQL"],
    image: "UberRide.webp"
  },
  {
    title: "Telecom Churned Analysis",
    description: "EDA and predictive modeling for telecom churn with advanced statistical analysis.",
    href: "https://github.com/Scriptzstarling/Telecom_Churned_Analysis",
    source: "https://github.com/Scriptzstarling/Telecom_Churned_Analysis",
    tech: ["Python", "Numpy", "Pandas", "Seaborn", "Matplotlib"],
    image: "TelecomChurn.webp"
  },
  {
    title: "Amazon Sales Analysis",
    description: "End-to-end Power BI dashboard to analyze Amazon product sales and reviews with interactive visualizations.",
    href: "https://github.com/Scriptzstarling/Amazon-Sales-Analysis-PowerBI",
    source: "https://github.com/Scriptzstarling/Amazon-Sales-Analysis-PowerBI",
    tech: ["Power BI", "Excel"],
    image: "AmazonSales.webp"
  },
  {
    title: "Netflix Shows Analysis",
    description: "Interactive Power BI dashboard with filters and insights from Netflix dataset for content analysis.",
    href: "https://github.com/Scriptzstarling/Netflix-Shows-Analysis",
    source: "https://github.com/Scriptzstarling/Netflix-Shows-Analysis",
    tech: ["Power BI", "Excel"],
    image: "Netflix.webp"
  },
  {
    title: "HR Analytics Dashboard",
    description: "Interactive Power BI dashboard to analyze employee attrition based on role, age, education, and job satisfaction.",
    href: "https://github.com/Scriptzstarling/HR-Analytics-Dashboard",
    source: "https://github.com/Scriptzstarling/HR-Analytics-Dashboard",
    tech: ["Power BI", "CSV"],
    image: "HR.webp"
  },
  {
    title: "Multi-Topic Quiz App",
    description: "ReactJS-based quiz platform with topic selection, real-time scoring, JSON backend, and optional timer and progress features.",
    href: "https://github.com/Scriptzstarling/Internship_Code_Bucket_Pvt_Ltd",
    source: "https://github.com/Scriptzstarling/Internship_Code_Bucket_Pvt_Ltd",
    tech: ["ReactJS", "Tailwind CSS", "JSON", "Framer Motion"],
    image: "quizapp.webp"
  },
  {
    title: "ScriptZen AI – Full-Stack AI SaaS",
    description: "Production-ready AI SaaS platform using PERN stack with AI content tools, image editing, resume analysis, Clerk authentication, and Stripe subscriptions.",
    href: "https://github.com/Scriptzstarling/ScriptZen-AI",
    source: "https://github.com/Scriptzstarling/ScriptZen-AI", 
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Clerk", "Stripe"],
    image: "ScriptZenAI.webp"
  },

];

export default function Projects({ isDark }: ProjectsProps) {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-black">
      {/* 🌌 Background glow + grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8 relative z-10">
        {/* 🧠 Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gray-900/60 border border-gray-700/50 text-gray-300 backdrop-blur-sm">
            <Code className="w-4 h-4 text-cyan-400" />
            <span className="font-mono">Proof of Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent font-mono">
            Featured Projects
          </h2>

          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300 font-mono">
            <span className="text-cyan-400">// </span>
            Built using <span className="text-purple-400">React</span>, <span className="text-pink-400">Python</span>, and <span className="text-blue-400">Power BI</span>
          </p>
        </AnimatedSection>

        {/* 🧩 Projects Grid */}
        <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              href={project.href}
              source={project.source}
              tech={project.tech}
              image={project.image}
              index={index}
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <Badge 
            variant="solid" 
            onClick={loadMoreProjects} 
            className="text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 mt-6 font-space"
          >
            <span>Load More</span>
            <span className="!ml-[-3px] mt-[1px]">
              <ChevronDown className="h-3 w-3 dark:!text-black !text-white shrink-0 text-muted-foreground transition-transform duration-200" />
            </span>
          </Badge>
        )}

        {/* View All Projects Link */}
        <AnimatedSection className="text-center mt-8" delay={0.5}>
          <motion.a
            href="https://github.com/Scriptzstarling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/80 border border-cyan-400/50 text-cyan-400 font-mono text-sm backdrop-blur-sm transition-all duration-300 hover:border-cyan-500 hover:text-white"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <Code className="w-4 h-4" />
            <span>View All Projects</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
