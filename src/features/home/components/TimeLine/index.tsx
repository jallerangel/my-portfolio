"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Code,
  Briefcase,
  Atom,
  Rocket,
  Zap,
} from "lucide-react"

const TimeLine = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const timeline = [
    {
      year: "2023",
      title: "The Beginning",
      description: "I built a strong foundation in HTML, CSS, and JavaScript before transitioning to professional client projects, where I gained hands-on experience with backend development and modern workflows.",
      icon: Rocket,
      color: "#3b82f6",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      year: "2023",
      title: "Backend & DevOps Foundations",
      description:
        "Delivered backend solutions with Node.js and Express and implemented modern DevOps workflows including Docker, Kubernetes, and CI/CD. Gained practical Infrastructure-as-Code experience by deploying Azure resources via Terraform.",     
      icon: Code,
      color: "#3b82f6",
      tags: ["Node.js", "Express", "Docker", "Kubernetes", "Terraform", "Azure"],
    },
    {
      year: "2024",
      title: "Microservices & Cloud Maturity",
      description: "Advanced the stack by adopting NestJS for microservices and Helm for Kubernetes resource management. I streamlined delivery via GitHub Actions and established observability with New Relic, fully managed through modular Terraform.",
      icon: Briefcase,
      color: "#3b82f6",
      tags: [
        "NestJS",
        "Microservices",
        "Helm Charts",
        "GitHub Actions",
        "Terraform",
        "New Relic",
      ],
    },
    {
      year: "2025",
      title: "Cloud & DevOps on AWS",
      description: "Delivered cloud-native AWS solutions for a client until mid-2025. Utilized serverless components (Lambda, SQS, EventBridge) and RDS to build scalable systems managed via Infrastructure as Code.",
      icon: Zap,
      color: "#3b82f6",
      tags: ["AWS", "Lambda", "RDS", "SQS", "EventBridge", "Terraform"],
    },
    {
      year: "2025 – 2026",
      title: "Frontend & Product-Focused Development",
      description: "Delivered scalable user interfaces using React and Next.js powered by Prisma ORM. Also expanded into mobile development with Expo, engineered NestJS microservices with DynamoDB design contributions, and streamlined deployments using Helm Charts.",
      icon: Atom,
      color: "#3b82f6",
      tags: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "NestJS",
        "DynamoDB",
        "Prisma",
        "Helm",
      ],
    },
  ]

  // Code Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const characters =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01"
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      ctx.fillStyle = "rgba(24, 24, 27, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Gradient effect - más brillante arriba, más oscuro abajo
        const gradient = ctx.createLinearGradient(x, y - fontSize * 20, x, y)
        gradient.addColorStop(0, "#3b82f6")
        gradient.addColorStop(0.5, "#3b82f6")
        gradient.addColorStop(1, "rgba(37, 99, 235, 0.1)")

        ctx.fillStyle = gradient
        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-zinc-950 py-20"
    >
      {/* Code Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
        style={{ pointerEvents: "none" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950/50 via-transparent to-zinc-950/50" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Calendar className="w-16 h-16 text-blue-500 mx-auto" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.3] bg-linear-to-r from-blue-200 via-blue-400 to-blue-500 bg-clip-text text-transparent text-center">
            My Journey
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            From first lines of code to building real-world solutions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-500/20 via-blue-500/50 to-blue-500/20 hidden md:block" />
          <div className="space-y-12 md:space-y-24">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-20"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity },
              }}
              className="absolute inset-0 bg-linear-to-r from-blue-500 to-blue-600 rounded-full blur-xl opacity-50"
            />
            <div className="relative bg-zinc-900 rounded-full p-4 border-2 border-blue-500">
              <Zap className="w-8 h-8 text-blue-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const TimelineItem = ({
  item,
  index,
  isLeft,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any
  index: number
  isLeft: boolean
}) => {
  const Icon = item.icon
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
        } flex-col md:gap-8`}
    >
      <motion.div
        className="w-full md:w-[calc(50%-2rem)]"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Card className="bg-zinc-900/80 backdrop-blur-xl border-zinc-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group">
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${isLeft ? "left" : "right"
                }, ${item.color}20, transparent 70%)`,
            }}
          />

          <div className="relative z-10 p-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="inline-block mb-3"
            >
              <Badge
                className="text-lg font-bold px-4 py-1"
                style={{
                  backgroundColor: `${item.color}20`,
                  color: item.color,
                  borderColor: item.color,
                }}
              >
                {item.year}
              </Badge>
            </motion.div>

            <h3
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: item.color }}
            >
              {item.title}
            </h3>

            <p className="text-zinc-300 mb-4 leading-relaxed">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                >
                  <Badge
                    variant="outline"
                    className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-blue-500 to-blue-600"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
          />
        </Card>
      </motion.div>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.1 + 0.2,
          type: "spring",
          stiffness: 200,
        }}
        className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={
            isHovered ? { scale: 1.3, rotate: 360 } : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full blur-lg"
            style={{ backgroundColor: item.color }}
          />
          <div
            className="relative w-16 h-16 rounded-full border-4 flex items-center justify-center"
            style={{
              backgroundColor: "#18181b",
              borderColor: item.color,
            }}
          >
            <Icon
              className="w-8 h-8"
              style={{ color: item.color }}
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="md:hidden w-full h-8" />
    </motion.div>
  )
}

export default TimeLine
