import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Name */}
        <span className="text-xl font-semibold text-primary">Hyunje Kim</span>

        {/* Right: Nav Links */}
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
