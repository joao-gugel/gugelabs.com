"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h1 
            className="text-3xl md:text-4xl font-medium tracking-wide mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: January 2026
          </p>

          <div className="space-y-12">
            <section>
              <h2 
                className="text-lg font-medium tracking-wide mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Website Usage
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing and using the GUGELABS website at gugelabs.com, you agree to comply with these Terms of Service. This website is provided for informational purposes about our company and products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website.
              </p>
            </section>

            <div className="h-px bg-border/30" />

            <section>
              <h2 
                className="text-lg font-medium tracking-wide mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of GUGELABS INOVA SIMPLES (I.S.) or its content suppliers and is protected by Brazilian and international intellectual property laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
              </p>
            </section>

            <div className="h-px bg-border/30" />

            <section>
              <h2 
                className="text-lg font-medium tracking-wide mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website and its content are provided &quot;as is&quot; without warranties of any kind, either express or implied. GUGELABS does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by applicable law, GUGELABS shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website.
              </p>
            </section>

            <div className="h-px bg-border/30" />

            <section>
              <h2 
                className="text-lg font-medium tracking-wide mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="p-6 rounded-lg border border-border/30 bg-card/20">
                <p className="text-sm text-foreground mb-1">GUGELABS INOVA SIMPLES (I.S.)</p>
                <p className="text-sm text-muted-foreground mb-1">CNPJ: 65.396.703/0001-26</p>
                <a 
                  href="mailto:gugel@gugelabs.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  gugel@gugelabs.com
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
