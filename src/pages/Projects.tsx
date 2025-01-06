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
import { Github, Figma, Download } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string[]; 
  image: string;
  technologies: string[];
  longDescription?: string;
  videoUrl?: string;
  links?: { label: string; url: string }[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "CekLadang - Improving Agricultural Productivity and Sustainability",
    description: "CekLadang is here to address the challenges of improving agricultural productivity and sustainability in an innovative way.",
    longDescription: "By integrating cloud computing, machine learning, and mobile application development, CekLadang provides practical solutions for farmers to accurately detect diseases in secondary crops. Utilizing advanced technologies such as DenseNet-201 for disease detection and Firebase for storing analysis results, this application helps farmers monitor crop health, offers treatment recommendations, and provides a history and news feature to support better harvest management. With this app, farmers can detect plant diseases early, access actionable advice, and track their crop health—all at their fingertips. Welcome any questions, feedback, or collaboration opportunities to make this solution even more impactful!. ",
    category: ["Mobile Development", "UI/UX"],  
    image: "img/CekLadang.png",
    technologies: ["Kotlin", "Figma", "Android Studio", "Firebase", "Google Cloud Run", "App Engine", "Firestore"],
    videoUrl: "https://www.youtube.com/watch?v=tfwI0j6WqA4",  
    links: [
      { label: "GitHub Repository", url: "https://github.com/CekLadang" },
      { label: "Figma Prototype Design", url: "https://www.figma.com/proto/BBrarxL0HWpaVdIUFC8OR7/CekLadang" },
      { label: "Download App", url: "https://drive.google.com/drive/folders/1fRGdmma5kzgR_RIYAWrThaZjV0mcXeXQ" }
    ],
  },
  {
    id: 2,
    title: "My Portofolio Website",
    description: "Explore my journey as a Fullstack Developer passionate about creating efficient, user-friendly, and visually appealing web solutions. ",
    longDescription: "This portfolio showcases my expertise in technologies like ReactJS, NodeJS, PHP, CSS, and JavaScript, along with my proficiency in frameworks using React Native. What You'll Find Here: Projects: A collection of my professional and personal projects, demonstrating my problem-solving skills, clean code practices, and attention to detail. Certificates: Proof of my commitment to continuous learning, showcasing my qualifications in web development and related fields. Skills: A comprehensive list of technical skills that highlight my capabilities in both front-end and back-end development. Contact: An easy way to connect with me for collaborations, projects, or inquiries. I am eager to take on challenges, contribute to innovative projects, and grow alongside like-minded professionals. Feel free to explore, and let’s build something amazing together!",
    category: ["Web Development"],
    image: "img/webdevportofolio.png",
    technologies: ["Typescript", "HTML", "Tailwind Css", "React"],
    links: [
      // { label: "Figma Design", url: "https://figma.com/example/fitnessapp" },
      { label: "GitHub Repository", url: "https://github.com/ADRIANHHALIM/StoryDicoding.git" }
    ],
  },
  {
    id: 3,
    title: "Animals.Id",
    description: "UI/UX design for innovative platform that aims to redefine pet care in Indonesia.",
    longDescription: "Animals.ID is a digital platform designed to solve key problems that pet owners face. From limited access to veterinary care to time constraints and pet health monitoring, we offer a range of solutions that are both convenient and accessible. Our mission is to ensure that every pet in Indonesia receives the care they deserve, while simplifying the lives of their owners.",
    category: ["UI/UX"],  
    image: "img/animalsId1.png",
    technologies: ["Figma"],
    links: [
      { label: "Figma Prototype Design", url: "https://bit.ly/AnimalsIDFIGMA" },
      { label: "Figma Full Design", url: "https://www.figma.com/design/mXdDJyCFfX4nKt2NdlxZsd/Animals.Id?node-id=0-1&t=oOOINk9OWvfvPbn3-1" }
    ],
  },
  {
    id: 4,
    title: "IndoWander",
    description: "UI/UX design for app-based platform offering various services within the Indonesian tourism industry.",
    longDescription: "IndoWonder is an app-based platform offering various services within the Indonesian tourism industry. Services include booking transportation tickets, tour guides, travel news, integration with local culinary establishments, tourism tickets, and accommodations. IndoWonder also features a comparison tool to assist consumers in selecting travel destinations based on their budget and preferences.",
    category: ["UI/UX"], 
    image: "img/IndoWander.png",
    technologies: ["Figma"],
    links: [
      { label: "Figma Prototype Design", url: "https://www.figma.com/proto/SDW4DY0SuQHG4TijyGIS8c/IndoWander-App?node-id=14-3240&p=f&t=V1Jy6bRhsLVjGf2o-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=14%3A3240" },
      { label: "Figma Full Design", url: "https://www.figma.com/design/SDW4DY0SuQHG4TijyGIS8c/IndoWander-App?node-id=0-1&t=A3NAej45HKosRQXL-1" },
      { label: "Download App", url: "https://example.com/download/IndoWander.apk" }
    ],
  },
  {
    id: 5,
    title: "Story App from Dicoding",
    description: "A story app that allows users to create and share their own stories.",
    longDescription: "My Portfolio Website is not just a showcase of my technical capabilities but a reflection of my dedication to growth and innovation in the tech field. Through detailed project presentations, certifications, and skill highlights, I aim to provide visitors with an engaging and transparent insight into my development journey. Whether you’re an employer, a collaborator, or someone exploring web development, this portfolio offers a comprehensive overview of my work ethic, creative approach, and technical expertise.",
    category: ["Mobile Development"],
    image: "img/storyappdicoding.png",
    technologies: ["Kotlin", "Firebase" , "Google Maps API", "Android Studio", "Figma"],
    videoUrl: "https://www.youtube.com/watch?v=e3v3djK4lsg",
    links: [
      // { label: "Figma Design", url: "https://figma.com/example/fitnessapp" },
      { label: "GitHub Repository", url: "https://github.com/ADRIANHHALIM/StoryDicoding.git" }
    ],
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category.includes(filter)
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
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="space-y-6">
                    <div className="flex justify-center">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <p className="text-lg leading-relaxed text-foreground/80">
                      {selectedProject.longDescription}
                    </p>
                    {/* Menambahkan Video YouTube jika ada */}
                    {selectedProject.videoUrl && (
                      <div className="mt-6">
                        <h4 className="text-xl font-bold">Watch the Video</h4>
                        <div className="mt-4 relative pb-[56.25%] overflow-hidden h-0 rounded-lg shadow-lg">
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            width="100%"
                            height="100%"
                            src={selectedProject.videoUrl.replace("watch?v=", "embed/")}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={selectedProject.title}
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-3 mt-4">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {selectedProject.links && (
                      <div className="mt-6 space-y-2">
                        <h4 className="text-xl font-bold">Related Links</h4>
                        <div className="flex gap-4">
                          {selectedProject.links.map((link) => (
                            <Button
                              key={link.url}
                              variant="outline"
                              className="flex items-center gap-2"
                              onClick={() => window.open(link.url, "_blank")}
                            >
                              {link.label === "GitHub Repository" ? (
                                <Github className="w-5 h-5 text-black" />
                              ) : link.label === "Figma Design" || link.label.includes("Figma") ? (
                                <Figma className="w-5 h-5 text-black" />
                              ) : link.label === "Download App" ? (
                                <Download className="w-5 h-5 text-black" />
                              ) : null}
                              {link.label}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
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