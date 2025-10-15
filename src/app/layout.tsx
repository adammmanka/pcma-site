import type { Metadata } from "next";
import { Header } from "@/components/site/header";
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
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh`}>
        <Header />
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
