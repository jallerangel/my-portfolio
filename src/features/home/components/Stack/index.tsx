/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const Stack = () => {
  const technologies = [
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "NestJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      color: "#E0234E",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
      color: "#FFFFFF",
    },
    {
      name: "Expo",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
      color: "#FFFFFF",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
      color: "#326CE5",
    },
    {
      name: "Helm",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/helm/helm-original.svg",
      color: "#2496ED",
    },
    {
      name: "Terraform",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
      color: "#7B42BC",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      color: "#FF9900",
    },
  ]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className="relative min-h-screen w-full bg-linear-to-br from-zinc-900 via-zinc-800 to-amber-900/10 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.3] bg-linear-to-r from-blue-200 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            My Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto text-center"
          >
            From modern interfaces to cloud-native infrastructure
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {technologies.map((tech) => (
            <TechCard
              key={tech.name}
              tech={tech}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const TechCard = ({
  tech,
}: {
  tech: { name: string; icon: string; color: string }
}) => {
  return (
    <motion.div
      className="relative"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Glow animado */}
      <motion.div
        variants={{
          rest: { opacity: 0, scale: 0.85 },
          hover: { opacity: 1, scale: 1.1 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 rounded-lg blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${tech.color}55, transparent 70%)`,
        }}
      />

      {/* Card real */}
      <Card
        className="relative h-40 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 overflow-hidden cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(50px)",
        }}
      >
        {/* Borde + glow interno */}
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            boxShadow: `0 0 30px ${tech.color}55, inset 0 0 20px ${tech.color}30`,
          }}
        />

        {/* Contenido */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 gap-4">
          {/* Icon */}
          <motion.div
            whileHover={{
              scale: 1.15,
              rotate: 8,
              filter: `drop-shadow(0 0 20px ${tech.color})`,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 14 }}
            className="w-16 h-16"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
              style={{
                filter:
                  tech.name === "Next.js" || tech.name === "Express"
                    ? "brightness(0) invert(1)"
                    : "none",
              }}
            />
          </motion.div>

          {/* Name */}
          <motion.h3
            variants={{
              rest: { color: "#E4E4E7" },
              hover: {
                color: tech.color === "#FFFFFF" ? "#f59e0b" : tech.color,
                textShadow: `0 0 25px ${tech.color}80`,
              },
            }}
            transition={{ duration: 0.3 }}
            className="text-lg font-semibold text-center"
          >
            {tech.name}
          </motion.h3>
        </div>
      </Card>
    </motion.div>

  )
}

export default Stack
