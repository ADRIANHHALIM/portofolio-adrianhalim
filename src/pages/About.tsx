import { useEffect } from "react";
import { Download } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About - Adrian Halim";
  }, []);

  return (
    <div className="section-padding pt-32 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* About Me */}
        <div className="text-center mb-12">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-6 shadow-lg">
            <img 
              src="img/profil.png" 
              alt="Adrian Halim" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Adrian Halim</h1>
          <p className="text-xl text-foreground/60">Front End Developer | Android Developer | UI/UX Designer</p>
        </div>

        <div className="prose prose-lg mx-auto text-foreground/80 text-justify">
          <p className="mb-6">
            Hello, I'm Adrian Halim, a passionate Front End Developer currently pursuing an Informatics degree at Trisakti University.
          </p>

          <p className="mb-6">
            My expertise spans a wide range of technologies, including HTML, CSS, JavaScript, Python, XML, Kotlin, and frameworks such as Laravel, Django, React, among others.
          </p>

          <p className="mb-6">
            Proficient in front-end development, I specialize in crafting seamless user experiences while optimizing application performance. Known for my sharp attention to detail, effective problem-solving, and collaborative communication, I thrive in agile environments and excel at working with cross-functional teams to meet tight deadlines.
          </p>
        </div>

        {/* Experience Section */}
        <div className="prose prose-lg mx-auto text-foreground/80 text-justify mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-12">
            
            {/* Experience Item */}
            <div className="flex gap-6 items-start">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src="img/bangkitlogo.png" 
                  alt="Bangkit Academy by Google, GoTo, Traveloka" 
                  className="w-16 h-16 rounded-full shadow-md object-contain"
                />
              </div>
              {/* Timeline & Content */}
              <div className="flex-1 border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold">Android Developer - Bangkit Academy by Google, GoTo, Traveloka</h3>
                <p className="text-sm text-foreground/60 mb-2">September 2024 - December 2024</p>
                <p>
                  Gained hands-on experience integrating machine learning models into Android apps using TensorFlow Lite and ML Kit to improve features like image recognition and predictive text, while advancing my skills in Kotlin, Jetpack Compose, and Android UI components, focusing on app architecture, advanced navigation patterns, and building more complex apps to enhance performance and user experience.
                </p>
                <br />
                <p>
                  The primary focus this is has been completing the Capstone Project by integrating mobile development and machine learning into a functional, real-world app, while working collaboratively with my team to ensure effective project management and consistent delivery of milestones.
                </p>
                <br />
                <p>
                  Prepared and delivered a professional presentation showcasing my team's project capabilities, including live demos of the app, received positive feedback on technical execution and teamwork, and collaborated with mentors and peers to polish the final version of the project.
                </p>
                {/* Highlight Skill */}
                <div className="flex gap-2 mt-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Kotlin</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Android Studio</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Firebase</span>
                </div>
              </div>
            </div>

            {/* Experience Item */}
            <div className="flex gap-6 items-start">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src="img/timedoorlogo.png" 
                  alt="Timedoor Academy" 
                  className="w-16 h-16 rounded-full shadow-md object-contain"
                />
              </div>
              {/* Timeline & Content */}
              <div className="flex-1 border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold">Part-time Programming Teacher - Timedoor Academy</h3>
                <p className="text-sm text-foreground/60 mb-2">August 2023 – Present</p>
                <p>
                  Guiding Kids and Teenagers in the Realm of Programming: Provided instruction and mentorship with a focus on JavaScript, Python, and AI. Tailored lessons to individual learning styles, fostering a supportive learning environment.
                </p>
                <br />
                <p>
                  Developed Games, Websites, and Animations: Led students through hands-on projects from conceptualization to coding and deployment. Ensured practical application of programming concepts.
                </p>
                <br />
                <p>
                  Researching User Experiences and Creating Wireframes and Mockups: Conducted UX research and instructed students in designing user-friendly interfaces. Taught wireframe and mockup creation using industry-standard tools.
                </p>
                <br />
                <p>
                  Conducting Skills Tests and Short Interviews with Prospective Students: Evaluated programming proficiency through skills assessments and interviews, recommending suitable class placements.
                </p>
                {/* Highlight Skill */}
                <div className="flex gap-2 mt-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">HTML</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">CSS</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Javascript</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Python</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Python AI</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">React Native</span>
                </div>
              </div>
            </div>

            {/* Experience Item */}
            <div className="flex gap-6 items-start">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src="img/g1logo.png" 
                  alt="GoldOne Property Bintaro" 
                  className="w-16 h-16 rounded-full shadow-md object-contain"
                />
              </div>
              {/* Timeline & Content */}
              <div className="flex-1 border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold">Freelance - Professional Consultant - GoldOne Property Bintaro</h3>
                <p className="text-sm text-foreground/60 mb-2">December 2021 – July 2024</p>
                <p>
                  Worked as a freelance consultant for GoldOne Property Bintaro, providing professional services to clients
                </p>
                <br />
                <p>
                  Attract Prospective Buyers, Tenants, or Investors by Creating Compelling Marketing Campaigns: I developed and executed multi-channel marketing campaigns, designed promotional materials, and tailored messages based on market trends. I collaborated with designers and photographers and managed social media accounts to boost online presence.
                </p>
                <br />
                <p>
                  Make a Transaction Between Buyer and Seller: I facilitated property viewings, negotiated terms, ensured legal document accuracy, assisted with mortgage approvals, maintained client relationships, and stayed informed on market trends.
                </p>
                {/* Highlight Skill */}
                <div className="flex gap-2 mt-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Kotlin</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">XML</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Android Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download CV */}
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
  );
};

export default About;
