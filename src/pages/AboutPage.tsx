import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import articleCover from "@/assets/article-product-semantics.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-accent font-semibold tracking-wide uppercase mb-4">
                    About Me
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                    Rishi Sagade
                  </h1>
                </div>
                
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    I'm a Product and UI/UX Designer currently pursuing M.Des (Product Design) at IIT Hyderabad. 
                    My passion lies in crafting digital experiences that blend aesthetics with functionality.
                  </p>
                  <p>
                    I believe in the power of design to transform ideas into meaningful experiences. 
                    My approach combines research, creativity, and technical skills to deliver solutions 
                    that resonate with users and drive business outcomes.
                  </p>
                </div>

                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 font-semibold"
                  asChild
                >
                  <a href="mailto:rishisagade111@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Get in Touch
                  </a>
                </Button>
              </div>
              
              {/* Right Image */}
              <div className="relative lg:justify-self-end">
                <div className="w-full max-w-sm lg:max-w-sm mx-auto lg:mx-0">
                  <div className="h-[420px] md:h-[460px] rounded-2xl overflow-hidden bg-secondary border border-border">
                    <img
                      src={portrait}
                      alt="Rishi Sagade portrait"
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold tracking-wide uppercase mb-4">
                Personal Works
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Articles
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
              <a
                href="https://www.linkedin.com/pulse/product-semantics-creating-meaning-building-identity-rishi-sagade-uzzef"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 border border-border rounded-xl bg-card hover:border-accent/50 transition-all duration-300"
              >
                <div className="aspect-[16/10] rounded-lg bg-secondary mb-4 overflow-hidden">
                  <img
                    src={articleCover}
                    alt="Product Semantics – creating meaning and building an identity"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-accent font-medium uppercase tracking-wide">
                    Article
                  </span>
                  <span className="text-xs text-muted-foreground">• June 20, 2025</span>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors flex items-center gap-2">
                  Product Semantics – Creating meaning and building an identity
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </a>

              <div className="p-5 border border-dashed border-border rounded-xl bg-card flex items-center justify-center">
                <p className="text-sm text-muted-foreground text-center">
                  More articles coming soon
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
