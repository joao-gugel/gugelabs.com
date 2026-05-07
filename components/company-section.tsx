"use client"

import { motion } from "framer-motion"

function SectionDivider() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
    </div>
  )
}

export function CompanySection() {
  return (
    <>
      <SectionDivider />
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 
            className="text-xs font-medium text-muted-foreground uppercase tracking-[0.3em] mb-10"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Company
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <p 
                className="text-lg font-medium text-foreground tracking-wide"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                GUGELABS INOVA SIMPLES (I.S.)
              </p>
              <p className="text-sm text-muted-foreground">
                CNPJ: 65.396.703/0001-26
              </p>
            </div>
            
            <div className="h-px w-16 bg-border/40" />
            
            <div className="space-y-2">
              <a 
                href="mailto:gugel@gugelabs.com" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-block"
              >
                gugel@gugelabs.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
