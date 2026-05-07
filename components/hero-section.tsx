"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px]"
        >
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent blur-3xl" />
          
          {/* Middle ring */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-white/[0.06] via-transparent to-white/[0.04] blur-2xl"
          />
          
          {/* Inner core */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-[35%] rounded-full bg-gradient-radial from-white/[0.1] via-white/[0.03] to-transparent blur-xl"
          />
          
          {/* Subtle accent ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[25%] rounded-full border border-white/[0.03]"
          />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[0.15em] mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            GUGELABS
          </h1>
          <div className="h-px w-24 bg-border mx-auto mt-6" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-4 tracking-wide text-balance"
        >
          Mobile products focused on wellness, AI and productivity.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-base text-muted-foreground/60 max-w-xl mx-auto mb-12 text-pretty leading-relaxed"
        >
          Brazilian software company building modern digital experiences for iOS, Android and the web.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#products"
            className="px-8 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Products
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-border/60 rounded-full text-sm font-medium hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-2 text-xs text-muted-foreground/50"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
          <span className="tracking-widest uppercase">Based in Brazil</span>
        </motion.div>
      </div>
    </section>
  )
}
