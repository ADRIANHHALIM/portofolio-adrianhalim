import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Download } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Hackathon Participation",
    date: "2022 - Present",
    description: "Regularly participate in national and international hackathons to enhance problem-solving skills and apply cutting-edge technologies in innovative projects.",
    longDescription: "As an active participant in both national and international hackathons, I've developed a strong foundation in rapid prototyping and innovative problem-solving. Notable achievements include winning first place in the 2022 Regional Tech Innovation Challenge and being a finalist in the Global CodeFest 2023. These experiences have enhanced my ability to work under pressure, collaborate in diverse teams, and implement cutting-edge technologies in real-world applications. Through hackathons, I've gained expertise in emerging technologies such as AI/ML, blockchain, and IoT, while building a valuable network within the tech community.",
    image: "img/hackathon.jpg",
    gallery: [
      "img/hackathon1.jpg",
      "img/hackathon2.jpg",
      "img/hackathon3.jpg",
      "img/hackathon4.jpg",
      "img/hackathon5.jpg",
    ],
  },
  {
    id: 2,
    title: "Tech Community Member",
    date: "2021 - Present",
    description: "Actively engage with tech communities such as ReactJS Indonesia and Kotlin User Group, contributing through discussions, workshops, and open-source projects.",
    longDescription: "My involvement in tech communities has been instrumental in both my personal growth and contribution to the broader developer ecosystem. As a core member of ReactJS Indonesia and Kotlin User Group, I've organized monthly workshops, mentored junior developers, and contributed to various open-source projects. I've given talks on topics ranging from state management patterns to performance optimization techniques. Additionally, I've helped organize community events that have brought together hundreds of developers, fostering knowledge sharing and collaboration within the local tech scene.",
    image: "img/community.jpg",
    gallery: [
      "img/community1.jpg",
      "img/community2.jpg",
      "img/community3.jpg",
      "img/community4.jpg",
      "img/community5.jpg",
    ],
  },
  {
    id: 3,
    title: "Freelance Web Projects",
    date: "2020 - Present",
    description: "Undertook multiple freelance projects, creating customized websites and apps for small businesses, leveraging expertise in ReactJS, Laravel, and UX design.",
    longDescription: "Throughout my freelance career, I've successfully delivered over 20 web and mobile applications for diverse clients across various industries. My projects have ranged from e-commerce platforms to custom CMS solutions, each tailored to meet specific business needs. Notable projects include developing a comprehensive inventory management system for a retail chain, creating a booking platform for a healthcare provider, and designing a portfolio website for a creative agency. I consistently maintain long-term relationships with clients by providing ongoing support and implementing new features as their businesses grow.",
    image: "img/freelance.jpg",
    gallery: [
      "img/freelance1.jpg",
      "img/freelance2.jpg",
      "img/freelance3.jpg",
      "img/freelance4.jpg",
      "img/freelance5.jpg",
    ],
  },
];

