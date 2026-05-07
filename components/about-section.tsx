"use client"

import { motion } from "framer-motion"

function SectionDivider() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
    </div>
  )
}

export function AboutSection() {
  return (
    <>
      <SectionDivider />
      <section id="about" className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 
            className="text-xs font-medium text-muted-foreground uppercase tracking-[0.3em] mb-10"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            About
          </h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 tracking-wide">
            GUGELABS develops mobile-first digital products focused on wellness, productivity and AI experiences. We create software with a strong focus on simplicity, performance and user experience.
          </p>
        </motion.div>
      </section>
    </>
  )
}
