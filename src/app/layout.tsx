import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PCMA — Private Client Merchant Association",
  description:
    "Private banking side of merchant services: unlimited processing, transparent pricing, enterprise tools.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh`}>
        <header className="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold tracking-wide">PCMA</Link>
            <div className="flex gap-6 text-sm" style={{ color: "var(--muted)" }}>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/membership">Membership</Link>
              <Link href="/contact" className="text-white">Contact</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <div className="mx-auto max-w-6xl px-4 py-14 text-sm" style={{ color: "var(--muted)" }}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <div className="font-semibold text-white">Hours</div>
                <div className="mt-2">Sun–Fri, 9am–5pm</div>
              </div>
              <div>
                <div className="font-semibold text-white">Follow</div>
                <div className="mt-2 space-x-4">
                  <a href="#">Facebook</a>
                  <a href="#">Instagram</a>
                  <a href="#">Twitter</a>
                </div>
              </div>
              <div>
                <div className="font-semibold text-white">United Processing Association</div>
                <div className="mt-2">4021 N. 75th Street, #101 Scottsdale, Arizona 85251</div>
                <div className="mt-1">info@upadata.com • (800) 485-4808</div>
              </div>
            </div>
            <div className="mt-10 text-xs">
              © {new Date().getFullYear()} PCMA — Private Client Merchant Association
              <div className="opacity-80">Representing the private banking side of the merchant services industry.</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
