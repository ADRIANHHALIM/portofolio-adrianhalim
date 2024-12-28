import { Code2, Database, FileJson, Globe, Layout, Server } from "lucide-react";

type Skill = {
  name: string;
  icon: React.ReactNode;
  category: string;
};

const skills: Skill[] = [
  { 
    name: "HTML/CSS", 
    icon: <Globe className="w-12 h-12" />, 
    category: "Frontend" 
  },
  { 
    name: "JavaScript", 
    icon: <FileJson className="w-12 h-12" />, 
    category: "Frontend" 
  },
  { 
    name: "React", 
    icon: <Code2 className="w-12 h-12" />, 
    category: "Frontend" 
  },
  { 
    name: "Node.js", 
    icon: <Server className="w-12 h-12" />, 
    category: "Backend" 
  },
  { 
    name: "SQL", 
    icon: <Database className="w-12 h-12" />, 
    category: "Backend" 
  },
  { 
    name: "UI Design", 
    icon: <Layout className="w-12 h-12" />, 
    category: "Design" 
  }
];

const Skills = () => {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <div className="section-padding pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Skills</h1>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-6">{category}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div 
                      key={skill.name} 
                      className="flex flex-col items-center justify-center p-4 rounded-lg border hover:shadow-lg transition-all duration-300"
                    >
                      <div className="text-primary mb-3">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-center">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;