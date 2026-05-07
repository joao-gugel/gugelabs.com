"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-lg font-medium tracking-[0.2em] hover:opacity-70 transition-opacity duration-200"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          GUGELABS
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {isHome ? (
            <>
              <Link 
                href="#about" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                href="#products" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Products
              </Link>
              <Link 
                href="#contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Contact
              </Link>
            </>
          ) : (
            <Link 
              href="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Back to Home
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          {!isHome && (
            <Link 
              href="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Home
            </Link>
          )}
        </div>
      </nav>
    </motion.header>
  )
}
