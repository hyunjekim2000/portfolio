"use client";

import { useState } from "react";
import { projects } from "@/data/project";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  const [expanded, setExpanded] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpanded((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const allExpanded = expanded.length === projects.length;

  const toggleAll = () => {
    setExpanded(allExpanded ? [] : projects.map((_, i) => i));
  };

  return (
    <section className="relative min-h-screen py-20 px-6 bg-neutral-950 text-foreground bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="sticky top-20 z-10 mb-8 max-w-3xl mx-auto px-4 flex justify-between items-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <Button
          variant="outline"
          className="text-sm border-white/20 bg-white/10 backdrop-blur-sm"
          onClick={toggleAll}
        >
          {allExpanded ? "Collapse All" : "Show All"}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto px-4">
        {projects.map((project, index) => {
          const isOpen = expanded.includes(index);
          return (
            <Card
              key={project.name}
              className="bg-white/10 backdrop-blur-sm border border-white/10"
            >
              {/* Header toggles collapse */}
              <CardHeader
                onClick={() => toggleExpand(index)}
                className="cursor-pointer pb-2"
              >
                <div className="flex justify-between items-start gap-3">
                  <div className="space-y-2">
                    <CardTitle>{project.name}</CardTitle>
                    {project.title && (
                      <p className="text-sm text-muted-foreground">
                        {project.title}
                      </p>
                    )}
                    {project.period && (
                      <p className="text-xs text-muted-foreground">
                        {project.period}
                      </p>
                    )}
                    <CardDescription>{project.summary}</CardDescription>
                  </div>
                  <div
                    className={`pt-1 transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </div>
              </CardHeader>

              {/* Stack & Visit */}
              <CardContent className="pt-0 pb-0">
                <div className="flex flex-wrap gap-2 justify-between items-center pb-4">
                  <div className="flex gap-2 flex-wrap">
                    <TooltipProvider>
                      {project.stack.map((tech) => (
                        <Tooltip key={tech.name}>
                          <TooltipTrigger asChild>
                            <div className="w-7 h-7 p-1 rounded-md bg-white flex items-center justify-center">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={16}
                                height={16}
                              />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>{tech.name}</TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>

                  {project.link ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-primary px-2"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Button>
                  ) : (
                    <span className="text-sm text-muted-foreground italic whitespace-nowrap">
                      Currently Unavailable
                    </span>
                  )}
                </div>
              </CardContent>

              {/* Details */}
              <CardContent
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 px-1 pt-2">
                  {project.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
