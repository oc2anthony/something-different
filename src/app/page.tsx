"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

const galleryMood = [
  {
    label: "Something Different",
    caption: "Light & layered floral tables",
    accent: "#e2cec2",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80&sat=-20",
  },
  {
    label: "John De Caro",
    caption: "Handdrafted installations",
    accent: "#d6c7bb",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "IG Studio",
    caption: "Documented on @something_different_art",
    accent: "#c4b7a6",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
  },
]

const motionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const motionTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
}

export default function Home() {
  const { hero, services, legacy, highlight, contact, nav } = siteConfig

  return (
    <div className="min-h-screen bg-[#fdfaf7] text-[#111]">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.08),_transparent_55%)]" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-32 pt-9">
          <nav className="flex flex-wrap items-center justify-between gap-4 text-sm uppercase tracking-[0.4em]">
            <Link className="font-serif text-xl leading-none" href="/">
              {siteConfig.name}
            </Link>
            <div className="flex flex-wrap gap-5 text-[0.65rem] tracking-[0.54em] text-[#777]">
              {nav.links.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-[#111]">
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href={nav.cta.href}
              className="text-[0.65rem] font-semibold tracking-[0.35em] text-[#111]"
            >
              {nav.cta.label}
            </Link>
          </nav>

          <header className="grid gap-10 lg:grid-cols-[3fr_2fr]">
            <motion.div
              className="space-y-7"
              initial="hidden"
              animate="visible"
              variants={motionFade}
              transition={motionTransition}
            >
              <Badge className="text-sm uppercase tracking-[0.4em] text-[#222]">
                {hero.badge}
              </Badge>
              <div className="space-y-5">
                <motion.h1
                  className="font-serif text-5xl leading-[1.1] text-[#050505] sm:text-6xl lg:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {hero.title}
                </motion.h1>
                <motion.p
                  className="max-w-3xl text-lg leading-relaxed text-[#2d2d2d]"
                  variants={motionFade}
                  transition={motionTransition}
                >
                  {hero.subtitle}
                </motion.p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={hero.cta.href} className="flex items-center gap-2">
                    {hero.cta.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={hero.secondary.href}>{hero.secondary.label}</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-gradient-to-b from-white via-white to-[#f1e9de] p-6 shadow-[0_30px_80px_rgba(17,17,17,0.08)]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="font-serif text-3xl leading-snug text-[#0c0c0c]">
                Light. Family. Quality.
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.6em] text-[#777]">Artisan Interiors</p>
              <div className="mt-6 space-y-3 text-sm text-[#555]">
                <p>Shop + floral studio</p>
                <p>Commercial + residential styling</p>
                <p>Events, weddings, memorials</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-[#222]">
                <span className="rounded-full bg-[#111] px-5 py-1 text-white">Quality</span>
                <span className="rounded-full border border-black/30 px-5 py-1">Care</span>
                <span className="rounded-full border border-black/30 px-5 py-1">Family</span>
              </div>
            </motion.div>
          </header>
        </div>
      </div>

      <section id="services" className="mx-auto max-w-6xl px-6 pb-24 pt-20">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.6em] text-[#777]">Services</p>
          <h2 className="font-serif text-4xl leading-tight text-[#111]">An atelier for every scale.</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[#444]">
            These three pillars keep our studio rooted in craft and community—vibrant retail styling, striking commercial installations, and heartfelt residential moments.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-4 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(17,17,17,0.08)]"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="font-serif text-2xl text-[#111]">{service.title}</h3>
              <p className="text-sm text-[#4c4c4c]">{service.description}</p>
              <div className="mt-auto space-y-2 text-xs uppercase tracking-[0.5em] text-[#8d8d8d]">
                {service.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="legacy" className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="absolute inset-x-1/4 top-4 h-[1px] bg-black/10" aria-hidden />
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.5em] text-[#777]">
            <span>Legacy</span>
            <span>Quality &amp; Care</span>
          </div>
          <h2 className="font-serif text-4xl text-[#111]">Decades of quiet confidence.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {legacy.map((item) => (
            <div
              key={item.year}
              className="rounded-[2.75rem] border border-black/10 bg-white/80 p-6 text-sm leading-relaxed shadow-[0_20px_60px_rgba(17,17,17,0.05)]"
            >
              <p className="text-xs uppercase tracking-[0.5em] text-[#777]">{item.label}</p>
              <p className="font-serif text-2xl text-[#111]">{item.year}</p>
              <p className="mt-3 text-[#444]">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="studio" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-black/10 bg-[#fffdf7] p-8 shadow-[0_30px_60px_rgba(17,17,17,0.08)]">
            <p className="text-xs uppercase tracking-[0.6em] text-[#777]">Studio &amp; Shop</p>
            <h2 className="font-serif text-4xl text-[#111]">{highlight.title}</h2>
            <p className="text-sm text-[#5a5a5a]">{highlight.copy}</p>
            <div className="space-y-2 text-xs uppercase tracking-[0.4em] text-[#3f3f3f]">
              {highlight.hours.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}>
                  Call the Studio
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={contact.instagram.url} target="_blank" rel="noreferrer">
                  Instagram <Instagram className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-black/10 bg-gradient-to-b from-[#fff8f2] to-white p-6 shadow-[0_40px_120px_rgba(17,17,17,0.05)]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.6em] text-[#777]">Address</p>
              <p className="text-xl text-[#111]">{contact.address}</p>
              <div className="grid gap-4">
                <div className="rounded-3xl border border-black/10 bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Email</p>
                  <Link className="text-sm text-[#111]" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </Link>
                </div>
                <div className="rounded-3xl border border-black/10 bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Phone</p>
                  <Link className="text-sm text-[#111]" href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}>
                    {contact.phone}
                  </Link>
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#777]">Instagram</p>
              <p className="text-lg font-semibold text-[#111]">{contact.instagram.handle}</p>
              <p className="text-sm text-[#555]">{contact.instagram.creative}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-[#777]">Visual Voice</p>
          <h2 className="font-serif text-4xl text-[#111]">Moments from {siteConfig.name}</h2>
          <p className="max-w-3xl text-sm text-[#555]">
            A curated glimpse into the studio’s textures, florals, and cinematic light—stories captured by John De Caro on Instagram.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {galleryMood.map((shot) => (
            <div
              key={shot.label}
              className="relative overflow-hidden rounded-[2.25rem] border border-black/10 bg-white p-6"
            >
              <div
                className="h-48 w-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, transparent, rgba(14,14,14,0.9)), url('${shot.image}')`,
                  backgroundColor: shot.accent,
                }}
              />
              <div className="mt-5 space-y-1">
                <p className="text-xs uppercase tracking-[0.4em] text-[#777]">{shot.label}</p>
                <p className="font-serif text-2xl text-[#111]">{shot.caption}</p>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#333]">
                  <Instagram className="h-4 w-4" />
                  {contact.instagram.handle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white/70 px-6 py-10 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[#777]">{siteConfig.tagline}</p>
        <p className="mt-2 text-sm text-[#555]">© {new Date().getFullYear()} {siteConfig.name}. Quality interiors, flowers, and care.</p>
      </footer>
    </div>
  )
}
