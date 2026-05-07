"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
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
            Privacy Policy
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
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                GUGELABS INOVA SIMPLES (I.S.) (&quot;GUGELABS&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we handle information on our website at gugelabs.com.
              </p>
            </section>

            <div className="h-px bg-border/30" />

            <section>
              <h2 
                className="text-lg font-medium tracking-wide mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Information We Receive
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently, our website serves as an informational platform providing details about our company and products. The only information we may receive is through direct communication when you choose to contact us via email.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you use our contact form or email us directly, we will receive the information you provide, such as your name, email address, and message content.
              </p>
            </section>

            <div className="h-px bg-border/30" />

            <section>
              <h2 
                className="text-lg font-medium tracking-wide mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise any rights regarding your personal information, please contact us at:
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

            <div className="h-px bg-border/30" />

            <section>
              <h2 
                className="text-lg font-medium tracking-wide mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We take reasonable measures to protect any personal information you provide to us through direct communication. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <div className="h-px bg-border/30" />

            <section>
              <h2 
                className="text-lg font-medium tracking-wide mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
