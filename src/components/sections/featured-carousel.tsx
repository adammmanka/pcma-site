"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Slide = {
  title: string;
  copy: string;
  img: string;
  cta?: { label: string; href: string };
};

const slides: Slide[] = [
  {
    title: "Unlimited Processing",
    copy: "One flat monthly fee with enterprise tools.",
    img: "/payment-processing-2.webp",
    cta: { label: "Learn more", href: "/payment-processing" },
  },
  {
    title: "Platforms & Integrations",
    copy: "Modern POS, gateways, and analytics—built to scale.",
    img: "/platforms-img-1.webp",
    cta: { label: "Explore platforms", href: "/platforms" },
  },
  {
    title: "Concierge Support",
    copy: "Private-client advisors and transparent pricing.",
    img: "/payment-processing-1.jpeg",
    cta: { label: "Contact us", href: "/contact" },
  },
];

export function FeaturedCarousel() {
  return (
    <section className="section pt-0">
      <div className="mx-auto max-w-6xl px-4">
        <Carousel className="relative">
          <CarouselContent>
            {slides.map((s, idx) => (
              <CarouselItem key={idx}>
                <div className="relative h-[420px] md:h-[560px] overflow-hidden rounded-xl2 tile">
                  <Image src={s.img} alt="" fill priority={idx===0} className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
                  <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-semibold"
                      >
                        {s.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-3 text-white/80"
                      >
                        {s.copy}
                      </motion.p>
                      {s.cta && (
                        <a href={s.cta.href} className="btn btn-primary mt-6 inline-flex">
                          {s.cta.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/90 text-black hover:bg-white" />
          <CarouselNext className="bg-white/90 text-black hover:bg-white" />
        </Carousel>
      </div>
    </section>
  );
}


