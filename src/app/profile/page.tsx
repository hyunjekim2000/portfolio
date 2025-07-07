"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/social";
import {
  languages,
  webFrameworks,
  databasesCloud,
  devOpsTools,
  testingTools,
} from "@/data/stack";
import { contactInfo } from "@/data/contact";
import { location } from "@/data/location";

const renderTechStack = (title: string, items: typeof languages) => (
  <div className="mb-6">
    <h3 className="text-md font-semibold mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <Badge
          key={tech.name}
          className="flex items-center gap-1 px-2 py-1 text-sm"
          style={{ backgroundColor: tech.bg, color: tech.text }}
        >
          <div className="w-5 h-5 flex items-center justify-center rounded-md bg-white">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={12}
              height={12}
              className="inline-block"
            />
          </div>
          {tech.name}
        </Badge>
      ))}
    </div>
  </div>
);

export default function ProfilePage() {
  return (
    <section className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-foreground">
      <div className="relative max-w-3xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">About Me</h1>
          <a href="/HyunjeKim_Resume.pdf" download>
            <Button
              variant="secondary"
              className="bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 text-white"
            >
              Download Resume
            </Button>
          </a>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border border-white/10">
          <CardHeader>
            <CardTitle>Hyunje Kim</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Hey! I’m a full-stack developer who loves building cool, useful
              stuff on the web. Whether it’s crafting smooth UIs with Angular
              and Next.js or wiring up backends with Spring Boot and Node, I
              enjoy learning new things, solving problems, and making apps that
              people actually enjoy using.
            </p>

            <Separator />

            {/* Tech Stack */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
              {renderTechStack("Languages", languages)}
              {renderTechStack("Web & Frameworks", webFrameworks)}
              {renderTechStack("Databases & Cloud", databasesCloud)}
              {renderTechStack("DevOps & Tools", devOpsTools)}
              {renderTechStack("Testing Frameworks", testingTools)}
            </div>

            <Separator />

            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-semibold mt-6 mb-4">Contact</h2>
              <ul className="space-y-3 text-muted-foreground">
                {contactInfo.map((item) => {
                  const Icon = item.icon === "Mail" ? Mail : Phone;
                  return (
                    <li key={item.type} className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-foreground" />
                      <a
                        href={item.href}
                        className="text-primary hover:underline"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Social */}
              <h2 className="text-lg font-semibold mt-6 mb-4">Social Links</h2>
              <div className="flex gap-4 mt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 bg-white rounded-md shadow hover:opacity-80 transition"
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>

            <Separator />

            {/* Location */}
            <div>
              <h2 className="text-lg font-semibold mt-6 mb-2">Location</h2>
              <p className="text-muted-foreground">{location.label}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