const experiences = [
  {
    id: 1,
    title: "Android Developer - Bangkit Academy by Google, GoTo, Traveloka",
    date: "September 2024 - December 2024",
    description: [
      "Gained hands-on experience integrating machine learning models into Android apps using TensorFlow Lite and ML Kit to improve features like image recognition and predictive text, while advancing my skills in Kotlin, Jetpack Compose, and Android UI components, focusing on app architecture, advanced navigation patterns, and building more complex apps to enhance performance and user experience.",
      "The primary focus this is has been completing the Capstone Project by integrating mobile development and machine learning into a functional, real-world app, while working collaboratively with my team to ensure effective project management and consistent delivery of milestones.",
      "Prepared and delivered a professional presentation showcasing my team's project capabilities, including live demos of the app, received positive feedback on technical execution and teamwork, and collaborated with mentors and peers to polish the final version of the project."
    ],
    skills: ["Kotlin", "Android Studio", "Firebase"],
    logo: "img/bangkitlogo.png",
  },
  {
    id: 2,
    title: "Part-time Programming Teacher - Timedoor Academy",
    date: "August 2023 – Present",
    description: [
      "Guiding Kids and Teenagers in the Realm of Programming: Provided instruction and mentorship with a focus on JavaScript, Python, and AI. Tailored lessons to individual learning styles, fostering a supportive learning environment.",
      "Developed Games, Websites, and Animations: Led students through hands-on projects from conceptualization to coding and deployment. Ensured practical application of programming concepts.",
      "Researching User Experiences and Creating Wireframes and Mockups: Conducted UX research and instructed students in designing user-friendly interfaces. Taught wireframe and mockup creation using industry-standard tools"
    ],
    skills: ["HTML", "CSS", "JavaScript", "Python", "React Native"],
    logo: "img/timedoorlogo.png",
  },
  {
    id: 3,
    title: "Freelance - Professional Consultant - GoldOne Property Bintaro",
    date: "December 2021 – July 2024",
    description: [
      "Worked as a freelance consultant for GoldOne Property Bintaro, providing professional services to clients",
      "Attract Prospective Buyers, Tenants, or Investors by Creating Compelling Marketing Campaigns: I developed and executed multi-channel marketing campaigns, designed promotional materials, and tailored messages based on market trends. I collaborated with designers and photographers and managed social media accounts to boost online presence.",
      "Make a Transaction Between Buyer and Seller: I facilitated property viewings, negotiated terms, ensured legal document accuracy, assisted with mortgage approvals, maintained client relationships, and stayed informed on market trends.",
    ],
    skills: ["Marketing", "Sales", "Negotiation"],
    logo: "img/g1logo.png",
  },
];


// ExperienceCard component to display each experience
const ExperienceCard = ({ experience }) => (
  <div className="flex gap-6 items-start">
    <div className="flex-shrink-0">
      <img 
        src={experience.logo} 
        alt={experience.title} 
        className="w-16 h-16 rounded-full shadow-md object-contain" 
      />
    </div>
    <div className="flex-1 border-l-4 border-primary pl-6">
      <h3 className="text-xl font-semibold">{experience.title}</h3>
      <p className="text-sm text-foreground/60 mb-2">{experience.date}</p>
      {experience.description.map((text, index) => (
        <p key={index} className="mb-2">{text}</p>
      ))}
      <div className="flex gap-2 mt-3">
        {experience.skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{skill}</span>
        ))}
      </div>
    </div>
  </div>
);

const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-96">
      <img 
        src={images[currentIndex]} 
        alt={`${title} - Image ${currentIndex + 1}`} 
        className="w-full h-full object-cover rounded-lg"
      />
      
      {/* Navigation Buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
      
      {/* Thumbnail Navigation */}
      <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-foreground' : 'bg-foreground/30'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ActivityCard = ({ activity, onClick }) => (
  <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onClick(activity)}>
    <img src={activity.image} alt={activity.title} className="w-full h-40 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
    <p className="text-sm text-foreground/60 mb-4">{activity.date}</p>
    <p>{activity.description}</p>
  </div>
);

const About = () => {
  useEffect(() => {
    document.title = "About - Adrian Halim";
  }, []);

  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div className="section-padding pt-32 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-6 shadow-lg">
            <img src="img/profil.png" alt="Adrian Halim" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Adrian Halim</h1>
          <p className="text-xl text-foreground/60">Fullstack Developer | Android Developer | UI/UX Designer</p>
          <br></br>
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
        </div>

        {/* Activity Section */}
        <h2 className="text-3xl font-bold mb-8 text-center">Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} onClick={setSelectedActivity} />
          ))}
        </div>

        {/* Experience Section */}
        <h2 className="text-3xl font-bold mb-8 text-center mt-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {selectedActivity && (
          <Dialog open={true} onOpenChange={() => setSelectedActivity(null)}>
            <DialogContent className="max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedActivity.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4 mb-20">
                <ImageSlider 
                  images={selectedActivity.gallery} 
                  title={selectedActivity.title}
                />
              </div>
              <div className="mt-6">
                <p className="text-sm text-foreground/60 mb-4">{selectedActivity.date}</p>
                <p className="text-lg mb-4">{selectedActivity.longDescription}</p>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Download CV Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="/CV_AdrianHalim.pdf"
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