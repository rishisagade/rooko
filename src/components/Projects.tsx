import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectUnity from "@/assets/project-unity.png";
import projectMoodbook from "@/assets/project-moodbook.png";
import projectParkplus from "@/assets/project-parkplus.png";
import projectSemantics from "@/assets/project-semantics.png";
import projectCityBranding from "@/assets/project-city-branding.png";
import projectPedestalLamp from "@/assets/project-pedestal-lamp.png";

const projects = [
  {
    id: "unity-agentic-browser",
    title: "Unity: An Agentic Browser",
    category: "UI/UX Design",
    description: "An agentic browser that supports SaaS workflows",
    image: projectUnity,
  },
  {
    id: "moodbook",
    title: "Book Discovery and Recommendation Platform",
    category: "UI/UX Design",
    description: "MoodBook helps users discover & organise books by mood.",
    image: projectMoodbook,
  },
  {
    id: "parkplus",
    title: "ParkPlus: Find your Parking",
    category: "UI/UX Design",
    description: "Easily book slots with real-time availability and manage parking.",
    image: projectParkplus,
  },
  {
    id: "product-semantics",
    title: "Making Meaning and Creating Identity",
    category: "Product Design",
    description: "Applied product semantics and categorization theory to establish product identity and category relevance.",
    image: projectSemantics,
  },
  {
    id: "city-branding",
    title: "City Branding",
    category: "Branding",
    description: "City branding & cultural identity development.",
    image: projectCityBranding,
  },
  {
    id: "pedestal-lamp",
    title: "Pedestal Lamp Design",
    category: "Product Design",
    description: "A design approach for a sustainable pedestal lamp.",
    image: projectPedestalLamp,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-wide uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group block border border-border rounded-xl overflow-hidden bg-card hover:border-accent/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video relative overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="p-2 rounded-full border border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
