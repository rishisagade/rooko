import rhino3dIcon from "@/assets/tool-rhino3d.png";
import keyshotIcon from "@/assets/tool-keyshot.jpg";
import procreateIcon from "@/assets/tool-procreate.png";

const uiuxSkills = [
  "Behaviour Intervention Plans",
  "User Research",
  "User Stories",
  "User Personas",
  "Product Ideation",
  "Wireframing",
];

const productDesignSkills = [
  "Form Exploration",
  "Sketching",
  "Market Research",
  "Ergonomics & Usability",
  "Product Semantics",
  "Prototyping",
  "Concept Development",
  "3D Modeling",
];

const brandingSkills = [
  "Visual Storytelling",
  "Brand Identity",
  "Creating Narratives",
];

const tools = [
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  { name: "Miro", icon: "https://cdn.worldvectorlogo.com/logos/miro-2.svg" },
  {
    name: "Framer",
    icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  },
  { name: "Rhino3D", icon: rhino3dIcon },
  {
    name: "Blender",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  },
  { name: "KeyShot3D", icon: keyshotIcon },
  {
    name: "Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  { name: "Procreate", icon: procreateIcon },
  {
    name: "VSCode",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

const skillCategories = [
  { title: "UI/UX Design", skills: uiuxSkills },
  { title: "Product Design", skills: productDesignSkills },
  { title: "Branding", skills: brandingSkills },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-wide uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Skills & Tools
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Skill Categories */}
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="font-bold text-lg border-b border-border pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm border border-border rounded-lg bg-card hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Tools with Icons */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b border-border pb-3">
              Tools
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-2 p-3 border border-border rounded-lg bg-card hover:border-accent transition-colors group"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    loading="lazy"
                    className="w-10 h-10 object-contain p-1.5 rounded-md bg-background/70 border border-border/60 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors text-center">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
