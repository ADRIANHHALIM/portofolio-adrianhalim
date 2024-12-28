import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description?: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Development",
    issuer: "Udacity",
    date: "2023",
    image: "/placeholder.svg",
    description: "A comprehensive certification in full-stack web development, covering both front-end and back-end technologies. The program included hands-on projects using React, Node.js, and various database technologies.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    issuer: "Google",
    date: "2023",
    image: "/placeholder.svg",
    description: "Professional certification in UI/UX design principles and practices. The course covered user research, wireframing, prototyping, and user testing methodologies.",
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <div className="section-padding pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Certificates</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <Card 
              key={certificate.id} 
              className="overflow-hidden card-hover cursor-pointer"
              onClick={() => setSelectedCertificate(certificate)}
            >
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

        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-3xl">
            {selectedCertificate && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedCertificate.title}</DialogTitle>
                  <DialogDescription className="space-y-4">
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <p className="text-lg">{selectedCertificate.description}</p>
                    <div className="mt-4">
                      <p className="text-foreground/60">Issued by {selectedCertificate.issuer}</p>
                      <p className="text-foreground/60">Date: {selectedCertificate.date}</p>
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

export default Certificates;