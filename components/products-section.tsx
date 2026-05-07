"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const products = [
  {
    name: "Central Tarot",
    description: "AI-powered tarot reading experience with interactive spreads and personalized interpretations.",
    type: "live" as const,
    url: "https://centraltarot.com",
  },
  {
    name: "Burn AI",
    description: "AI-powered fitness and wellness companion focused on training consistency and habit tracking.",
    type: "development" as const,
  },
]

function ProductCard({ 
  name, 
  description, 
  type,
  url,
  index 
}: { 
  name: string
  description: string
  type: "live" | "development"
  url?: string
  index: number
}) {
  const CardContent = (
    <>
      <div className="flex items-start justify-between gap-4 mb-6">
        <h3 
          className="text-xl font-medium tracking-wide"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {name}
        </h3>
        {type === "live" ? (
          <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-foreground text-background shrink-0 group-hover:gap-2 transition-all duration-300">
            Visit
            <ArrowUpRight className="w-3 h-3" />
          </span>
        ) : (
          <span className="px-3 py-1.5 text-xs font-medium rounded-full border border-border/60 text-muted-foreground shrink-0">
            In Development
          </span>
        )}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </>
  )

  if (type === "live" && url) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-8 rounded-2xl border border-border/40 bg-card/20 backdrop-blur-sm hover:border-foreground/30 hover:bg-card/40 transition-all duration-300"
        >
          {CardContent}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group p-8 rounded-2xl border border-border/40 bg-card/20 backdrop-blur-sm"
    >
      {CardContent}
    </motion.article>
  )
}

function SectionDivider() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
    </div>
  )
}

export function ProductsSection() {
  return (
    <>
      <SectionDivider />
      <section id="products" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium text-muted-foreground uppercase tracking-[0.3em] mb-12"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Products
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.name} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
