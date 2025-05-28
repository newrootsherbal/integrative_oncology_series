"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const RotatingText = () => {
  const phrases = [
    "Free webinar series open to everyone",
    "Advanced webinar series with CE credits",
    "Designed for Naturopathic Doctors",
   
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[3.5rem] md:h-[1.5rem] relative overflow-hidden">
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
      <div className="absolute inset-0 z-0 opacity-65">
        <img src="/herobanner2.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* <span className="text-emerald-600">Free</span> Integrative Oncology{" "} */}
            {/* <span style={{ color: "#0a3371" }}>Free </span>  */}
            <span style={{ color: "#0a3371" }}>Integrative Oncology Series</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            
              <RotatingText />
            
            
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
  style={{ backgroundColor: "#90b73e" }}
  className="hover:opacity-90 px-6 py-3 text-lg text-black"
>
                <Link href="/#webinars">View Schedule</Link>
              </Button>
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="px-6 py-3 text-lg border border-emerald-600 text-emerald-600 bg-white hover:bg-emerald-50">
                <Link href="/schedule">View Schedule</Link>
              </Button>
            </motion.div> */}
          </motion.div>

          <motion.div
            className="mt-12 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4,5].map((i) => (
                <motion.img
                  key={i}
                  // src={`/placeholder.svg?height=100&width=100&query=professional headshot of doctor ${i}`}
                  src={`/speakers/speaker${i}.jpg`}
                  alt={`Speaker ${i}`}
                  className="w-12 h-12 rounded-full border-2 border-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                />
              ))}
            </div>
            <p className="ml-4 text-gray-1000">
              <span className="font-semibold">5 Expert Speakers from Sept 2025 - Feb 2026</span>
            </p>
            {/* <div className="flex items-center gap-2 mt-1">
        <span className="text-sm md:text-base text-gray-700">Sponsored by</span>
        <img
          src="/logos/nfh-logo.png"
          alt="NFH Logo"
          className="h-6 md:h-7 object-contain"
        />
        <span className="text-sm text-gray-400">×</span>
        <img
          src="/logos/vitazan-logo.png"
          alt="Vitazan Logo"
          className="h-6 md:h-7 object-contain"
        />
      </div> */}
          </motion.div>
            <motion.div
  className="mt-4 ml-0 flex items-center gap-3 text-gray-800 text-base md:text-lg"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1 }}
>
  <span className="font-medium">Sponsored by</span>
  <img src="/NFH x Vitazan.png" alt="NFH and Vitazan Logos" className="h-7 md:h-14 object-contain" />
</motion.div>



        </div>
      </div>
    </section>
  )
}

export default HeroBanner 
