"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Calendar, ArrowRight, Zap, Target, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export default function VercelSDRPresentation() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      const section = Math.floor(window.scrollY / window.innerHeight)
      setCurrentSection(section)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease",
          }}
        />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Progress Bar */}
      <div className="fixed left-0 top-0 w-1 h-full bg-gradient-to-b from-gray-800 to-gray-900 z-50">
        <div
          className="w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/50"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Section Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-2">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === i ? "bg-white scale-150" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* Scroll Container */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Section 1: Hero */}
        <section className="snap-start h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
          <div className="text-center z-10 relative">
            <div className="mb-12 relative">
              <div
                className="w-24 h-24 mx-auto mb-8 relative"
                style={{ transform: `rotate(${scrollProgress * 3.6}deg)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <svg viewBox="0 0 76 65" fill="none" className="w-full h-full relative z-10">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="url(#gradient)" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00D4FF" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Ricky Aguilar
            </h1>
            <div className="relative mb-8">
              <p className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-bold">
                SDR Candidate
              </p>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-lg rounded-lg" />
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Converting technical conversations into enterprise deals. <br/>
              <span className="text-lg text-gray-400 mt-2 block">MEDDIC-qualified • Developer-fluent • Customer-obsessed</span>
            </p>
            <div className="mt-12 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-gray-600 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 group text-white hover:text-white"
              >
                Scroll to explore
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </section>

        {/* Section 2: About Me */}
        <section className="snap-start h-screen flex items-center justify-center px-4 md:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
            </div>

            {/* Enhanced Timeline Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  image: "/images/uc-san-diego-library.jpg",
                  title: "Santa Barbara → UC San Diego",
                  subtitle: "B.S. Math-CS • Dean's List",
                  desc: "First-gen college grad; led 3 engineering orgs, built campus-wide event platform (React/Node)",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  image: "/images/bioinformatics.jpg",
                  title: "Bioinformatics Researcher",
                  subtitle: "UCSD • Published Research",
                  desc: "Led ML pipeline optimization (Python/TensorFlow); 40% faster genomic analysis, conference presentation",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  image: "/images/data-analyst.jpeg",
                  title: "Data Analyst",
                  subtitle: "Credit One Bank • $2.8M Impact",
                  desc: "Drove 15% churn reduction via predictive modeling; presented ROI analysis to C-suite executives",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  image: "/images/datadog-logo-new.jpg",
                  title: "Enterprise SDR",
                  subtitle: "Datadog • 275% of Quota",
                  desc: "#1 Enterprise SDR in Q2; sourced $2.3M pipeline; mastered MEDDIC + multi-threading at scale",
                  color: "from-orange-500 to-red-500",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-500 group backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden text-white"
                >
                  <CardContent className="p-0 relative">
                    <div
                      className={`relative h-40 w-full group-hover:scale-105 transition-transform duration-500 ${
                        item.title === "Datadog" ? "bg-white p-4 flex items-center justify-center" : ""
                      }`}
                    >
                      {item.title === "Datadog" ? (
                        <Image
                          src="/images/datadog-logo-new.jpg"
                          alt={item.title}
                          width={120}
                          height={60}
                          objectFit="contain"
                          className="transition-all duration-500"
                        />
                      ) : (
                        <>
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </>
                      )}
                    </div>
                    <div className="p-6 pt-4">
                      <h3 className="font-bold mb-2 text-lg group-hover:text-white transition-colors">{item.title}</h3>
                      <p className="text-sm text-gray-300 mb-3 font-semibold">{item.subtitle}</p>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Why Sales · Why Vercel */}
        <section className="snap-start min-h-screen flex items-center justify-center px-4 md:px-8 relative py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Why Sales · Why Vercel
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Why Sales */}
              <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm hover:bg-gray-900/50 transition-all duration-500 group text-white">
                <CardContent className="p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center mb-8">
                    <Zap className="w-8 h-8 text-cyan-400 mr-4" />
                    <h3 className="text-3xl font-bold">Why Sales</h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      { icon: "🎯", text: "Customer obsession", desc: "Every call starts with their business pain, not our product" },
                      { icon: "⚡", text: "Technical credibility", desc: "I speak developer to developer - React, Next.js, performance" },
                      { icon: "📈", text: "MEDDIC mastery", desc: "At Datadog: 275% quota via disciplined qualification" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <div className="font-semibold text-lg">{item.text}</div>
                          <div className="text-sm text-gray-300">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Why Vercel */}
              <Card className="bg-gray-900/30 border-gray-800 backdrop-blur-sm hover:bg-gray-900/50 transition-all duration-500 group text-white">
                <CardContent className="p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center mb-8">
                    <TrendingUp className="w-8 h-8 text-purple-400 mr-4" />
                    <h3 className="text-3xl font-bold">Why Vercel</h3>
                  </div>
                  <div className="space-y-6 mb-8">
                    {[
                      { title: "Linear's deployment", metric: "15 min → 45 sec", improvement: "95% faster CI/CD" },
                      { title: "Loom's global edge", metric: "40% latency drop", improvement: "Better UX worldwide" },
                      { title: "HashiCorp previews", metric: "Zero config setup", improvement: "Dev velocity up" },
                    ].map((item, i) => (
                      <div key={i} className="group/metric hover:translate-x-2 transition-transform duration-300">
                        <div className="font-semibold text-lg">{item.title}</div>
                        <div className="text-gray-300 text-sm">{item.metric}</div>
                        <div className="text-xs text-green-400 font-semibold">{item.improvement}</div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced customer proof */}
                  <div className="space-y-3">
                    <div className="text-sm text-gray-400 text-center mb-2">Trusted by teams at:</div>
                    <div className="flex gap-6 text-sm text-gray-300 justify-center">
                      {["Linear", "Loom", "HashiCorp", "TikTok"].map((logo, i) => (
                        <span key={i} className="hover:text-white transition-colors cursor-pointer font-medium">
                          {logo}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Pull Quote */}
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-xl" />
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-300 relative z-10">
                "Vercel lets reps sell{" "}
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-bold">
                  outcomes, not infrastructure.
                </span>
                "
              </blockquote>
            </div>
          </div>
        </section>

        {/* Section 4: How I'll Prospect */}
        <section className="snap-start min-h-screen flex items-center justify-center px-4 md:px-8 relative py-24">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                How I'll Prospect at Vercel
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  title: "ICP & Trigger Mapping",
                  content: "Target: React/Next.js SaaS with 100K+ users, $10M+ ARR, global traffic. Triggers: GitHub job posts, Lighthouse scores <70, deployment complaints on Twitter, fundraising announcements.",
                  icon: Target,
                },
                {
                  title: "Signal-Driven Prospecting",
                  content: "Tools: BuiltWith for tech stack, Apollo for contacts, Clay for enrichment. Alerts: Hiring 'Senior Next.js' roles, GitHub stars spike >1K/month, performance complaints on Twitter/Reddit.",
                  icon: TrendingUp,
                },
                {
                  title: "Multi-Touch Orchestration",
                  content: "Day 1: LinkedIn voice note (30s). Day 3: Email with custom Vercel Preview demo. Day 7: Twitter/GitHub engage. Day 14: Slack Connect request. Day 21: Loom demo walkthrough.",
                  icon: Users,
                },
                {
                  title: "MEDDIC Qualification Framework",
                  content: "Metrics: Load time/bounce rate/dev velocity. Economic Buyer: VP Eng/CTO. Decision: Performance vs cost. Implicate: Slow deploys = feature delays. Champion: Lead frontend dev. Timeline: Next quarter planning.",
                  icon: Zap,
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i + 1}`}
                  className="border-gray-800 bg-gray-900/30 backdrop-blur-sm rounded-lg px-6 text-white"
                >
                  <AccordionTrigger className="text-left hover:text-gray-300 py-6 text-white">
                    <span className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {i + 1}
                      </div>
                      <item.icon className="w-6 h-6 text-purple-400" />
                      <span className="text-xl font-semibold">{item.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4 pb-6 text-base leading-relaxed ml-16">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Section 5: Target Account - Notion */}
        <section className="snap-start min-h-screen flex items-center justify-center px-4 md:px-8 relative py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="mb-12">
              <div className="text-8xl font-black mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Notion
              </div>
              <p className="text-xl text-gray-300">Target Account Analysis • MEDDIC Qualified</p>
              <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full mt-4" />
            </div>

            {/* Enhanced Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { value: "30M+", label: "Active Users", color: "from-blue-500 to-cyan-500" },
                { value: "$10B", label: "Valuation", color: "from-green-500 to-emerald-500" },
                { value: "50K+", label: "Enterprise Orgs", color: "from-purple-500 to-pink-500" },
                { value: "180", label: "Countries", color: "from-orange-500 to-red-500" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300 group hover:scale-105 text-white"
                >
                  <div
                    className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* MEDDIC Framework Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-red-900/20 border-red-800/50 backdrop-blur-sm hover:bg-red-900/30 transition-all duration-300 group text-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-bold mb-3 text-red-300 text-lg">METRICS</h3>
                  <p className="text-sm leading-relaxed">Page load: 3.2s avg • 15% mobile churn from slow sync</p>
                </CardContent>
              </Card>

              <Card className="bg-red-900/20 border-red-800/50 backdrop-blur-sm hover:bg-red-900/30 transition-all duration-300 group text-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-bold mb-3 text-red-300 text-lg">PAIN</h3>
                  <p className="text-sm leading-relaxed">React SSR bottlenecks • Global latency in APAC • Deploy complexity</p>
                </CardContent>
              </Card>

              <Card className="bg-green-900/20 border-green-800/50 backdrop-blur-sm hover:bg-green-900/30 transition-all duration-300 group text-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="font-bold mb-3 text-green-300 text-lg">IMPACT</h3>
                  <p className="text-sm leading-relaxed">
                    1s faster = <span className="font-bold text-green-400">+$25M ARR</span> from retention lift
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Why Notion Fits */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">Why Notion = Perfect Vercel Fit</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="font-semibold text-blue-400 mb-2">⚡ Tech Stack</div>
                  <div className="text-sm text-gray-300">React, Next.js, TypeScript - native Vercel compatibility</div>
                </div>
                <div>
                  <div className="font-semibold text-purple-400 mb-2">🌍 Global Scale</div>
                  <div className="text-sm text-gray-300">30M users across 180 countries need edge performance</div>
                </div>
                <div>
                  <div className="font-semibold text-green-400 mb-2">💼 Enterprise Ready</div>
                  <div className="text-sm text-gray-300">50K+ orgs = budget for infrastructure investment</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Contact Map */}
        <section className="snap-start min-h-screen flex items-center justify-center px-4 md:px-8 relative py-24">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Contact Map
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Leader Contact */}
              <Card className="bg-gray-900/30 border-gray-800 hover:border-blue-500/50 transition-all duration-500 group cursor-pointer backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 text-white">
                <CardContent className="p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg text-white">
                      AK
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Akshay Kothari</h3>
                      <p className="text-gray-300 text-lg">COO & Head of Product</p>
                      <div className="flex gap-3 mt-3">
                        <Badge variant="outline" className="text-xs border-blue-600 text-blue-400 bg-blue-500/10">
                          Economic Buyer
                        </Badge>
                        <Badge variant="outline" className="text-xs border-green-600 text-green-400 bg-green-500/10">
                          Decision Maker
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
                      <div className="font-semibold mb-3 text-lg flex items-center gap-2 text-white">
                        📧 <span>Email Draft:</span>
                      </div>
                      <div className="text-sm text-gray-300 mb-3">
                        <strong>Subject:</strong> 30M users + 3.2s load times = retention risk?
                      </div>
                      <div className="text-sm text-gray-300 leading-relaxed">
                        Hi Akshay, congrats on Notion's enterprise momentum. Noticed your React app serves 30M+ users globally - every 100ms of latency costs ~2% engagement. Vercel helped Linear cut load times by 80%. Worth exploring a pilot to protect your retention metrics?
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* IC Contact */}
              <Card className="bg-gray-900/30 border-gray-800 hover:border-green-500/50 transition-all duration-500 group cursor-pointer backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 text-white">
                <CardContent className="p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg text-white">
                      MW
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Mamoon Wamiq</h3>
                      <p className="text-gray-300 text-lg">Engineering Manager</p>
                      <div className="flex gap-3 mt-3">
                        <Badge variant="outline" className="text-xs border-purple-600 text-purple-400 bg-purple-500/10">
                          Champion
                        </Badge>
                        <Badge variant="outline" className="text-xs border-yellow-600 text-yellow-400 bg-yellow-500/10">
                          Technical
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
                      <div className="font-semibold mb-3 text-lg flex items-center gap-2 text-white">
                        📧 <span>Email Draft:</span>
                      </div>
                      <div className="text-sm text-gray-300 mb-3">
                        <strong>Subject:</strong> React SSR optimization for Notion's scale
                      </div>
                      <div className="text-sm text-gray-300 leading-relaxed">
                        Hey Mamoon, saw your React Conf talk on Notion's rendering optimizations. Built a 30-second demo showing how Vercel's Edge Runtime could eliminate your SSR bottlenecks. Worth 15 minutes to see the APAC latency improvements?
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="snap-start h-screen flex items-center justify-center px-4 md:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
          <div className="text-center relative z-10">
            <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Let's talk pipeline.
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to bring this energy to Vercel's enterprise motion?
            </p>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl opacity-50 animate-pulse" />
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-xl px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open("mailto:ricardo@example.com?subject=Vercel SDR Interview - Let's Discuss", "_blank")
                }
              >
                <Calendar className="w-6 h-6 mr-3" />
                Questions about my approach?
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-t from-gray-900 to-black py-12 text-center border-t border-gray-800">
          <div className="flex justify-center items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-3" />
              View on GitHub
            </Button>
            <div className="text-lg text-gray-300">
              Deployed on{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-bold">
                ▲ Vercel
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
