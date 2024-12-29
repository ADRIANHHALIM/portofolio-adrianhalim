import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { FaGoogle, FaWhatsapp, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6281287928805?text=Hello%20Adrian%2C%20I%20would%20like%20to%20discuss%20a%20project!"
    );
  };

  const handleLocation = () => {
    window.open("https://maps.google.com/?q=40.7128,-74.0060", "_blank");
  };

  return (
    <div className="section-padding pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaGoogle className="w-6 h-6 text-primary" />
                <span>adrianhalim05@gmail.com</span>
              </div>
              <div
                className="flex items-center space-x-4 cursor-pointer"
                onClick={handleWhatsApp}
              >
                <FaWhatsapp className="w-6 h-6 text-primary" />
                <span>+6281287928805</span>
              </div>
              <div
                className="flex items-center space-x-4 cursor-pointer"
                onClick={handleLocation}
              >
                <FaMapMarkedAlt className="w-6 h-6 text-primary" />
                <span>My Location</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
