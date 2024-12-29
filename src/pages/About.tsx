import { useEffect } from "react";
import { User, Download } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About - Adrian Halim"; 
  }, []);

  return (
    <div className="section-padding pt-32 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <User className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Adrian Halim</h1>
          <p className="text-xl text-foreground/60">Front End Developer | Android Developer | UI/UX Designer</p>
        </div>

        <div className="prose prose-lg mx-auto text-foreground/80">
          <p className="mb-6">
            Hello, I'm Adrian Halim, a passionate and skilled Full Stack Developer currently pursuing an Informatics degree at Trisakti University.
          </p>

          <p className="mb-6">
            My expertise spans a wide range of technologies, including HTML, CSS, JavaScript, Python, XML, Kotlin, and frameworks such as Laravel, Django, React, among others.
          </p>

          <p className="mb-6">
            Proficient in both front-end and back-end development, I specialize in crafting seamless user experiences while optimizing application performance. Known for my sharp attention to detail, effective problem-solving, and collaborative communication, I thrive in agile environments and excel at working with cross-functional teams to meet tight deadlines.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/CV_ADRIANHALIM.pdf"
              download="ADRIAN-HALIM-CV.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
