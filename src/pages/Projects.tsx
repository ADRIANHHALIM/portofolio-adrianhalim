import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  longDescription?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart and payment integration.",
    longDescription: "This e-commerce platform was built using React and Node.js, featuring a robust shopping cart system, secure payment processing through Stripe, and a responsive design that works seamlessly across all devices. The project demonstrates advanced state management using Redux and real-time updates with WebSocket integration.",
    category: "Web Development",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Mobile App Design",
    description: "UI/UX design for a fitness tracking mobile application.",
    longDescription: "A comprehensive fitness tracking application designed with user experience at its core. The app includes features like workout tracking, nutrition planning, and social sharing capabilities. The design process involved extensive user research, wireframing, and iterative prototyping to ensure optimal usability.",
    category: "UI/UX",
    image: "/placeholder.svg",
    technologies: ["Figma", "Adobe XD"],
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  const categories = ["All", "Web Development", "UI/UX", "Mobile Development"];

  return (
    <div className="section-padding pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden card-hover cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                  <DialogDescription className="space-y-4">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <p className="text-lg">{selectedProject.longDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Projects;