"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const RotatingText = () => {
  const phrases = [
    "Free webinar series open to everyone.",
    "Learn from leading naturopathic doctors in oncology.",
    "Discover evidence-based complementary approaches to cancer care.",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[3.5rem] md:h-[4.5rem] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          {phrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-50 to-gray-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="/placeholder-9t513.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-emerald-600">Free</span> Integrative Oncology{" "}
            <span className="text-emerald-600">Webinar Series</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <RotatingText />
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Register Free
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild>
                <Link href="/schedule">View Schedule</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.img
                  key={i}
                  src={`/placeholder.svg?height=100&width=100&query=professional headshot of doctor ${i}`}
                  alt={`Speaker ${i}`}
                  className="w-12 h-12 rounded-full border-2 border-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                />
              ))}
            </div>
            <p className="ml-4 text-gray-600">
              <span className="font-semibold">5 expert speakers</span> from June to October 2025
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
