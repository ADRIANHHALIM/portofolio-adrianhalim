import { User, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="section-padding pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <User className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Your Name</h1>
          <p className="text-xl text-foreground/60">Full Stack Developer</p>
        </div>

        <div className="prose prose-lg mx-auto text-foreground/80">
          <p className="mb-6">
            I am a passionate Full Stack Developer with experience in building web applications
            using modern technologies. My focus is on creating efficient, scalable, and
            user-friendly solutions that solve real-world problems.
          </p>

          <p className="mb-6">
            With expertise in both frontend and backend development, I enjoy working
            on challenging projects that push my boundaries and allow me to learn
            new technologies.
          </p>

          <div className="mt-8 flex justify-center">
            <Button className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;