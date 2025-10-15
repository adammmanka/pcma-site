"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-dvh flex items-center">
      <div className="absolute inset-0 -z-10 bg-grid-fade" />
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,27,42,0.20) 0%, rgba(13,27,42,0.85) 100%), url('/card-hero.webp') center/cover no-repeat, url('/image-asset.webp') center/cover no-repeat",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-[54px] font-semibold leading-[1.05] tracking-[-0.02em]"
        >
          Payments — Perfected
        </motion.h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl" style={{ color: "var(--muted)" }}>
          To ensure the growth of your business, we are committed to providing
          the highest quality of electronic transaction services found in the industry.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/membership" className="btn btn-primary shadow-soft">
            Join PCMA
          </a>
          <a href="/contact" className="btn btn-secondary">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}


