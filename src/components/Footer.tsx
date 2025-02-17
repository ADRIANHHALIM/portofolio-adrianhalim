import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ADRIANHHALIM", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/adrian-halim-2226b5254/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/adrianhhalim/", label: "Instagram" },
    { icon: Mail, href: "mailto:adrianhalim05@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="text-foreground/60 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-foreground/60">
          Copyright © {new Date().getFullYear()} Adrian Halim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;