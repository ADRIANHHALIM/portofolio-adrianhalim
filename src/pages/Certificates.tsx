import { Card } from "@/components/ui/card";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Development",
    issuer: "Udacity",
    date: "2023",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "UI/UX Design",
    issuer: "Google",
    date: "2023",
    image: "/placeholder.svg",
  },
  // Add more certificates as needed
];

const Certificates = () => {
  return (
    <div className="section-padding pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Certificates</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <Card key={certificate.id} className="overflow-hidden card-hover">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                <p className="text-foreground/60">Issued by {certificate.issuer}</p>
                <p className="text-foreground/60">{certificate.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;