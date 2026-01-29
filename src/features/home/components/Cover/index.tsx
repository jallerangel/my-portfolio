"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Code2 } from "lucide-react"

const Cover = () => {
  const [currentTitle, setCurrentTitle] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<
    Array<{
      id: number
      initialX: number
      initialY: number
      targetX: number
      targetY: number
      duration: number
    }>
  >([])

  useEffect(() => {
    setMounted(true)
    setParticles(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        targetX: Math.random() * 100,
        targetY: Math.random() * 100,
        duration: Math.random() * 10 + 20,
      }))
    )
  }, [])

  const titles = [
    "Full Stack Developer (Mid-Level)",
    "Node.js & NestJS Backend Developer",
    "React & Next.js Frontend Developer",
    "Cloud & DevOps (AWS, K8s, Terraform)",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-zinc-900 via-zinc-800 to-blue-900/20">
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
            }}
            animate={{
              left: `${particle.targetX}%`,
              top: `${particle.targetY}%`,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-5xl bg-zinc-900/50 backdrop-blur-xl border-zinc-700/50 shadow-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-8 md:p-12 lg:p-16"
          >
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-linear-to-r from-blue-500 to-blue-600 rounded-full blur-xl opacity-30"
                />
                <Code2 className="w-16 h-16 text-blue-500 relative z-10" />
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 bg-linear-to-r from-blue-200 via-blue-400 to-blue-500 bg-clip-text text-transparent"
            >
              Luis Jaller
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="h-12 md:h-16 flex items-center justify-center mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTitle}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-400"
                >
                  {titles[currentTitle]}
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-zinc-300 text-center max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Mid-level Full Stack Developer with experience in Node.js, 
              NestJS, React, Next.js and Expo. Focused on building scalable, 
              maintainable web and mobile applications, with cloud experience in AWS,
              Kubernetes and Terraform
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="p-2 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/50"
                  asChild
                >
                  <a
                    href="https://github.com/jallerangel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github/>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="p-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/jallerangel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin/>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="p-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                  asChild
                >
                  <a href="mailto:jallerangel06@gmail.com">
                    <Mail/>
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center mt-12"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-blue-400"
              >
                <ArrowDown className="w-8 h-8 cursor-pointer" />
              </motion.div>
            </motion.div>
          </motion.div>
        </Card>
      </div>
    </div>
  )
}

export default Cover
