"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-wide flex items-center gap-2" onClick={close}>
          <Image src="/favicon.webp" alt="" width={20} height={20} className="rounded" />
          <span>PCMA</span>
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-sm" style={{ color: "var(--muted)" }}>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/platforms">Platforms</Link>
          <Link href="/payment-processing">Payment Processing</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/contact" className="text-white">Contact</Link>
        </div>

        {/* Mobile trigger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-white/80"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-4 text-base" style={{ color: "var(--muted)" }}>
            <Link href="/about" onClick={close}>About</Link>
            <Link href="/services" onClick={close}>Services</Link>
            <Link href="/platforms" onClick={close}>Platforms</Link>
            <Link href="/payment-processing" onClick={close}>Payment Processing</Link>
            <Link href="/faqs" onClick={close}>FAQs</Link>
            <Link href="/membership" onClick={close}>Membership</Link>
            <Link href="/contact" className="text-white" onClick={close}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}


