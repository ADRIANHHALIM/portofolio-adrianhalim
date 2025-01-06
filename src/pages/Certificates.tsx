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
  images: string[]; 
  description?: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Studi Independen Bersertifikat Angkatan 7",
    issuer: "Kampus Merdeka",
    date: "2024",
    images: ["img/certifKelulusanMsib.png"],
    description:
      "SERTIFIKAT KEPESERTAAN diberikan oleh Pelaksana Pusat Kampus Merdeka kepada ADRIAN HALIM dengan NIM: 064002200043 / ID KEGIATAN: 10242752. atas partisipasinya sebagai peserta dan telah menyelesaikan kewajibannya dalam program Studi Independen Bersertifikat Angkatan 7 di Yayasan Dicoding Indonesia",
  },
  {
    id: 2,
    title: "Pengembangan Aplikasi Android Intermediate",
    issuer: "Dicoding Indonesia",
    date: "2024",
    images: [
      "img/certifIntermediate.png",  
      "img/certifIntermediate2.png", 
      "img/certifIntermediate3.png", 
    ],
    description:
      "Kelas ini dirancang untuk pengembang Android yang ingin meningkatkan keahlian mereka dengan mempelajari berbagai komponen tingkat lanjut dalam pengembangan aplikasi. Di akhir kelas, peserta akan mampu membuat aplikasi dengan mengintegrasikan komponen-komponen canggih yang telah dipelajari.",
  },
  {
    id: 3,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "2024",
    images: [
      "img/certifBelajardasarai.png",  
      "img/certifBelajardasarai2.png",
    ],
    description:
      "Kelas ini ditujukan untuk pemula yang ingin memulai karier di dunia AI. Setelah mengikuti kelas, siswa diharapkan mampu menelaah berbagai konsep dasar dalam AI beserta penerapannya dengan baik.",
  },
  {
    id: 4,
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    date: "2024",
    images: [
      "img/certifbelajardasargit.png",  
      "img/certifbelajardasargit2.png",
      "img/certifbelajardasargit3.png",
    ],
    description:
      "Kelas ini ditujukan bagi developer yang ingin mempelajari pengelolaan kode atau data menggunakan Git dengan GitHub agar bisa berkolaborasi dengan developer lain yang sesuai dengan standar industri. Di akhir kelas, siswa dapat mengelola kumpulan data atau kode mereka sendiri dalam repository GitHub, serta dapat berkolaborasi dengan developer lain pada repository yang sama.",
  },
  {
    id: 5,
    title: "Belajar Penerapan Machine Learning untuk Android",
    issuer: "Dicoding Indonesia",
    date: "2024",
    images: [
      "img/certifbelajarmltoandroid.png",
      "img/certifbelajarmltoandroid2.png",
      "img/certifbelajarmltoandroid3.png",
    ],
    description:
      "Kelas ini ditujukan bagi Android Developer yang ingin meningkatkan skill-nya dalam menintegrasikan machine learning di Android. Di akhir kelas, siswa dapat membuat aplikasi Android yang mengimplementasikan Machine Learning di perangkat (on-device) untuk mengklasifikasikan gambar dari galeri secara efektif.",
  },
  {
    id: 6,
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    date: "2024",
    images: [
      "img/certifPengenalankeLogikaPemrograman.png",
      "img/certifPengenalankeLogikaPemrograman2.png",
    ],
    description:
      "Kelas ditujukan bagi pemula yang ingin mulai belajar logika pada bidang pemrograman dengan mengacu pada standar industri. Di akhir kelas, siswa dapat memahami logika pemrograman dasar dan menerapkannya dalam pemecahan masalah yang ada di bidang pekerjaan Software Developer.",
  },
  {
    id: 7,
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    date: "2024",
    images: [
      "img/certifMemulaiDasarPemrogramanuntukMenjadiPengembangSoftware.png",
      "img/certifMemulaiDasarPemrogramanuntukMenjadiPengembangSoftware2.png",
      "img/certifMemulaiDasarPemrogramanuntukMenjadiPengembangSoftware3.png",
      "img/certifMemulaiDasarPemrogramanuntukMenjadiPengembangSoftware4.png",
    ],
    description:
      "Kelas ditujukan bagi pemula yang ingin mulai belajar bidang pemrograman agar dapat menjadi pengembang software dengan mengacu pada standar okupasi Pengembang Software (kode okupasi KBJI: 2512.03, Indotask: 2512). Di akhir pelatihan, siswa mampu memodifikasi aplikasi perangkat lunak menggunakan panduan diagram alur dan pemrograman dengan teknologi HTML, CSS, dan JavaScript tingkat dasar secara tepat sesuai persyaratan spesifikasi dan fungsionalitas aplikasi.",
  },
  {
    id: 8,
    title: "Memulai Pemrograman dengan Kotlin",
    issuer: "Dicoding Indonesia",
    date: "2024",
    images: [
      "img/certifMemulaiPemrogramandenganKotlin.png",
      "img/certifMemulaiPemrogramandenganKotlin2.png",
      "img/certifMemulaiPemrogramandenganKotlin3.png",
    ],
    description:
      "Kelas ini ditujukan bagi yang ingin belajar dasar bahasa pemrograman Kotlin dengan mengacu pada standar kompetensi internasional milik Google Developers Authorized Training Partner. Di akhir kelas, siswa paham tentang konsep dasar bahasa pemrograman, functional programming, serta object- oriented programming (OOP) dengan menggunakan Kotlin.",
  },
  {
    id: 9,
    title: "Belajar Dasar Pemograman Web",
    issuer: "Dicoding Indonesia",
    date: "2024",
    images: [
      "img/CertifBelajarDasarWeb.png",
      "img/CertifBelajarDasarWeb2.png",
      "img/CertifBelajarDasarWeb3.png",
    ],
    description:
      "Kelas ini membahas tuntas dasar HTML dan CSS sebagai tiga fondasi pembuatan website. Fondasi tersebut diperlukan untuk Anda yang ingin mengembangkan kemampuan pengembangan website ke tahap yang lebih lanjut. Disusun dan diverifikasi oleh tim expert Dicoding, materi yang disajikan terstruktur dan komprehensif. ",
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
                src={certificate.images[0]} // Hanya menampilkan gambar pertama
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
          <DialogContent className="max-w-3xl overflow-auto max-h-screen p-4">
            {selectedCertificate && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedCertificate.title}</DialogTitle>
                  <DialogDescription className="space-y-4">
                    {/* Menampilkan gambar secara vertikal */}
                    <div className="flex flex-col items-center space-y-4">
                      {selectedCertificate.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${selectedCertificate.title} image ${index + 1}`}
                          className="w-full max-w-[600px] h-auto object-contain rounded-lg" // Ukuran gambar lebih besar dan responsif
                        />
                      ))}
                    </div>
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