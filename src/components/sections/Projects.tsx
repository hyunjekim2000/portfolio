import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/project";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-background text-foreground max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Recent Projects</h2>

      {/* Show only first 2 projects */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {projects.slice(0, 2).map((project) => (
          <Card
            key={project.name}
            className="bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between flex-wrap gap-2">
                {/* Tech Stack Icons */}
                <div className="flex gap-2">
                  {project.stack.map((tech, index) => (
                    <TooltipProvider
                      key={`${project.name}-${tech.name}-${index}`}
                      delayDuration={300}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-7 h-7 p-1 rounded-md bg-white flex items-center justify-center">
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={16}
                              height={16}
                              className="inline-block"
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="top">{tech.name}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>

                {/* Project Link */}
                {project.link ? (
                  <a
                    href={project.link}
                    className="text-sm text-primary hover:underline whitespace-nowrap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground italic whitespace-nowrap">
                    Currently Unavailable
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* See All Projects Button */}
      <div className="text-center">
        <Button
          asChild
          variant="outline"
          className="border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <Link href="/projects">See All Projects</Link>
        </Button>
      </div>
    </section>
  );
}
