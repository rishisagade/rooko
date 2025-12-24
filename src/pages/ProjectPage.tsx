import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import unityProjectImage from "@/assets/unity-project-full.png";
import moodbookProjectImage from "@/assets/project-moodbook-full.png";
import parkplusProjectImage from "@/assets/project-parkplus-full.png";
import semanticsProjectImage from "@/assets/project-semantics-full.png";
import cityBrandingProjectImage from "@/assets/project-city-branding-full.png";
import pedestalLampProjectImage from "@/assets/project-pedestal-lamp-full.png";

const projectsData: Record<string, { title: string; category: string; description: string; image: string }> = {
  "unity-agentic-browser": {
    title: "Unity: An Agentic Browser",
    category: "UI/UX Design",
    description: "An agentic browser that supports SaaS workflows",
    image: unityProjectImage,
  },
  "moodbook": {
    title: "Book Discovery and Recommendation Platform",
    category: "UI/UX Design",
    description: "MoodBook helps users discover & organise books by mood.",
    image: moodbookProjectImage,
  },
  "parkplus": {
    title: "ParkPlus: Find your Parking",
    category: "UI/UX Design",
    description: "Easily book slots with real-time availability and manage parking.",
    image: parkplusProjectImage,
  },
  "product-semantics": {
    title: "Making Meaning and Creating Identity",
    category: "Product Design",
    description: "Applied product semantics and categorization theory to establish product identity and category relevance.",
    image: semanticsProjectImage,
  },
  "city-branding": {
    title: "City Branding",
    category: "Branding",
    description: "City branding & cultural identity development.",
    image: cityBrandingProjectImage,
  },
  "pedestal-lamp": {
    title: "Pedestal Lamp Design",
    category: "Product Design",
    description: "A design approach for a sustainable pedestal lamp.",
    image: pedestalLampProjectImage,
  },
};

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData[id || "unity-agentic-browser"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 flex items-center justify-center min-h-[60vh]">
          <p className="text-muted-foreground">Project not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Project Header */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <p className="text-accent font-semibold tracking-wide uppercase mb-4">
              {project.category}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {project.description}
            </p>
          </div>
        </section>

        {/* Full Project Image */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <img 
              src={project.image} 
              alt={`${project.title} - Full project case study`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-lg border border-border"
            />
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
