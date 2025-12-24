import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/rishi-sagade", label: "LinkedIn" },
  { 
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 7h-7V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-7 2h7v10c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h6v2c0 1.1.9 2 2 2z"/>
      </svg>
    ), 
    href: "https://www.behance.net/rishisagade", 
    label: "Behance" 
  },
];

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .619-.141 1.137-.421 1.551-.284.415-.7.755-1.26 1.011.757.219 1.318.601 1.689 1.146.374.549.557 1.205.557 1.975 0 .623-.119 1.161-.359 1.612-.24.457-.57.828-.997 1.111-.421.289-.905.499-1.449.629-.541.129-1.099.193-1.669.193H1V5.731h6.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707-.105-.187-.247-.332-.421-.436-.177-.104-.381-.176-.611-.213-.229-.04-.471-.059-.724-.059H3.72v2.879h3.732zm.162 5.18c.275 0 .536-.027.78-.08.245-.053.46-.143.643-.271.187-.127.335-.297.449-.509.113-.213.168-.479.168-.8 0-.641-.18-1.099-.537-1.381-.359-.279-.836-.42-1.432-.42H3.72v3.461h3.894zM16.959 15.727c.391.391.929.587 1.619.587.492 0 .919-.129 1.283-.388.361-.259.596-.533.703-.817h2.299c-.369 1.109-.919 1.903-1.653 2.381-.729.479-1.608.72-2.64.72-.725 0-1.379-.111-1.964-.337-.584-.224-1.085-.545-1.496-.964-.411-.417-.727-.919-.953-1.508-.224-.586-.339-1.236-.339-1.949 0-.693.111-1.329.336-1.912.224-.583.539-1.087.941-1.52.404-.429.892-.763 1.468-1.004.576-.241 1.219-.359 1.929-.359.797 0 1.493.147 2.089.443.596.295 1.087.695 1.476 1.199.387.504.672 1.088.853 1.751.177.663.241 1.367.187 2.107h-6.841c.043.757.263 1.361.703 1.57zm2.833-4.996c-.312-.317-.793-.476-1.442-.476-.421 0-.775.077-1.063.229-.287.152-.521.345-.697.576-.177.232-.3.477-.371.736-.072.259-.115.489-.131.689h4.309c-.093-.679-.293-1.191-.605-1.754zM16.126 6.169h4.665v1.247h-4.665V6.169z"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-semibold tracking-wide uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to 
            discussing new opportunities and creative ideas.
          </p>
          
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-6 text-lg font-semibold"
            asChild
          >
            <a href="mailto:rishisagade111@gmail.com">
              <Mail className="w-5 h-5 mr-3" />
              rishisagade111@gmail.com
            </a>
          </Button>
          
          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href="https://www.linkedin.com/in/rishi-sagade"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.behance.net/rishisagade"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              <BehanceIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
