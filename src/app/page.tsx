"use client";

import React, { useState } from "react";
import {
  Heart,
  Target,
  Calendar,
  Apple,
  Droplet,
  Activity,
  Moon,
  Coffee,
  Sparkles,
  ShieldAlert,
  PauseCircle,
  BatteryCharging,
  Headphones,
  Trees,
  MessageCircle,
  Stethoscope,
  ArrowRight,
  Share2,
  Check,
  Copy,
  Menu,
  X,
  Compass,
  Users,
} from "lucide-react";

export default function HealthyLifePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [completedHabits, setCompletedHabits] = useState<number[]>([]);

  const toggleHabit = (id: number) => {
    setCompletedHabits((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <div className="min-h-screen bg-neutral text-on-surface font-sans selection:bg-primary-soft-2 selection:text-primary-ink antialiased">
      {/* 1. TICKER STRIP */}
      <div className="bg-primary-soft text-primary-ink border-b border-primary-border overflow-hidden py-3 font-mono text-[10px] font-medium tracking-monowide uppercase select-none">
        <div className="flex w-[200%] animate-ticker whitespace-nowrap">
          <div className="flex shrink-0 items-center gap-10 pr-10">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              HEALTHY LIFE — A SIMPLE GUIDE TO BUILDING HEALTHY HABITS
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              15 SIMPLE HEALTHY LIFESTYLE TIPS
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              SMALL HEALTHY HABITS MAKE A BIG DIFFERENCE
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              FREE EDUCATIONAL RESOURCE
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              HEALTHY LIFE — A SIMPLE GUIDE TO BUILDING HEALTHY HABITS
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              15 SIMPLE HEALTHY LIFESTYLE TIPS
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              SMALL HEALTHY HABITS MAKE A BIG DIFFERENCE
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              FREE EDUCATIONAL RESOURCE
            </span>
          </div>
        </div>
      </div>

      {/* 2. STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-surface/92 backdrop-blur-md border-b border-outline transition-colors">
        <div className="max-w-shell mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
              <Heart className="w-4 h-4 fill-primary text-primary" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-on-surface-strong">
              HEALTHY LIFE
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-on-surface-variant">
            <a href="#who-this-is-for" className="hover:text-on-surface-strong transition-colors">
              Who This Is For
            </a>
            <a href="#the-idea" className="hover:text-on-surface-strong transition-colors">
              The Idea
            </a>
            <a href="#before-you-start" className="hover:text-on-surface-strong transition-colors">
              Before You Start
            </a>
            <a href="#daily-habits" className="hover:text-on-surface-strong transition-colors">
              Daily Habits
            </a>
            <a href="#body-care" className="hover:text-on-surface-strong transition-colors">
              Body Care
            </a>
            <a href="#tired-stressed" className="hover:text-on-surface-strong transition-colors">
              Recovery
            </a>
            <a href="#key-numbers" className="hover:text-on-surface-strong transition-colors">
              Key Numbers
            </a>
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="bg-secondary text-on-secondary hover:bg-primary text-[13.5px] font-medium py-2.5 px-5 rounded-full shadow-raised transition-all duration-200 inline-flex items-center gap-1.5 min-h-[40px]"
            >
              Start Today
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-on-surface-strong hover:bg-surface-muted rounded-full min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface border-b border-outline px-5 py-6 shadow-float transition-all">
            <nav className="flex flex-col gap-4 text-[16px] font-medium text-on-surface">
              <a
                href="#who-this-is-for"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-primary"
              >
                Who This Is For
              </a>
              <a
                href="#the-idea"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-primary"
              >
                The Idea In One Line
              </a>
              <a
                href="#before-you-start"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-primary"
              >
                Before You Start (Habits 1–4)
              </a>
              <a
                href="#daily-habits"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-primary"
              >
                Daily Healthy Habits (Habits 5–7)
              </a>
              <a
                href="#body-care"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-primary"
              >
                Taking Care of Your Body (Habits 8–10)
              </a>
              <a
                href="#tired-stressed"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-primary"
              >
                When You Feel Tired or Stressed (Habits 11–15)
              </a>
              <a
                href="#key-numbers"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-primary"
              >
                Key Numbers
              </a>
              <a
                href="#cta"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center bg-primary text-on-primary py-3 rounded-full font-semibold"
              >
                Start Journey Today
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="bg-neutral py-16 md:py-24 lg:py-28 border-b border-outline">
          <div className="max-w-shell mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column (55%) */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Pill label */}
                <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border px-3.5 py-1.5 rounded-full text-primary-ink font-mono text-[10px] font-semibold tracking-monowide uppercase mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  HEALTHY LIFE GUIDE
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-on-surface-strong tracking-tightest leading-[1.06] mb-6">
                  HEALTHY LIFE
                </h1>

                {/* Subtitle from content.txt */}
                <p className="text-xl sm:text-2xl lg:text-[22px] text-on-surface-variant font-normal leading-[1.6] mb-8 max-w-[620px]">
                  A simple guide to building healthy habits for everyday life.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <a
                    href="#before-you-start"
                    className="bg-primary text-on-primary hover:bg-primary-strong text-[15px] font-semibold py-3.5 px-7 rounded-full shadow-raised hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 min-h-[44px]"
                  >
                    Explore Habits
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#cta"
                    className="bg-surface text-on-surface-strong hover:bg-surface-muted border border-outline text-[15px] font-semibold py-3.5 px-7 rounded-full shadow-card hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 min-h-[44px]"
                  >
                    Share With Family
                    <Share2 className="w-4 h-4" />
                  </a>
                </div>

                {/* Meta Indicator */}
                <div className="flex items-center gap-4 text-xs text-on-surface-muted font-mono tracking-wide">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-primary" /> 15 Complete Tips
                  </span>
                  <span>•</span>
                  <span>Evidence-Backed</span>
                  <span>•</span>
                  <span>100% Free Guide</span>
                </div>
              </div>

              {/* Right Column Visual / Document Card */}
              <div className="lg:col-span-5 w-full">
                <div
                  id="who-this-is-for"
                  className="bg-surface border border-outline rounded-md p-7 md:p-8 shadow-card relative hover:shadow-raised transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-outline">
                    <span className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink font-mono text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-monowide">
                      WHO THIS IS FOR
                    </span>
                    <span className="font-mono text-[11px] text-on-surface-muted uppercase">
                      Audience Note
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-on-surface-strong tracking-tight mb-3">
                    Who This Is For
                  </h2>

                  {/* Verbatim text from content.txt */}
                  <p className="text-lg text-on-surface leading-[1.72] mb-6">
                    Anyone who wants to improve their health and live a healthier lifestyle.
                  </p>

                  {/* Nested Card Feature per DESIGN.md */}
                  <div className="bg-surface-2 border border-outline rounded-sm p-4 text-[13.5px] leading-relaxed text-on-surface-variant flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-on-surface-strong mb-0.5">
                        Universal & Accessible
                      </div>
                      Whether you are just beginning or looking to refine your daily routine,
                      every habit here is practical and straightforward.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE IDEA IN ONE LINE (Headline Card) */}
        <section id="the-idea" className="py-16 md:py-24 bg-surface-muted border-b border-outline">
          <div className="max-w-shell mx-auto px-5 md:px-10">
            {/* Pill label */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border px-3.5 py-1.5 rounded-full text-primary-ink font-mono text-[10px] font-semibold tracking-monowide uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                THE IDEA IN ONE LINE
              </div>
            </div>

            {/* headline-card specified in DESIGN.md:
                "a dark ink panel with a 26px radius holding one short sentence in large mono type with a faint horizontal scanline texture. Used once, at the top of a page." */}
            <div className="bg-secondary text-primary-bright rounded-lg p-8 sm:p-12 md:p-16 shadow-raised relative overflow-hidden scanline-overlay text-center border border-slate-800">
              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="font-mono text-xs text-primary-bright/70 uppercase tracking-monowide mb-4 block">
                  Core Guiding Principle
                </span>
                {/* Verbatim text from content.txt */}
                <p className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-primary-bright leading-tight tracking-tightest">
                  “Small healthy habits can make a big difference in your daily life.”
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <span className="h-0.5 w-12 bg-primary-bright/30 rounded-full"></span>
                  <span className="font-mono text-xs text-on-secondary/70 uppercase tracking-widest">
                    Healthy Life Principle
                  </span>
                  <span className="h-0.5 w-12 bg-primary-bright/30 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: BEFORE YOU START (Habits 1 to 4) */}
        <section id="before-you-start" className="py-20 md:py-28 bg-neutral border-b border-outline">
          <div className="max-w-shell mx-auto px-5 md:px-10">
            {/* Section Header Stack */}
            <div className="mb-14 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border px-3.5 py-1.5 rounded-full text-primary-ink font-mono text-[10px] font-semibold tracking-monowide uppercase mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                BEFORE YOU START
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-on-surface-strong tracking-tightest leading-[1.06] mb-5">
                BEFORE YOU START
              </h2>
              <p className="text-lg md:text-[20px] text-on-surface-variant max-w-[680px] leading-[1.72]">
                Begin your journey with clarity and intention. These 4 foundational steps set the stage for lasting success.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Habit 1 */}
              <div className="bg-surface border border-outline rounded-md p-8 shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-surface-muted text-primary border border-outline">
                      01 / FOUNDATION
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                      <Target className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-[23px] font-bold text-on-surface-strong tracking-tight mb-3">
                    1. Set your goals.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-[17px] text-on-surface leading-[1.72]">
                    Decide what healthy habits you want to improve.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center justify-between">
                  <span className="font-mono text-[11px] text-on-surface-muted uppercase">Habit 1 of 15</span>
                  <button
                    onClick={() => toggleHabit(1)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      completedHabits.includes(1)
                        ? "bg-primary text-white"
                        : "bg-surface-sunken text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {completedHabits.includes(1) ? "Practiced" : "Mark as habit"}
                  </button>
                </div>
              </div>

              {/* Habit 2 */}
              <div className="bg-surface border border-outline rounded-md p-8 shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-surface-muted text-primary border border-outline">
                      02 / PLANNING
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                      <Calendar className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-[23px] font-bold text-on-surface-strong tracking-tight mb-3">
                    2. Make a schedule.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-[17px] text-on-surface leading-[1.72]">
                    Plan time for exercise, meals, and rest.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center justify-between">
                  <span className="font-mono text-[11px] text-on-surface-muted uppercase">Habit 2 of 15</span>
                  <button
                    onClick={() => toggleHabit(2)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      completedHabits.includes(2)
                        ? "bg-primary text-white"
                        : "bg-surface-sunken text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {completedHabits.includes(2) ? "Practiced" : "Mark as habit"}
                  </button>
                </div>
              </div>

              {/* Habit 3 */}
              <div className="bg-surface border border-outline rounded-md p-8 shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-surface-muted text-primary border border-outline">
                      03 / NUTRITION
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                      <Apple className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-[23px] font-bold text-on-surface-strong tracking-tight mb-3">
                    3. Eat healthy food.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-[17px] text-on-surface leading-[1.72]">
                    Choose fruits, vegetables, and balanced meals.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center justify-between">
                  <span className="font-mono text-[11px] text-on-surface-muted uppercase">Habit 3 of 15</span>
                  <button
                    onClick={() => toggleHabit(3)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      completedHabits.includes(3)
                        ? "bg-primary text-white"
                        : "bg-surface-sunken text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {completedHabits.includes(3) ? "Practiced" : "Mark as habit"}
                  </button>
                </div>
              </div>

              {/* Habit 4 */}
              <div className="bg-surface border border-outline rounded-md p-8 shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-surface-muted text-primary border border-outline">
                      04 / HYDRATION
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                      <Droplet className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-[23px] font-bold text-on-surface-strong tracking-tight mb-3">
                    4. Drink enough water.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-[17px] text-on-surface leading-[1.72]">
                    Stay hydrated throughout the day.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center justify-between">
                  <span className="font-mono text-[11px] text-on-surface-muted uppercase">Habit 4 of 15</span>
                  <button
                    onClick={() => toggleHabit(4)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      completedHabits.includes(4)
                        ? "bg-primary text-white"
                        : "bg-surface-sunken text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {completedHabits.includes(4) ? "Practiced" : "Mark as habit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: DAILY HEALTHY HABITS (Habits 5 to 7) */}
        <section id="daily-habits" className="py-20 md:py-28 bg-surface-muted border-b border-outline">
          <div className="max-w-shell mx-auto px-5 md:px-10">
            {/* Section Header Stack */}
            <div className="mb-14 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border px-3.5 py-1.5 rounded-full text-primary-ink font-mono text-[10px] font-semibold tracking-monowide uppercase mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                DAILY HEALTHY HABITS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-on-surface-strong tracking-tightest leading-[1.06] mb-5">
                DAILY HEALTHY HABITS
              </h2>
              <p className="text-lg md:text-[20px] text-on-surface-variant max-w-[680px] leading-[1.72]">
                Small continuous actions each morning, afternoon, and evening build sustainable physical endurance and mental clarity.
              </p>
            </div>

            {/* 3 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Habit 5 */}
              <div className="bg-surface border border-outline rounded-md p-8 shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-surface-muted text-primary border border-outline">
                      05 / MOVEMENT
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                      <Activity className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-[23px] font-bold text-on-surface-strong tracking-tight mb-3">
                    5. Exercise regularly.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-[17px] text-on-surface leading-[1.72]">
                    Try walking, jogging, or cycling.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center justify-between">
                  <span className="font-mono text-[11px] text-on-surface-muted uppercase">Habit 5 of 15</span>
                  <button
                    onClick={() => toggleHabit(5)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      completedHabits.includes(5)
                        ? "bg-primary text-white"
                        : "bg-surface-sunken text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {completedHabits.includes(5) ? "Practiced" : "Mark as habit"}
                  </button>
                </div>
              </div>

              {/* Habit 6 */}
              <div className="bg-surface border border-outline rounded-md p-8 shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-surface-muted text-primary border border-outline">
                      06 / REST
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                      <Moon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-[23px] font-bold text-on-surface-strong tracking-tight mb-3">
                    6. Get enough sleep.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-[17px] text-on-surface leading-[1.72]">
                    Aim for 7 to 9 hours each night if you are an adult.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center justify-between">
                  <span className="font-mono text-[11px] text-on-surface-muted uppercase">Habit 6 of 15</span>
                  <button
                    onClick={() => toggleHabit(6)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      completedHabits.includes(6)
                        ? "bg-primary text-white"
                        : "bg-surface-sunken text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {completedHabits.includes(6) ? "Practiced" : "Mark as habit"}
                  </button>
                </div>
              </div>

              {/* Habit 7 */}
              <div className="bg-surface border border-outline rounded-md p-8 shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-surface-muted text-primary border border-outline">
                      07 / MORNING FUEL
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                      <Coffee className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-[23px] font-bold text-on-surface-strong tracking-tight mb-3">
                    7. Eat breakfast.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-[17px] text-on-surface leading-[1.72]">
                    Choose a nutritious breakfast when it fits your routine.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center justify-between">
                  <span className="font-mono text-[11px] text-on-surface-muted uppercase">Habit 7 of 15</span>
                  <button
                    onClick={() => toggleHabit(7)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      completedHabits.includes(7)
                        ? "bg-primary text-white"
                        : "bg-surface-sunken text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {completedHabits.includes(7) ? "Practiced" : "Mark as habit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: TAKING CARE OF YOUR BODY (Habits 8 to 10) */}
        <section id="body-care" className="py-20 md:py-28 bg-neutral border-b border-outline">
          <div className="max-w-shell mx-auto px-5 md:px-10">
            {/* Section Header Stack */}
            <div className="mb-14 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border px-3.5 py-1.5 rounded-full text-primary-ink font-mono text-[10px] font-semibold tracking-monowide uppercase mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                TAKING CARE OF YOUR BODY
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-on-surface-strong tracking-tightest leading-[1.06] mb-5">
                TAKING CARE OF YOUR BODY
              </h2>
              <p className="text-lg md:text-[20px] text-on-surface-variant max-w-[680px] leading-[1.72]">
                Protecting your physical wellbeing involves regular hygiene, conscious nutrition choices, and scheduled pauses.
              </p>
            </div>

            {/* 3 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Habit 8 */}
              <div className="bg-surface border border-outline rounded-md p-8 shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-surface-muted text-primary border border-outline">
                      08 / HYGIENE
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-[23px] font-bold text-on-surface-strong tracking-tight mb-3">
                    8. Keep yourself clean.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-[17px] text-on-surface leading-[1.72]">
                    Practise good personal hygiene.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center justify-between">
                  <span className="font-mono text-[11px] text-on-surface-muted uppercase">Habit 8 of 15</span>
                  <button
                    onClick={() => toggleHabit(8)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      completedHabits.includes(8)
                        ? "bg-primary text-white"
                        : "bg-surface-sunken text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {completedHabits.includes(8) ? "Practiced" : "Mark as habit"}
                  </button>
                </div>
              </div>

              {/* Habit 9 */}
              <div className="bg-surface border border-outline rounded-md p-8 shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-surface-muted text-primary border border-outline">
                      09 / MODERATION
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-[23px] font-bold text-on-surface-strong tracking-tight mb-3">
                    9. Reduce junk food.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-[17px] text-on-surface leading-[1.72]">
                    Limit foods high in sugar, salt, and unhealthy fats.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center justify-between">
                  <span className="font-mono text-[11px] text-on-surface-muted uppercase">Habit 9 of 15</span>
                  <button
                    onClick={() => toggleHabit(9)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      completedHabits.includes(9)
                        ? "bg-primary text-white"
                        : "bg-surface-sunken text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {completedHabits.includes(9) ? "Practiced" : "Mark as habit"}
                  </button>
                </div>
              </div>

              {/* Habit 10 */}
              <div className="bg-surface border border-outline rounded-md p-8 shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-surface-muted text-primary border border-outline">
                      10 / PAUSE
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                      <PauseCircle className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-[23px] font-bold text-on-surface-strong tracking-tight mb-3">
                    10. Take short breaks.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-[17px] text-on-surface leading-[1.72]">
                    Rest your body and mind during busy days.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center justify-between">
                  <span className="font-mono text-[11px] text-on-surface-muted uppercase">Habit 10 of 15</span>
                  <button
                    onClick={() => toggleHabit(10)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      completedHabits.includes(10)
                        ? "bg-primary text-white"
                        : "bg-surface-sunken text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    {completedHabits.includes(10) ? "Practiced" : "Mark as habit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: WHEN YOU FEEL TIRED OR STRESSED (Dark Ink Section per DESIGN.md) */}
        <section
          id="tired-stressed"
          className="py-20 md:py-32 bg-secondary text-on-secondary relative border-b border-slate-800"
        >
          <div className="max-w-shell mx-auto px-5 md:px-10">
            {/* Section Header Stack with bright blue accent per DESIGN.md */}
            <div className="mb-14 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-primary-bright/30 px-3.5 py-1.5 rounded-full text-primary-bright font-mono text-[10px] font-semibold tracking-monowide uppercase mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-bright"></span>
                WHEN YOU FEEL TIRED OR STRESSED
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-white tracking-tightest leading-[1.06] mb-5">
                WHEN YOU FEEL TIRED OR STRESSED
              </h2>
              <p className="text-lg md:text-[20px] text-white/75 max-w-[680px] leading-[1.72]">
                Restoration is just as vital as action. Take thoughtful steps to recover, recharge, and reach out when you need support.
              </p>
            </div>

            {/* 5 Cards Grid in Dark Theme (inner panels in white at 10% opacity) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Habit 11 */}
              <div className="bg-white/[0.07] border border-white/10 rounded-md p-7 backdrop-blur hover:bg-white/[0.11] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-primary-bright border border-white/15">
                      11 / RECOVERY
                    </span>
                    <BatteryCharging className="w-5 h-5 text-primary-bright" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    11. Take a rest.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-base text-white/80 leading-relaxed">
                    Give your body time to recover.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-white/50 uppercase">Habit 11 of 15</span>
                  <button
                    onClick={() => toggleHabit(11)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
                      completedHabits.includes(11)
                        ? "bg-primary-bright text-secondary font-bold"
                        : "bg-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    {completedHabits.includes(11) ? "Practiced" : "Mark"}
                  </button>
                </div>
              </div>

              {/* Habit 12 */}
              <div className="bg-white/[0.07] border border-white/10 rounded-md p-7 backdrop-blur hover:bg-white/[0.11] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-primary-bright border border-white/15">
                      12 / CALM
                    </span>
                    <Headphones className="w-5 h-5 text-primary-bright" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    12. Relax your mind.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-base text-white/80 leading-relaxed">
                    Try listening to music or doing relaxing activities.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-white/50 uppercase">Habit 12 of 15</span>
                  <button
                    onClick={() => toggleHabit(12)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
                      completedHabits.includes(12)
                        ? "bg-primary-bright text-secondary font-bold"
                        : "bg-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    {completedHabits.includes(12) ? "Practiced" : "Mark"}
                  </button>
                </div>
              </div>

              {/* Habit 13 */}
              <div className="bg-white/[0.07] border border-white/10 rounded-md p-7 backdrop-blur hover:bg-white/[0.11] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-primary-bright border border-white/15">
                      13 / NATURE
                    </span>
                    <Trees className="w-5 h-5 text-primary-bright" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    13. Spend time outdoors.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-base text-white/80 leading-relaxed">
                    Enjoy fresh air and nature.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-white/50 uppercase">Habit 13 of 15</span>
                  <button
                    onClick={() => toggleHabit(13)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
                      completedHabits.includes(13)
                        ? "bg-primary-bright text-secondary font-bold"
                        : "bg-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    {completedHabits.includes(13) ? "Practiced" : "Mark"}
                  </button>
                </div>
              </div>

              {/* Habit 14 */}
              <div className="bg-white/[0.07] border border-white/10 rounded-md p-7 backdrop-blur hover:bg-white/[0.11] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-primary-bright border border-white/15">
                      14 / CONNECTION
                    </span>
                    <MessageCircle className="w-5 h-5 text-primary-bright" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    14. Talk to someone.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-base text-white/80 leading-relaxed">
                    Share your feelings with family or friends.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-white/50 uppercase">Habit 14 of 15</span>
                  <button
                    onClick={() => toggleHabit(14)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
                      completedHabits.includes(14)
                        ? "bg-primary-bright text-secondary font-bold"
                        : "bg-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    {completedHabits.includes(14) ? "Practiced" : "Mark"}
                  </button>
                </div>
              </div>

              {/* Habit 15 (Key healthcare callout) */}
              <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-r from-primary-ink/40 to-white/[0.08] border border-primary-bright/30 rounded-md p-7 backdrop-blur hover:border-primary-bright/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-primary-bright/20 text-primary-bright border border-primary-bright/40">
                      15 / PROFESSIONAL CARE
                    </span>
                    <Stethoscope className="w-5 h-5 text-primary-bright" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
                    15. Seek help when needed.
                  </h3>
                  {/* Verbatim text */}
                  <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
                    Consult a healthcare professional if you have ongoing health concerns.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-white/50 uppercase">Habit 15 of 15</span>
                  <button
                    onClick={() => toggleHabit(15)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                      completedHabits.includes(15)
                        ? "bg-primary-bright text-secondary font-bold"
                        : "bg-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    {completedHabits.includes(15) ? "Practiced" : "Mark"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: KEY NUMBERS FOR THE PAGE */}
        <section id="key-numbers" className="py-20 md:py-28 bg-neutral border-b border-outline">
          <div className="max-w-shell mx-auto px-5 md:px-10">
            {/* Section Header Stack */}
            <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border px-3.5 py-1.5 rounded-full text-primary-ink font-mono text-[10px] font-semibold tracking-monowide uppercase mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                KEY NUMBERS FOR THE PAGE
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-on-surface-strong tracking-tightest leading-[1.06] mb-4">
                KEY NUMBERS FOR THE PAGE
              </h2>
              <p className="text-lg text-on-surface-variant">
                The core pillars of our simple everyday health philosophy.
              </p>
            </div>

            {/* Stat Grid Component per DESIGN.md:
                "Stat grid: 2 or 4 cells joined by 1px hairline gaps inside one rounded card; each cell is a big tabular number over a 13.5px caption. One 'hot' cell may use emerald (or primary blue) for the number." */}
            <div className="bg-outline p-[1px] rounded-lg overflow-hidden shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
                {/* Number 1 */}
                <div className="bg-surface p-8 md:p-10 flex flex-col justify-between hover:bg-surface-2 transition-colors">
                  <div>
                    <span className="font-mono text-[11px] text-on-surface-muted uppercase tracking-monowide block mb-2">
                      Total Guidance
                    </span>
                    <div className="font-extrabold text-5xl md:text-[52px] text-on-surface-strong tracking-tightest leading-none font-feature-tnum mb-4">
                      15
                    </div>
                  </div>
                  {/* Verbatim text */}
                  <p className="text-[15px] font-medium text-on-surface-variant leading-relaxed">
                    15 simple healthy lifestyle tips.
                  </p>
                </div>

                {/* Number 2 */}
                <div className="bg-surface p-8 md:p-10 flex flex-col justify-between hover:bg-surface-2 transition-colors">
                  <div>
                    <span className="font-mono text-[11px] text-on-surface-muted uppercase tracking-monowide block mb-2">
                      First Step
                    </span>
                    <div className="font-extrabold text-5xl md:text-[52px] text-on-surface-strong tracking-tightest leading-none font-feature-tnum mb-4">
                      4
                    </div>
                  </div>
                  {/* Verbatim text */}
                  <p className="text-[15px] font-medium text-on-surface-variant leading-relaxed">
                    4 important habits to start with.
                  </p>
                </div>

                {/* Number 3 ("Hot" cell in primary color per DESIGN.md) */}
                <div className="bg-surface p-8 md:p-10 flex flex-col justify-between hover:bg-surface-2 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-soft rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
                  <div>
                    <span className="font-mono text-[11px] text-primary-ink font-semibold uppercase tracking-monowide block mb-2">
                      Ultimate Purpose
                    </span>
                    <div className="font-extrabold text-5xl md:text-[52px] text-primary tracking-tightest leading-none font-feature-tnum mb-4">
                      1
                    </div>
                  </div>
                  {/* Verbatim text */}
                  <p className="text-[15px] font-semibold text-on-surface-strong leading-relaxed">
                    1 goal: Live a healthier and happier life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CALL TO ACTION */}
        <section id="cta" className="py-20 md:py-28 bg-surface-muted border-b border-outline">
          <div className="max-w-shell-narrow mx-auto px-5 md:px-10 text-center">
            {/* Pill label */}
            <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border px-3.5 py-1.5 rounded-full text-primary-ink font-mono text-[10px] font-semibold tracking-monowide uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              CALL TO ACTION
            </div>

            {/* Verbatim Headline from content.txt */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface-strong tracking-tightest leading-[1.1] mb-5">
              Start your healthy lifestyle journey today.
            </h2>

            {/* Verbatim Subtext from content.txt */}
            <p className="text-lg md:text-xl text-on-surface-variant max-w-[620px] mx-auto leading-relaxed mb-10">
              Share these simple tips with your friends and family.
            </p>

            {/* Interactive Share & Action Card */}
            <div className="bg-surface border border-outline rounded-md p-6 sm:p-8 shadow-card text-left max-w-xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <button
                  onClick={handleCopy}
                  className="w-full sm:w-auto flex-1 bg-primary text-on-primary hover:bg-primary-strong text-[15px] font-semibold py-3.5 px-6 rounded-full shadow-raised hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-2 min-h-[44px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Link Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      Share These 15 Tips
                    </>
                  )}
                </button>

                <button
                  onClick={handleCopy}
                  className="w-full sm:w-auto bg-surface-sunken hover:bg-outline border border-outline-strong text-on-surface-strong text-[14px] font-semibold py-3.5 px-5 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Copy className="w-4 h-4 text-on-surface-variant" />
                  Copy Link
                </button>
              </div>

              {/* Habit Reminders Form using input design token */}
              <form onSubmit={handleSubscribe} className="pt-5 border-t border-outline">
                <label
                  htmlFor="reminder-email"
                  className="block text-[13.5px] font-semibold text-on-surface-strong mb-2"
                >
                  Get a daily healthy habit reminder in your inbox:
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="reminder-email"
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    className="flex-1 bg-surface-sunken text-on-surface-strong border border-outline-strong rounded-sm h-[44px] px-3.5 text-[15px] shadow-input focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  />
                  <button
                    type="submit"
                    className="bg-secondary text-on-secondary hover:bg-primary px-6 h-[44px] rounded-full text-[14px] font-medium shadow-raised transition-colors flex items-center justify-center shrink-0"
                  >
                    Subscribe Free
                  </button>
                </div>
                {subscribed && (
                  <p className="mt-2 text-xs font-semibold text-primary flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Thank you for subscribing! Your journey begins today.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* 3. FOOTER */}
      <footer className="bg-surface-muted border-t border-outline text-on-surface-variant py-16 md:py-20 text-[13.5px] leading-relaxed">
        <div className="max-w-shell mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
            {/* Column 1: Brand & Identity */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-primary">
                  <Heart className="w-4 h-4 fill-primary text-primary" />
                </div>
                <span className="font-extrabold text-lg tracking-tight text-on-surface-strong">
                  HEALTHY LIFE
                </span>
              </div>
              <p className="text-[14px] text-on-surface-variant max-w-sm mb-4">
                A simple guide to building healthy habits for everyday life. Small healthy habits can make a big difference in your daily life.
              </p>
              <div className="font-mono text-xs text-on-surface-muted">
                15 Tips • 4 Starter Habits • 1 Goal
              </div>
            </div>

            {/* Column 2: Sections */}
            <div>
              <div className="font-semibold text-on-surface-strong uppercase text-xs tracking-wider mb-4">
                Guide Sections
              </div>
              <ul className="space-y-2 text-on-surface-variant">
                <li>
                  <a href="#who-this-is-for" className="hover:text-primary transition-colors">
                    Who This Is For
                  </a>
                </li>
                <li>
                  <a href="#the-idea" className="hover:text-primary transition-colors">
                    The Idea In One Line
                  </a>
                </li>
                <li>
                  <a href="#before-you-start" className="hover:text-primary transition-colors">
                    Before You Start
                  </a>
                </li>
                <li>
                  <a href="#daily-habits" className="hover:text-primary transition-colors">
                    Daily Healthy Habits
                  </a>
                </li>
                <li>
                  <a href="#body-care" className="hover:text-primary transition-colors">
                    Taking Care of Your Body
                  </a>
                </li>
                <li>
                  <a href="#tired-stressed" className="hover:text-primary transition-colors">
                    When Tired or Stressed
                  </a>
                </li>
                <li>
                  <a href="#key-numbers" className="hover:text-primary transition-colors">
                    Key Numbers
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links & Contact */}
            <div>
              <div className="font-semibold text-on-surface-strong uppercase text-xs tracking-wider mb-4">
                Spread The Word
              </div>
              <ul className="space-y-2 text-on-surface-variant">
                <li>
                  <button onClick={handleCopy} className="hover:text-primary transition-colors text-left">
                    Copy Share Link
                  </button>
                </li>
                <li>
                  <a href="#cta" className="hover:text-primary transition-colors">
                    Start Today
                  </a>
                </li>
                <li>
                  <a href="#before-you-start" className="hover:text-primary transition-colors">
                    Checklist & Progress
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* FOOTER NOTE - Verbatim text from content.txt */}
          <div className="pt-8 border-t border-outline flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="max-w-4xl">
              <span className="font-mono text-[11px] font-semibold text-on-surface-muted uppercase tracking-monowide block mb-1">
                FOOTER NOTE
              </span>
              <p className="text-[13px] text-on-surface-variant leading-relaxed">
                Healthy Life is a free educational guide that shares general tips for a healthier lifestyle. It is not a substitute for professional medical advice.
              </p>
            </div>
            <div className="shrink-0 font-mono text-[11px] text-on-surface-muted">
              © {new Date().getFullYear()} Healthy Life. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
