import { Button } from "@/components/ui/button";
import { Download, User } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-neutral-950 text-muted-foreground bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-3xl" />
      </div>

      {/* Content */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
        Hi, I'm Hyunje Kim
      </h1>
      <p className="text-lg md:text-xl max-w-xl mb-8">
        Full-Stack Developer passionate about building modern, secure, and
        scalable web applications.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          asChild
          variant="secondary"
          className="text-white border-white hover:bg-white hover:text-background"
        >
          <a href="/HyunjeKim_Resume.pdf" download>
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </a>
        </Button>

        <Button
          asChild
          variant="secondary"
          className="text-white border-white hover:bg-white hover:text-background"
        >
          <Link href="/profile">
            <User className="w-4 h-4 mr-2" />
            View Profile
          </Link>
        </Button>
      </div>
    </section>
  );
}
