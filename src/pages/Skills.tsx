import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  level: number;
  category: string;
};

const skills: Skill[] = [
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Python", level: 70, category: "Backend" },
  { name: "SQL", level: 80, category: "Backend" },
  { name: "UI Design", level: 85, category: "Design" },
  { name: "UX Design", level: 80, category: "Design" },
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
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-foreground/60">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
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