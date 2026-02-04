"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  ExternalLink,
  Smartphone,
  Monitor,
  Sparkles,
} from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  type: "mobile" | "web" | "backend"
  github: string
  demo?: string
  technologies: string[]
  gradient: string
  size: "large" | "medium" | "small"
}

const ProjectsGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "MyMotoFinance API",
      description: "Comprehensive financial management system tailored for gig-economy riders (DiDi, Uber Moto). Features include daily income tracking, automated debt savings, and preventive vehicle maintenance scheduling.",
      image: "https://i.ibb.co/ycjFYX0h/mymotofinance-preview.jpg",
      type: "backend",
      github: "https://github.com/jallerangel/mymotofinance-api",
      technologies: ["NestJS", "Prisma", "PostgreSQL", "Docker", "TypeScript"],
      gradient: "from-blue-600/40 via-blue-500/20 to-zinc-900",
      size: "large"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="relative min-h-screen w-full bg-linear-to-br from-zinc-900 via-zinc-800 to-blue-900/10 py-20 px-4">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-linear-to-r text-blue-500 from-blue-500 to-blue-600 mx-auto" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl leading-[1.3] lg:text-7xl font-bold mb-4 bg-linear-to-r from-blue-200 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A highlighted project currently in development, showcasing my approach to backend architecture, APIs, and scalable web solutions.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`
                ${project.size === "large" ? "md:col-span-3 md:row-span-2" : ""}
                ${
                  project.size === "medium" ? "md:col-span-1 md:row-span-1" : ""
                }
                ${project.size === "small" ? "md:col-span-1 md:row-span-1" : ""}
              `}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <ProjectCard
                project={project}
                isHovered={hoveredIndex === index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const ProjectCard = ({
  project,
  isHovered,
}: {
  project: Project
  isHovered: boolean
}) => {
  const TypeIcon = project.type === "mobile" ? Smartphone : Monitor

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{ duration: 0.3 }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="h-full"
    >
      <Card className="relative h-full min-h-[300px] bg-zinc-900/80 backdrop-blur-xl border-zinc-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group cursor-pointer">
        <div className="absolute inset-0">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
          <div
            className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-60 mix-blend-multiply`}
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/70 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between p-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Badge
                  className="flex items-center gap-1"
                  style={{
                    backgroundColor: "from-blue-500 to-blue-600",
                    borderColor: "#3b82f6",
                    color: "#FFFFFF",
                  }}
                >
                  <TypeIcon className="w-3 h-3" />
                  {project.type === "mobile" ? "Mobile" 
                    : project.type === "web" ? "Web" : "Backend" }
                </Badge>
              </motion.div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
              {project.title}
            </h3>

            <motion.p
              className="text-zinc-200 text-sm md:text-base mb-4 leading-relaxed"
              animate={{
                opacity: isHovered ? 1 : 0.8,
              }}
            >
              {project.description}
            </motion.p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <Badge
                    variant="outline"
                    className="border-white/30 text-white backdrop-blur-sm bg-white/10 text-xs"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                size="sm"
                className="bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:scale-105 transition-all shadow-lg shadow-blue-500/50"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>

              {project.demo && (
                <Button
                  size="sm"
                  className="bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:scale-105 transition-all shadow-lg shadow-blue-500/50"
                  asChild
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`absolute top-0 left-0 w-full h-full bg-linear-to-br ${project.gradient} opacity-20 blur-xl`}
          />
        </motion.div>

        <motion.div
          className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at top right, #3b82f6, transparent)`,
          }}
        />
      </Card>
    </motion.div>
  )
}

export default ProjectsGrid
