"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-6 border-t border-border/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium tracking-[0.2em] hover:opacity-70 transition-opacity duration-200"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              GUGELABS
            </Link>
            <div className="hidden md:block h-4 w-px bg-border/40" />
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link 
                href="/privacy" 
                className="hover:text-foreground transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-foreground transition-colors duration-200"
              >
                Terms
              </Link>
              <a 
                href="mailto:gugel@gugelabs.com" 
                className="hover:text-foreground transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-muted-foreground/60">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              Based in Brazil
            </span>
            <span>© 2026 GUGELABS</span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
